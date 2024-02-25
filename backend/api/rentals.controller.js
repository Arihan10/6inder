import RentalsDAO from "../DAO/rentalsDAO.js"

export default class RentalsCtrl {
    static async apiGetRentals(req, res, next) {
        let filters = {}
        if (req.query.owner) filters.owner = req.query.owner

        const { rentalsList, totalNumRentals } = await RentalsDAO.getRentals({ filters })

        let response = {
            rentals: rentalsList,
            filters: filters,
            total_rentals: totalNumRentals,
        }
        res.json(response)
    }

    static async apiGetRentalById(req, res, next) {
        try {
            const id = req.params.id

            let rental = await RentalsDAO.getRentalById(id)
    
            res.json(rental)
        } catch (e) {
            console.log(`api, ${e}`)
            res.json(500).status({ error: e })
        }
    }

    static async apiPostRental(req, res, next) {
        // console.log(req)
        try {
            const owner = req.body.owner; 
            const address = req.body.address; 
            const city = req.body.city; 
            const country = req.body.country; 
            const price = req.body.price; 
            const description = req.body.description; 
            const lookFor = req.body.lookFor; 
            const images = req.body.images; 
            const date = new Date(); 

            const RentalResponse = await RentalsDAO.addRental(
                owner,
                address,
                city,
                country,
                price,
                description,
                lookFor,
                images,
                date,
            )

            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}