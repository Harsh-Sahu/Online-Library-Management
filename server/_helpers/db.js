const mongoose = require("mongoose");
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose
  .connect(
    "mongodb+srv://harsh:harsh@cluster0.vo1fw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    connectionOptions
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/User"),
  Book: require("../models/Book"),
  Category: require("../models/Category"),
  Comment: require("../models/Comment"),
  Marker: require("../models/Marker"),
  BookRating: require("../models/BookRating"),
  CommentRating: require("../models/CommentRating"),
};
