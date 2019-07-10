const moongose = require("moongoose");
const urlSchema = new mongoose.urlSchema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model("Url", urlSchema);
