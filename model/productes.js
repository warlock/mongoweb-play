var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

var Product = mongoose.model('Product', {
  class: String, // Bases de dades, dominis... etc.
  type: String,
  name: String, // Bronce, Plata, Or, Plati
  price: Number, // Millons d'euros
  status : Boolean, // Visible o no visible
  ram : Number, // Cantitat de ram contractada
  size : Number // Cantitat de espai en disc
});

var User = mongoose.model('User', {
  name: String,
  surname: String,
  address: String, // Bronce, Plata, Or, Plati
  country: String, // Millons d'euros
  status : Boolean, // Visible o no visible
  //start: Date.now,
  comments: String,
  telefon: Number,
  mail: String,
  contact: String,
  products: {
    type: String,
    class: String,
    renew: Date
  }
});

module.exports = {
  product: Product,
  user: User
};
