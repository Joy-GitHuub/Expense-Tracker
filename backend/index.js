const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('colors');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const DB = process.env.DB;


/* Middleware */
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect(`${DB}`, options).then(() => {
    console.log("Database connection is successful 🛢".red.bold);
});







const expensesRouter = require('./Routers/Expenses.Router');

app.use('/api/v1/expense-tracker/expense', expensesRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        statusbar: true,
        message: "Node Server is Working Prefect",
    })
});

app.listen(port, () => {
    console.log(`Server is working on this ${port} port`.bgGreen);
});