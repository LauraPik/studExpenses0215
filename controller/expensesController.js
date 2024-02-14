const Expenses = require('../models/expensesModels')

exports.getAllExpensess = async (req, res) =>{
    try {
        const exp = await Expenses.find()

        res.status(200).json({ 
            status: 'success',
            results: exp.length,
            data: { exp },
        })
    } catch(err) {
        res.status(404).json({
            status: 'failed',
            message: err.message,
        })
    } 
}

exports.createExpense = async (req, res)=>{
    try{
        const newExpense = await Expenses.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'created',
            data: newExpense,
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message,
        })
    }
}

exports.update = async (req, res) => {
    try {
        const expenseUpdate = await Expenses.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        res.status(201).json({
            status: 'success',
            message: 'updated',
            data: {
                expenseUpdate
            },
        })
    } catch(err) {
        res.status(404).json({
            status: 'failed',
            message: err.message,
        })
    }
}
exports.deleteExpense = async(req, res)=>{
    try{
        const ExpenseDel = await Expenses.findByIdAndRemove(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            message: "expense is deleted",
            data: null,
          });
    }catch(err){
        res.status(404).json({
            status: "fail",
            message: err
        })
        

    }

}

exports.ExpensesFromTo = async (req, res) => {
    try {
      const from_To = await Expenses.find({
        createdAt: { 
            $gte: new Date(req.params.startDate + 'T00:00:00.000Z'),
            $lt: new Date(req.params.endDate + 'T23:59:59.999Z')
        }
        });
        res.status(200).json({
            status: "success",
            results: `Pagal pasirinktą laiko periodą turėjote: ${from_To.length} išlaidu`,
            data: { from_To },
        });
        } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
        }
  };

  exports.expensesSumFromTo = async (req, res) => {
    try {
   
      const fromDate = new Date(req.params.startDate + 'T00:00:00.000Z');
      const toDate = new Date(req.params.endDate + 'T23:59:59.999Z');
  
      const expenses = await Expenses.aggregate([
        {
          $match: {
            createdAt: {
              $gte: fromDate,
              $lt: toDate,
            },
          },
        },
        {
          $group: {
            _id: null,
            recordsCount: { $sum: 1 },
            totalAmount: { $sum: '$amount' },
          },
        },
      ]);
  
      res.status(200).json({
        status: 'success',
        results: `Pagal pasirinktą laikotarpį (${req.params.startDate} - ${req.params.endDate}) turėjote:`,
        data: {
          recordsCount: expenses[0].recordsCount,
          totalAmount: `${expenses[0].totalAmount} €`,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err.message,
      });
    }
  };