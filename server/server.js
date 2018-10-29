const express = require('express');
const app = express();
const jsonParser= require('body-parser').json;
const path = require('path')

app.use(jsonParser());

global.mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/restaurant');

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/restaurangapp/build/'));
})

app.use( express.static( `${__dirname}/../client/restaurangapp/build` ) );
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

//MAIN CATEGORIES
const MainCategory = require('./models/mainCategory')


app.get('/mainCategories', function(req, res, next){
    MainCategory.find()
        .exec(function(err, maincategories){
        if(err) return next(err);
        res.json(maincategories)
    })
})

app.post('/mainCategories', function(req, res, next){
    var mainCategory = new MainCategory(req.body);
    mainCategory.save(function(err, mainCategory){
        if(err) return next(err);
        res.status(201)
        res.json(mainCategory)
    })
})


//SUBCATGORIES 
const FoodCategory = require('./models/foodCategory')


app.get('/foodCategories', function(req, res, next){
    FoodCategory.find()
        .exec(function(err, foodcategories){
        if(err) return next(err);
        res.json(foodcategories)
    })
})

app.post('/foodCategories', function(req, res, next){
    var foodCategory = new FoodCategory(req.body);
    foodCategory.save(function(err, foodCategory){
        if(err) return next(err);
        res.status(201)
        res.json(foodCategory)
    })
})

const CityCategory = require('./models/cityCategory')


app.get('/cityCategories', function(req, res, next){
    CityCategory.find()
        .exec(function(err, citycategories){
        if(err) return next(err);
        res.json(citycategories)
    })
})

app.post('/cityCategories', function(req, res, next){
    var cityCategory = new CityCategory(req.body);
    cityCategory.save(function(err, cityCategory){
        if(err) return next(err);
        res.status(201)
        res.json(cityCategory)
    })
})



const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}!`));