const app = require('./app');
//  nurodomas kelias iki failo, kuriame laikoma nuoroda i duombaze su prisijungimu
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const port = process.env.PORT;
// jungiamasi prie mongoose duomenų bazes
// Įtraukia Mongoose biblioteką 
const mongoose = require('mongoose');
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

// nustato duomenų bazės prisijungimo eilutę.Užmezga ryšį su MongoDB duomenų baze.
mongoose.connect(DB)
.then(con=>{
    console.log("AS: Connected to DATABASE")
  }).catch((err) => {
    console.error('erroras',err);
  });
//   Paleidinėja Node.js programą nurodytame porte.
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
 });
  