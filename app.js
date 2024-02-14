// Įtraukiama Express biblioteka, kuri yra lengvas Node.js web framework'as
const express = require("express");
// Sukuriamas Express Router objektas, skirtas apibrėžti atskirus programos maršrutus (routes).
const router = express.Router();
// Sukuriamas Express programos egzempliorius, kuris valdys visą programos funkcionalumą.
const app = express();
// Įtraukiamas išorinis failas expensesRoutes.js, kuriame  apibrėžti maršrutai, susiję su išlaidomis (Expenses).
const ExpensesRoutes = require('./routes/expensesRoutes')
// Nustatoma middleware, leidžianti Express programai apdoroti HTTP užklausas, kurių kūnas yra JSON formatu.
app.use(express.json());

// Naudojama morgan middleware su dev formatu, kad lakoniškai išvestų į konsolę užklausų metodus, URL ir statuso kodus.
const morgan = require('morgan');
app.use(morgan('dev'));

//nurodo, kaip būtų apibrėžtas maršrutas, kuris nukreiptų visas užklausas, prasidedančias nuo /api/v1/Allexpenses, į ExpensesRoutes objektą, kuriame tikėtina yra apibrėžtos maršruto funkcijos.
app.use('/api/v1/Allexpenses', ExpensesRoutes);


// Eksportuojamas app objektas, kad jį būtų galima naudoti kituose failuose ir paleisti Node.js programą.
module.exports = app;