const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gyokyfk.mongodb.net/?appName=Cluster0`;

let client;
let db;

async function connectDB() {
    if (db) {
        return db; // already connected
    }

    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    await client.connect();
    db = client.db("clubnestDB");

    console.log("✅ MongoDB Connected Successfully");

    return db;
}

function getDB() {
    if (!db) {
        throw new Error("❌ Database not initialized. Call connectDB() first.");
    }
    return db;
}

module.exports = { connectDB, getDB };