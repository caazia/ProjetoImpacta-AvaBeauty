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
const User = require('../models/User');

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
    if(!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!'})
    }
    if(!password) {
        return res.status(422).json({ msg: 'A senha é obrigatória!'})
    }
    if(password !== confirmpassword) {
        return res.status(422).json({ msg: 'As senhas precisam ser iguais!'})
    }

    //check user
    const userExists = await User.findOne({ email: email})

    if (userExists) {
        return res.status(422).json({ msg: 'Usuário já cadastrado no sistema!'})
    }

    //create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    //create user
    const user = new User({
        name,
        email,
        password: passwordHash,
    })

    try {
        await user.save()

        res.status(201).json({ msg: 'Usuário criado com sucesso!'})

    } catch(error) {
        console.log(error)
        res.status(500)
        .json({
            msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!'
        })
    }
});

//Login User
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body

    if(!email) {
        return res.status(422).json({ msg: 'O email é obrigatório!'})
    }
    if(!password) {
        return res.status(422).json({ msg: 'A senha é obrigatória!'})
    }
    const userNoExists = await User.findOne({ email: email})

    if (!userNoExists) {
        return res.status(404).json({ msg: 'Usuário não encontrado!'})
    }

    //check if password
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword)
    {
        return res.status(422).json({ msg: 'Senha inválida!'})
    }

})

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

