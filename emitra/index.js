import { Router } from "express"
import dbMiddleware from "./middlewares/dbMiddleware"
import connectDB, { createCollections } from "./db"
import { createUser, getUser, getUsers } from "./User"
import { syncGoogleForm, getResponses } from "./Forms"
const emitraApi = Router()

emitraApi.use(dbMiddleware(connectDB()))

emitraApi.get("/createCollections", createCollections)
emitraApi.post("/user", createUser)
emitraApi.get("/users", getUsers)
emitraApi.get("/user/:userId", getUser)
emitraApi.get("/syncFrom", syncGoogleForm)
emitraApi.get("/responses", getResponses)

emitraApi.get("/text", (req, res) => {
    // req.params
})

export default emitraApi