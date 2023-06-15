const Album = require(`../models/album`)

const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate({ path: 'image', model: 'photo'})
        return res.status(200).json({ albums })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getAllAlbums
};