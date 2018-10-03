const express = require('express');
const app = express();
const jsonParser= require('body-parser').json;

app.use(jsonParser());

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/restaurant');


var schema = new mongoose.Schema({ name: 'string', type: 'string' });
var Animal = mongoose.model('Animal', schema);

var dog = new Animal({
  name: 'Harry',
  type: 'Dog'
})
dog.save();

var restaurantSchema = new mongoose.Schema({ name: 'string', food: 'string'});
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

app.get('/restaurants', function(req, res, next){
    Restaurant.find({})
        .exec(function(err, restaurants){
        if(err) return next(err);
        res.json(restaurants)
    })
})

app.post('/restaurants', function(req, res, next){
    var restaurant = new Restaurant(req.body);
    restaurant.save(function(err, restaurant){
        if(err) return next(err);
        res.status(201)
        res.json(restaurant)
    })
})




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