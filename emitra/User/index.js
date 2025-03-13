export function createUser(req, res) {
    const {
        db,
        body: {
            firstName,
            lastName,
            mobileNumber,
            email,
            dateOfBirth
        } = {}
    } = req
    const userColl = db.collection("user")

    userColl.insertOne({
        firstName,
        lastName,
        mobileNumber,
        email,
        dateOfBirth: new Date(dateOfBirth)
    }).then(() => {
        res.resolveReq(200, "done")
    }).catch(err => {
        res.resolveReq(400, err.message)
    })
}

export function updateUser(req, res) {

}

export function deleteUser(req, res) {

}

export function getUsers(req, res) {

}

export function getUser(req, res) {

}