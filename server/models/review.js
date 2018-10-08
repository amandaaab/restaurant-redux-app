module.exports = mongoose.model('Review', new mongoose.Schema({
    name: String, 
    text: String,
    id: Number,
    rating: Number
  }));

  