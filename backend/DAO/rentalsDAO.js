import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId

let rentals

export default class RentalsDAO {
    static async injectDB(conn) {
        if (rentals) return
        
        try {
            rentals = await conn.db(process.env.DB_NS).collection("rentals")
        } catch (e) {
            console.error(`Unable to establish a collection handle in rentalsDAO: ${e}`)
        }
    }

    static async getRentals({
        filters = null, 
    } = {}) {
        let query;
        if (filters) {
            if ("owner" in filters) {
                query = { $text: { $search: filters["owner"] } }; 
            }
        }

        try {
            const pipeline = [
                {
                    $lookup: {
                        from: "users",
                        localField: "owner",
                        foreignField: "_id",
                        as: "userData"
                    }
                },
                {
                    $unwind: "$userData"
                },
                {
                    $addFields: {
                        user: "$userData"
                    }
                },
                {
                    $project: {
                        userData: 0
                    }
                }
            ];
            
            const rentalsList = await rentals.aggregate(pipeline).toArray(); 
            
            return { rentalsList, totalNumRentals: 0 };
    } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents ${e}`)
            return { rentalsList: [], totalNumRentals: 0 }
        }
    }

    static async getRentalById(id) {
        try {
            const pipeline = [
                {
                    $match: {
                        _id: new ObjectId(id),
                    }
                }
            ]

            return await rentals.aggregate(pipeline).next(); 
        } catch (e) {
            console.error(`Something went wrong in getRentalById: ${e}`)
            throw e
        }
    }

    static async addRental(owner, address, city, country, price, description, lookFor, images, date) {
        try {
            const rentalsDoc = {
                owner: new ObjectId(owner), 
                address: address, 
                city: city,
                country: country,
                price: price,
                description: description,
                lookFor: lookFor,
                images: images,
                date: date,
            }

            return await rentals.insertOne(rentalsDoc); 
        } catch (e) {
            console.error(`Unable to post rental: ${e}`)
        }
    }
}