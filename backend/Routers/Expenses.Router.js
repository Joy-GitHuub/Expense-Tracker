const express = require('express');
const { createExpense, getExpenses, deleteExpenses } = require('../Controllers/Expenses.Controller');
const Router = express.Router();

Router.route('/').post(createExpense);
Router.route('/:id').get(getExpenses)
Router.route('/:id').delete(deleteExpenses)

module.exports = Router;