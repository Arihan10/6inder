import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId

let users

export default class UsersDAO {
    static async injectDB(conn) {
        if (users) return
        
        try {
            users = await conn.db(process.env.DB_NS).collection("users")
        } catch (e) {
            console.error(`Unable to establish a collection handle in usersDAO: ${e}`)
        }
    }

    static async getUsers({
        filters = null, 
    } = {}) {
        let query
        if (filters) {
            if ("email" in filters) {
                query = { $text: { $search: filters["email"] } }; 
            }
        }

        let cursor

        try {
            cursor = await users.find(query)
        } catch (e) {
            console.error(`Unable to find issue command, ${e}`)
            return { usersList: [], totalNumUsers: 0 }
        }

        try {
            const usersList = await cursor.toArray()
            const totalNumUsers = await users.countDocuments(query)

            return { usersList, totalNumUsers }
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)

            return { usersList: [], totalNumUsers: 0 }
        }
    }

    static async getUserById(id) {
        try {
            const pipeline = [
                {
                    $match: {
                        _id: new ObjectId(id)
                    }, 
                }, 
                {
                    $lookup: {
                        from: "rentals", 
                        let: {
                            id: "$_id", 
                        }, 
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$owner", "$$id"], 
                                    }, 
                                }, 
                            }, 
                            {
                                $sort: {
                                    date: -1,
                                },
                            },
                        ],
                        as: "rentals", 
                    }, 
                }, 
                {
                    $addFields: {
                        rentals: "$rentals", 
                    }, 
                }, 
            ]
            return await users.aggregate(pipeline).next()
        } catch (e) {
            console.error(`Something went wrong in getUserById: ${e}`)
            throw e
        }
    }

    static async getUserByEmail(email) {
        try {
            email = email.toLowerCase(); 
            console.log(email); 

            const pipeline = [
                {
                    $match: {
                        email: email
                    }
                }
            ]

            return await users.aggregate(pipeline).next(); 
        } catch (e) {
            console.error(`Something went wrong in getUserByName: ${e}`)
            throw e
        }
    }

    static async addUser(username, email, first, last, bio, role, city, country) {
        try {
            const userDoc = {
                username: username,
                email: email.toLowerCase(), 
                first: first, 
                last: last,
                bio: bio, 
                role: role,
                city: city,
                country: country,
                accepted: [],
                rejected: [],
            }

            return await users.insertOne(userDoc)
        } catch (e) {
            console.error(`Unable to create user: ${e}`)
            return { error: e }
        }
    }

    static async acceptRental(userId, rentalId) {
        try {
            const updateResponse = await users.updateOne(
                {
                    _id: new ObjectId(userId),
                },
                { $push: {
                    accepted: new ObjectId(rentalId),
                }}
            )
    
            return updateResponse; 
        } catch (e) {
            console.error(`Unable to update user: ${e}`)
            return { error: e }
        }
    }

    static async rejectRental(userId, rentalId) {
        try {
            const updateResponse = await users.updateOne(
                {
                    _id: new ObjectId(userId),
                },
                { $push: {
                    rejected: new ObjectId(rentalId),
                }}
            )
    
            return updateResponse; 
        } catch (e) {
            console.error(`Unable to update user: ${e}`)
            return { error: e }
        }
    }
}