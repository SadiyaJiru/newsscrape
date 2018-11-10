var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  titile: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

//create a variable that creates a mode titiled Article from the above delerations
var Article = mongoose.model("Article", ArticleSchema);

//Export Article Model
module.exports = Article;
