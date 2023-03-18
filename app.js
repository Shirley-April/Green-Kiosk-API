const express = require("express")

const app = express()
let dotenv = require('dotenv').config()

const productRoutes = require("./routes/product")


// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = process.env.LOCAL_DB

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("DB connected successfully!");
}

app.use(productRoutes)

app.get("/", (req, res) => {
    console.log("PORT",process.env.PORT);
    res.send("hello")
})

const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
})