module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const Egg1Schema = new Schema({
      name: {type: String},
      phone: {type: String},
    }, {
      versionKey: false
    });
  
    return mongoose.model('Egg1', Egg1Schema);
  }