//os imports
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

//Config JSON response
app.use(express.json());

//Models
const User = require('./models/User');

//Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a AvaBeauty!'})
});

//Register User
app.post('/auth/register', async(req, res) => {

    const {name, email, password, confirmpassword} = req.body

    //validations
    if(!name) {
        return res.status(422).json({ msg: 'O nome é obrigatório!'})
    }
});


//Credenciais
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.bx1kubj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
    app.listen(3000)
    console.log('Conectado ao bando de dados!')
});

app.listen(3000);

