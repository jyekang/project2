const db = require ('../db')
const Album = require('../models/album')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const albums = [
        {
        title: "M and M",
        image: [
            "64876d00f726ad6985d126f2","64876d00f726ad6985d126f3",
            "64876d00f726ad6985d126f4",
            "64876d00f726ad6985d126f6",
            "64876d00f726ad6985d126f9",
            "64876d00f726ad6985d126fb",
            "64876d00f726ad6985d126ff"
        ],
        datecreated: 05/03/2023
    },
    {
        title: "J and A",
        image: [
            "64876d00f726ad6985d1270e","64876d00f726ad6985d1270d",
            "64876d00f726ad6985d1270c",
            "64876d00f726ad6985d1270b",
            "64876d00f726ad6985d1270a",
            "64876d00f726ad6985d126ff"
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