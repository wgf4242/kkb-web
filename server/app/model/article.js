module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema(
    {
      _v: { type: Number, select: false },
      title: { type: String, require: true },
      article: { type: String, require: true, select: false },
      article_html: { type: String, require: true },
      title: { type: String, require: true },
      author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
      views: { type: Number, require: true, default: 0 },
      like: { type: Number, require: true, default: 0 },
    },
    { timestamp: true }
  );
  return mongoose.model("Article", ArticleSchema);
};
