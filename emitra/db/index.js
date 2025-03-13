import { MongoClient } from "mongodb"
import userSchema, { createUserIndex } from "./schemas/user"

const url = process.env.MONGO_DB_URL;
const client = new MongoClient(url);
const dbName = "emitra"

async function connect() {
    await client.connect();
    console.log('Connected successfully to database');
    const db = client.db(dbName);

    db.collection("").createIndex
    return db;
}

export function createCollections(req, res) {
    const { db } = req
    const promises = []
    promises.push(db.createCollection("user", userSchema))

    Promise.all(promises).then(() => {
        createUserIndex(db)
        res.resolveReq(200, "Collections are created")
    }).catch(err => {
        res.resolveReq(400, err.message)
    })
}

export default connect