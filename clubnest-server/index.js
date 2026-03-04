const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const { connectDB } = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const clubRoutes = require("./routes/clubRoutes");

async function run() {
    try {
        await connectDB();
        app.use("/api", userRoutes);
        app.use("/api", clubRoutes);

    } finally {
    }
}


run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("ClubNest Server is Running 🚀");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});