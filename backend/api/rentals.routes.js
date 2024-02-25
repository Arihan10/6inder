import express from "express"
import RentalsCtrl from "./rentals.controller.js"

const router = express.Router()

router.
    route("/")
    .get(RentalsCtrl.apiGetRentals)
    .post(RentalsCtrl.apiPostRental)

router.route("/id/:id").get(RentalsCtrl.apiGetRentalById)

export default router