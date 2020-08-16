const mongoose = require("mongoose");
const db = require("../config/keys").MONGOCAT;

// DB Connect

try {
  mongoose.connect(db, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB connected");
} catch (error) {
  console.log(error);
}

// Defining Schema

const catSchema = mongoose.Schema({
    name: String
})

// Defining Model

const catModel = new mongoose.model('category', catSchema);
module.exports = catModel;
