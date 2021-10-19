const parse = require('csv-parse');
const fs = require('fs');

const results=[];
fs.createReadStream('./data/kepler_data.csv')
  .on('data', (data) => {
    results.push(data);
  }).on('error', (err) => {
    console.log('err')
  }).on('end', () => {
    console.log(results);
    console.log("donezoo!");
  });