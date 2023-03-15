const mongoose = require('mongoose');

const ExpensesSchema = mongoose.Schema({
    userID: {
        type: String,
        required: [true, "User-ID is Required"],
    },

    title: {
        type: String,
        required: [true, 'Title is Required'],
    },
    type: {
        type: String,
        enum: {
            values: ["Income", "Expense", "Saving", "Investment"],
            message: "Title value can't be {VALUE}, must be Income/Expense/Saving/Investment"
        },
    },
    amount: {
        type: Number,
        required: [true, "Amount is Required"],
        min: [1, "Amount price is Required"]
    },
}, { timestamps: true });

const Expenses = mongoose.model("Expenses", ExpensesSchema);
module.exports = Expenses;