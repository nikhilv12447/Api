export default function (req, res, next) {
    res.resolveReq = function (statusCode = 200, message, payload) {
        res.status(statusCode).json({
            status: statusCode,
            data: payload,
            message
        })
    }
    next()
}