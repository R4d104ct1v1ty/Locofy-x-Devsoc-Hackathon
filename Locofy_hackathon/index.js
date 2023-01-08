const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const doubtsroutes = require('./routes/doubts');
const solutionsroutes = require('./routes/solutions');
const userRoutes = require('./routes/users');
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)

app.use(express.json());

app.use('/api/doubts', doubtsroutes);
app.use('/api/solutions', solutionsroutes);
app.use('/api/users', userRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
           console.log(`Connected to DB and server started on port 5000`);
        })
    })
    .catch((error) => {
        console.log(error);
    });

