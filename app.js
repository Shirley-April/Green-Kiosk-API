const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Home route")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`App is running on port: ${3000}`);
})