const express = require('express');
const app = express();
const jsonParser= require('body-parser').json;

app.use(jsonParser());

global.mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/restaurant');

// Restaurant CRUD
const Restaurant = require('./models/restaurant')

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

const Review = require('./models/review')

app.get('/reviews', function(req, res, next){
    Review.find({})
        .exec(function(err, reviews){
        if(err) return next(err);
        res.json(reviews)
    })
})

app.post('/reviews', function(req, res, next){
  var review = new Review(req.body);
  review.save(function(err, review){
      if(err) return next(err);
      res.status(201)
      res.json(review)
  })
})



const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}!`));