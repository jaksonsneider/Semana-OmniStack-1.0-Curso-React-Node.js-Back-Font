const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://jaksonsneider:Jakson@9987@omnistack-loadn.mongodb.net/Semana10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(router);
app.listen(3333);

// request.query
// request.params
// request.body