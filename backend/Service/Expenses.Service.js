const Expenses = require("../Schema/Expenses.Schema");

exports.createExpenseService = async (statementData) => {
    const expense = await Expenses.create(statementData);
    return expense;
};

exports.getExpensesService = async (id) => {
    const expenses = await Expenses.find({ userID: id }).sort({ createdAt: -1 })
    return expenses;
};

exports.deleteExpensesService = async (id) => {
    const expense = await Expenses.deleteOne({ _id: id });
    return expense;
};