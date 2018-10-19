module.exports = mongoose.model('foodCategory', new mongoose.Schema({
    main_category: String,
    name: String,
    id: Number
  }));

  