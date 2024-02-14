const express = require('express');

const router = express.Router();

const expensesController = require('./../controller/expensesController');


router
.route('/')
.get(expensesController.getAllExpensess)
.post(expensesController.createExpense)

router.route('/:id')
.patch(expensesController.update)
.delete(expensesController.deleteExpense)

router.route('/:startDate/:endDate')
.get(expensesController.ExpensesFromTo)

router.route('/sum/:startDate/:endDate')
.get(expensesController.expensesSumFromTo);
module.exports = router;