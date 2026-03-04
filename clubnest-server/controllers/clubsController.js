const { getDB } = require("../config/db");

const createClub = async (req, res) => {
    try {
        const db = getDB();
        const clubsCollection = db.collection("clubs");

        const {
            clubName,
            description,
            category,
            location,
            BannerImage,
            membershipFee,
            email,
            name
        } = req.body;


        const result = await clubsCollection.insertOne({
            clubName,
            description,
            category,
            location,
            BannerImage,
            membershipFee,
            status: "pending",
            userEmail: email,
            userName: name,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        res.status(201).send(result);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to create club" });
    }
};

module.exports = { createClub };