const express = require('express')
const router = express.Router()
const { getAllPhotos } = require('../controllers/photoController')
const path = require('path');

/// api routes
router.get('/api/getAllPhotos', getAllPhotos);
//***password look up



// page routes
router.get('/pages/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../front/index.html'));
})
//****change out
router.get('/pages/gallery', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../front/gallery.html'));
})

router.get('/pages/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../front/contact.html'));
})




router.get('/', (req, res) => {
    res.redirect('/pages/home')
})

// router.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '..', req.url))
// })


module.exports = router