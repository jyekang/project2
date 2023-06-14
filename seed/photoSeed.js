const db = require ('../db')
const Photo = require('../models/photo')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const photos = [
        {image: 'IMG_6188.jpg'},
        {image: 'IMG_6229.jpg'},
        {image: 'IMG_6397.jpg'},
        {image: 'IMG_6430.jpg'},
        {image: 'IMG_6571.jpg'},
        {image: 'IMG_6585.jpg'},
        {image: 'IMG_6589.jpg'},
        {image: 'IMG_6599.jpg'},
        {image: 'IMG_6610.jpg'},
        {image: 'IMG_6612.jpg'},
        {image: 'IMG_6624.jpg'},
        {image: 'IMG_6628.jpg'},
        {image: 'IMG_6645.jpg'},
        {image: 'IMG_6648.jpg'},
        {image: 'IMG_6657.jpg'},
        {image: 'IMG_6665.jpg'},
        {image: 'IMG_6676.jpg'},
        {image: 'IMG_6694.jpg'},
        {image: 'IMG_6708.jpg'},
        {image: 'IMG_6714.jpg'},
        {image: 'IMG_6724.jpg'},
        {image: 'IMG_6729.jpg'},
        {image: 'IMG_6747.jpg'},
        {image: 'IMG_6748.jpg'},
        {image: 'IMG_6817.jpg'},
        {image: 'IMG_6820.jpg'},
        {image: 'IMG_6828.jpg'},
        {image: 'IMG_6878.jpg'},
        {image: 'IMG_6898.jpg'}
        
    ]
    await Photo.deleteMany()
    await Photo.insertMany(photos)
    
    console.log('inserted some photos')
}
const run = async() => {
    await main()
    db.close()
}

run()