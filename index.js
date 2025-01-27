const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000
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