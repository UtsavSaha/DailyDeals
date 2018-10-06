'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const publicDeals = require('./data/publicDeals');
const privateDeals = require('./data/privateDeals');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



console.log("Staring server");

app.get('/api/deals/public', (req, res)=>{
    console.log("public API called");
    res.json(publicDeals.publicDeals);
  })
  
  // Private route
  app.get('/api/deals/private', (req,res)=>{
    res.json(privateDeals.privateDeals);
  })

app.listen(3001);
console.log('Serving deals on localhost:3001');