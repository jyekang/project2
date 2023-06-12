const Photo = require(`../models/photo`)

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find()
        return res.status(200).json({ photos })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPhotos
}