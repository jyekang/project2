const express = require('express')
const router = express.Router()
const { getAllPhotos, getPhotoById, createPhoto, updatePhoto, deletePhoto } = require('../controllers/photoController')

const path = require('path');


router.get('/getAllPhotos', getAllPhotos);
router.post('/getAllPhotos', createPhoto);
router.get('/getAllPhotos/:id', getPhotoById);
router.put('/getAllPhotos/:id', updatePhoto);
router.delete('/getAllPhotos/:id', deletePhoto);


module.exports = router