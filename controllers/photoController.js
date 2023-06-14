const Photo = require(`../models/photo`)

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find()
        return res.status(200).json({ photos })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


// const createPhotos = async (req, res) => {
//     try {
//         const newPhotos = await new Photo()
//         return res.status(200).json({ photos })
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

module.exports = {
    getAllPhotos
    // createPhotos
};
// insert update, and delete create to achieve full backend crud