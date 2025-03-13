import express from "express"
import cors from "cors"
import emitraRoutes from "./emitra"
import responseFormatMiddleware from "./middlewares/responseFormatMiddleware"

const app = express()

app.use(cors())
app.use(express.json())
app.use(responseFormatMiddleware)

const PORT = process.env.PORT || 3000

app.use("/api/emitra", emitraRoutes)

app.get("/haircut/list", (req, res) => {
    res.send({
        list: [
            {
                id: "Army1",
                name: "Army Cut"
            },
            {
                id: "katora1",
                name: "Katora Cut"
            }
        ]
    })
})

app.get("/service/list", (req, res) => {
    res.send({
        list: [
            {
                id: "update_uuid",
                name: "Update Aadhar Card"
            },
            {
                id: "neet_form",
                name: "Neet Form"
            }
        ]
    })
})

app.get("/haircut/comments/:id", (req, res) => {
    setTimeout(() => {
        res.send({
            list: [
                {
                    id: "c1",
                    userName: "Nikhil Verma",
                    comment: "This is awesome"
                },
                {
                    id: "c2",
                    userName: "Pankaj Delvi",
                    comment: "They do exectly same"
                }
            ]
        })
    }, 200)
})

app.listen(PORT, () => {
    console.log("Api server is running on port ", PORT)
})