const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const service = require("./controllers/intro");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/signup', function(req, res){
    service.create(req, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`)); //

app.get("/express_backend", (req, res) => {
  res.send({ express: "Helloworld" });
});
