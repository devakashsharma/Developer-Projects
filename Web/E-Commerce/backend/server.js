import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/products", (req, res) => {
    res.send("Hello World! 1 2 3");
})

// MONGO_URI=mongodb+srv://myusername:myusernameXYZ@cluster0.mqapb.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});