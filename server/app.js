const express = require('express')
const mongoose = require('mongoose')
const keys = require('./keys')
const passport = require('passport')
const passportStrat = require('./middleware/passport-strat')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth.routes')
const usersRoutes = require('./routes/users.routes')

const app = express()


mongoose.connect(keys.MONGO_URI, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected!'))
    .catch(e => console.log(e))

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


app.use(passport.initialize())
passport.use(passportStrat)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/data', usersRoutes)






module.exports = app