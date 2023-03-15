const { createExpenseService, getExpensesService, deleteExpensesService } = require("../Service/Expenses.Service");

exports.createExpense = async (req, res) => {
    try {
        const result = await createExpenseService(req.body);
        res.status(200).json({
            statusbar: true,
            message: "SuccessFully Create Your Statement.",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    };
};

exports.getExpenses = async (req, res) => {
    try {
        const { id } = await req.params;
        const result = await getExpensesService(id);
        res.status(200).json({
            statusbar: true,
            message: "SuccessFully Get Your Statement.",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    }
};

exports.deleteExpenses = async (req, res) => {
    try {
        const { id } = await req.params;
        const result = await deleteExpensesService(id);
        res.status(200).json({
            statusbar: true,
            message: "SuccessFully Delete Your Statement.",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            statusbar: false,
            message: error.message,
        });
    }
}