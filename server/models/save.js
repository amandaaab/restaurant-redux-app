module.exports = mongoose.model('SaveRestaurant', new mongoose.Schema({
    name: String, 
    adress: String,
    img: String,
    id: Number,
    category: String,
    web: String,
    description: String
  }));
