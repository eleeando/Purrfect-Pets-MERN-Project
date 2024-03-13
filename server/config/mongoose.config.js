const mongoose = require('mongoose')
require('dotenv').config()
const db = process.env.db

const uri =//mongoose url




mongoose.connect(uri)
.then(()=> console.log(`CONNECTION WITH DATABASE: ${db} ESTABLISHED WITH SUCCESS`) )
.catch(error => console.log("CONNECTION WITH DATABASE IS FAILED", error))