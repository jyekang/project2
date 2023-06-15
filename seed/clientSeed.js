const db = require ('../db')
const Client = require('../models/client')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const clients = [
        {
            firstName: "Michael",
            lastName: "Navales",
        },
        {
            firstName: "Ashley",
            lastName: "Gonzales",
        }
    ]

    await Client.deleteMany()
    await Client.insertMany(clients)

    console.log('inserted some clients')

}

const run = async() => {
    await db.connect()
    await main()
    db.close()
}

run()