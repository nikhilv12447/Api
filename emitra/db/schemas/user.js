export default {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "User Validation",
            required: ["firstName", "mobileNumber", "email"],
            properties: {
                firstName: {
                    bsonType: "string",
                    description: "First name of user."
                },
                mobileNumber: {
                    bsonType: "string",
                    description: "Mobile number of user."
                },
                email: {
                    bsonType: "string",
                    description: "Email of user."
                },
                dateOfBirth: {
                    bsonType: "date",
                    description: "Date of birth of user."
                }
            }
        }
    }
}

export function createUserIndex(db) {
    const userColl = db.collection("user")
    userColl.createIndex({ mobileNumber: 1 }, { unique: true })
    userColl.createIndex({ email: 1 }, { unique: true })
}