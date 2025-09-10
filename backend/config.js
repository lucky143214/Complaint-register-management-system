const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Your Connection String Here",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

