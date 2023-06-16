const db = require ('../db')
const Photo = require('../models/photo')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const photos = [
        {image: 'img1.jpg'},
        {image: 'img2.jpg'},
        {image: 'img3.jpg'},
        {image: 'img4.jpg'},
        {image: 'img5.jpg'},
        {image: 'img6.jpg'},
        {image: 'img7.jpg'},
        {image: 'img8.jpg'},
        {image: 'img9.jpg'},
        {image: 'img10.jpg'},
        {image: 'img11.jpg'},
        {image: 'img12.jpg'},
        {image: 'img13.jpg'},
        {image: 'img14.jpg'},
        {image: 'img15.jpg'},
        {image: 'img16.jpg'},
        {image: 'img17.jpg'},
        {image: 'img18.jpg'},
        {image: 'img19.jpg'},
        {image: 'img20.jpg'},
        {image: 'img21.jpg'},
        {image: 'img22.jpg'},
        {image: 'img23.jpg'},
        {image: 'img24.jpg'},
        {image: 'img25.jpg'},
        {image: 'img26.jpg'},
        {image: 'img27.jpg'},
        {image: 'img28.jpg'},
        {image: 'img29.jpg'},
        {image: 'img30.jpg'},
        {image: 'img32.jpg'},
        {image: 'img33.jpg'},
        {image: 'img34.jpg'},
        {image: 'img202.jpg'},
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