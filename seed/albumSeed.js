const db = require ('../db')
const Album = require('../models/album')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const albums = [
        {
        title: "M and M",
        image: [
            "648b8657e3255b33a8a6ae38",
            "648b8657e3255b33a8a6ae39",
            "648b8657e3255b33a8a6ae3a",
            "648b8657e3255b33a8a6ae3b",
            "648b8657e3255b33a8a6ae3c",
            "648b8657e3255b33a8a6ae3d",
        ],
        datecreated: 05/03/2023
    },
    {
        title: "J and A",
        image: [
            "648b8657e3255b33a8a6ae3e",
            "648b8657e3255b33a8a6ae3f",
            "648b8657e3255b33a8a6ae40",
            "648b8657e3255b33a8a6ae41",
            "648b8657e3255b33a8a6ae42",
            "648b8657e3255b33a8a6ae43",
        ],
        datecreated: 05/04/2023
    }
]
    await Album.deleteMany()
    await Album.insertMany(albums)

    console.log('inserted some albums')
}

const run = async() => {
    await main()
    db.close()
}

run()