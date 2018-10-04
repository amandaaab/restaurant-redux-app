const express = require('express');
const app = express();

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/restaurant');


var schema = new mongoose.Schema({ name: 'string', type: 'string' });
var Animal = mongoose.model('Animal', schema);

var dog = new Animal({
  name: 'Harry',
  type: 'Dog'
})
dog.save();

app.get('/api/customers', (req,res) => {
  const customers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe"
    },
    {
      id: 2,
      firstName: "Amanda",
      lastName: "Bengtsson"
    },
    {
      id: 3,
      firstName: "Anders",
      lastName: "Hagelkvist"
    }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}!`));