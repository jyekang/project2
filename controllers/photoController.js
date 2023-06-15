const Photo = require(`../models/photo`)

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find()
        return res.status(200).json({ photos })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPhoto = async (req, res) => {
    try {
        const photo = await new Photo(req.body)
        await photo.save()
        return res.status(201).json({ photo });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getPhotoById = async (req, res) => {
    try {
        const photoId = req.params.id;
        const photo = await Photo.findById(photoId)
        if (photo) {
            return res.status(200).json({ photo });
        }
        return res.status(404).send('Photo with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updatePhoto = async (req, res) => {
    try {
        const photoId = req.params.id;
        let photo = await Photo.findByIdAndUpdate(photoId, req.body, { new: true })
        if (photo) {
            return res.status(200).json(photo)
        }
        throw new Error("Photo not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePhoto = async (req, res) => {
    try {
        const photoId = req.params.id;
        const deleted = await Photo.findByIdAndDelete(photoId)
        if (deleted) {
            return res.status(200).send("Photo deleted");
        }
        throw new Error("Photo not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getAllPhotos,
    createPhoto,
    getPhotoById,
    updatePhoto,
    deletePhoto
};
