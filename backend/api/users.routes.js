import express from "express"
import UsersCtrl from "./users.controller.js"

const router = express.Router()

router.
    route("/")
    .get(UsersCtrl.apiGetUsers)
    .post(UsersCtrl.apiPostUser)

router.route("/id/:id").get(UsersCtrl.apiGetUserById)

router.route("/email/:email").get(UsersCtrl.apiGetUserByEmail)

router.route("/accept").put(UsersCtrl.apiAcceptRental)
router.route("/reject").put(UsersCtrl.apiRejectRental)

router.route("/recommend").post(UsersCtrl.apiChatLLM)

export default router