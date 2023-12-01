import mongoose, { Schema } from "mongoose";

const URI = process.env.MONGODB_URI;

mongoose.connect(URI);
mongoose.Promise = global.Promise;

const dbConnection = mongoose.connection;

dbConnection.on("connected", () => {
  console.log("Connected to MongoDB");
});

dbConnection.on("error", err => {
  console.error("MongoDB connection error:", err);
});

dbConnection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

const translationSchema = new Schema(
  {
    word: String,
    translations: [String],
  },
  {
    timestamps: true,
  },
);

const Translation = mongoose.models.Translation || mongoose.model("Translation", translationSchema);

export default Translation;
