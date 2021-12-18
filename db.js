const mongoose = require('mongoose');

const url = `mongodb://localhost:27017/myapp`;

mongoose.connect(url, {useNewUrlParser: true});