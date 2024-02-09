const app = require('./app');
//  nurodomas kelias iki failo, kuriame laikoma nuoroda i duombaze su prisijungimu
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const port = process.env.PORT;
const mongoose = require('mongoose');

