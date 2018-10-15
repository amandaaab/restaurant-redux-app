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

//**save restaurants */

const SaveRestaurant = require('./models/save')

app.get('/saveRestaurant', function(req, res, next){
    SaveRestaurant.find()
        .exec(function(err, saveRestaurant){
        if(err) return next(err);
        res.json(saveRestaurant)
    })
})

app.post('/saveRestaurant', function(req, res, next){
  var saveRestaurant = new SaveRestaurant(req.body);
  saveRestaurant.save(function(err, saveRestaurant){
      if(err) return next(err);
      res.status(201)
      res.json(saveRestaurant)
  })
})

app.delete('/saveRestaurant/:id', function (req, res, next){
    //res.send('We would delete a product');
    // delete the product from the db
    SaveRestaurant.deleteOne({id: req.params.id})
        .exec(function(err, restaurant){
        if(err) return next(err);
        res.json(restaurant)
    })
  });


const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}!`));