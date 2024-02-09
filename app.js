const express = require("express");
const router = express.Router();
const app = express();

const ExpensesRoutes = require('./routes/expensesRoutes')
app.use(express.json());

// ismeta route pavadinima
const morgan = require('morgan');
app.use(morgan('dev'));

// Routo apsirasymas
app.use('/api/v1/Allexpenses', ExpensesRoutes);

//eksportuoju app
module.exports = app;