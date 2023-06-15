const Album = require(`../models/album`)

const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate({ path: 'image', model: 'photo'})
        return res.status(200).json({ albums })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAlbumByName = async (req, res) => {
    try {
        const albumName = req.params.albumName;
        const album = await Album.findOne({ title: albumName}).populate({ path: 'image', model: 'photo'})
        if (album) {
            return res.status(200).json(album);
        }
        return res.status(404).send('Album with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllAlbums,
    getAlbumByName

};