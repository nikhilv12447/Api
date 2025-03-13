export default function (connectDB) {
    return async function (req, res, next) {
        const db = await connectDB;
        req.db = db
        next()
    }
}