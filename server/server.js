const express = require('express');
const app = express();
var jsonParser = require("body-parser").json;

app.use(jsonParser());

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/restaurant');


var schema = new mongoose.Schema({ name: 'string', type: 'string' });
var Animal = mongoose.model('Animal', schema);

var Dog = new Animal({
  name: 'Harry',
  type: 'Dog'
})
Dog.save();

app.get('/dogs', function(req, res, next){
  Animal.find({})
                .exec(function(err, questions){
    if(err) return next(err);
    res.json(questions);
    });
});

app.post("/dogs", function(req, res, next){
  var dog = new Animal(req.body);
  dog.save(function(err, dog){
      if(err) return next(err);
      res.status(201);
      res.json(dog);
      });
});

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