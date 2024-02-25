// Has functions called in routes; takes data from User DAO

import UsersDAO from "../DAO/usersDAO.js"

export default class UsersCtrl {
    static async apiChatLLM(req, res, next) {
        // console.log(req.body)

        let messages = req.body

        let response = await UsersDAO.chatLLM(messages)

        console.log("THIS"); 
        console.log(response); 
        res.json(response); 
    }

    static async apiGetUsers(req, res, next) {
        let filters = {}
        if (req.query.email) {
            filters.email = req.query.email
        }

        const { usersList, totalNumUsers } = await UsersDAO.getUsers({
            filters,
        })

        let response = {
            users: usersList, 
            filters: filters, 
            total_results: totalNumUsers, 
        }
        
        res.json(response)
    }

    static async apiGetUserById(req, res, next) {
        try {
            let id = req.params.id || {}
            // let user = await UsersDAO.getUserById(id)
            let user = await UsersDAO.getUserById(id)

            if (!user) {
                res.status(404).json({ error: "Not found bro" })
                return
            }

            res.json(user)
        } catch(e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiGetUserByEmail(req, res, next) {
        try {
            let email = decodeURIComponent(req.params.email) || {}
            let user = await UsersDAO.getUserByEmail(email)

            if (!user) {
                res.status(404).json({ error: "Not found bro" })
                return
            }

            res.json(user)
        } catch(e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiPostUser(req, res, next) {
        try {
            const username = req.body.username
            const email = req.body.email
            const first = req.body.first
            const last = req.body.last
            const bio = req.body.bio
            const role = req.body.role
            const city = req.body.city
            const country = req.body.country

            const EventResponse = await UsersDAO.addUser(
                username,
                email, 
                first, 
                last,
                bio,
                role,
                city,
                country,
            )
            
            //res.json({ status: "success" })
            res.json(EventResponse)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiAcceptRental(req, res, next) {
        try {
            const userId = req.body.userId
            const rentalId = req.body.rentalId
            const messages = req.body.messages

            const RentalResponse = await UsersDAO.acceptRental(
                userId,
                rentalId,
                messages,
            )

            if (RentalResponse.modifiedCount == 0) {
                throw new Error("unable to update accepted")
            }

            res.json(RentalResponse)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiRejectRental(req, res, next) {
        try {
            const userId = req.body.userId
            const rentalId = req.body.rentalId
            const messages = req.body.messages

            const RentalResponse = await UsersDAO.rejectRental(
                userId,
                rentalId,
                messages
            )

            if (RentalResponse.modifiedCount == 0) {
                throw new Error("unable to update accepted")
            }

            res.json(RentalResponse)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }
}