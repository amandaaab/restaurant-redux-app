module.exports = mongoose.model('cityCategory', new mongoose.Schema({
    main_category: String,
    name: String,
    id: Number
  }));