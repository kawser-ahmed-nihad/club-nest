const { getDB } = require("../config/db");


const createUser = async (req, res) => {
    const db = getDB();
    const usersCollection = db.collection("users");
    const { name, email, photo } = req.body;

    const userData = {
        name,
        email,
        photo,
        role: "member",
        createdAt: new Date(),
    };

    // check if already exists
    const existingUser = await usersCollection.findOne({
        email: email,
    });

    if (existingUser) {
        return res.send({ message: "User already exists" });
    }

    const result = await usersCollection.insertOne(userData);
    res.send(result);
};

module.exports = { createUser };