const mongoose = require('mongoose');


const expensesShema = new mongoose.Schema({
    expense_name:{
      type: String,
      required: [true, 'A expense must have name'],
      
    },
    student_name_surname:{
      type: String,
      require:[true, 'Must have students name and surname']
    },
    amount:{
      type: Number,
      require:[true, 'Provide a amount']
    },
    createdAt: {
        type: Date,
        required: [true, 'date is required'],
    },
  });

  const Expenses = mongoose.model('Expenses', expensesShema)


module.exports = Expenses