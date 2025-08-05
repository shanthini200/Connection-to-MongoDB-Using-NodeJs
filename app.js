const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.ATLAS_URI;
console.log(uri);

const client = new MongoClient(uri);
const dbname = "Connection";

const connectTodatabase = async () => {
    try {
        await client.connect();
        console.log("Connected to database successfully");
    } catch (err) {
        console.error("Error connecting to database:", err);
    }      
};

const main = async () => {
    try {
        await connectTodatabase();
    } catch (err) {
        console.error("Error in main function:", err);  
    } finally {
        await client.close();
    }
};

main();
