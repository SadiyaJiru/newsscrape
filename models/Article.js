var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// chema constructor, create a new Schema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // require title and link
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },
//ref property links the objectID to the model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

//Create the model above
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
