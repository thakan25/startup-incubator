const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const {MongoClient} = require("mongodb");

const uri = `mongodb+srv://sachinthakan001:helloMongoDB@cluster0.ovwhl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

app.listen(port, () => console.log(`Listening on port ${port}`)); //

app.get("/express_backend", (req, res) => {
  res.send({ express: "Helloworld" });
});
