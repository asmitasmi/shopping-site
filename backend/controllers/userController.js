const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const {name, surName, phoneNumber, emailAddress, address, profilePicture} = req.body;

    let newUser = new User ({
        name,
        surName,
        phoneNumber,
        emailAddress,
        address,
        profilePicture,
    })

newUser = await newUser.save();

res.status(201).json(newUser);

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
