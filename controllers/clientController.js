const Client = require('../models/client')

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find()
        return res.status(200).json({ clients })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllClients
};