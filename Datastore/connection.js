const mongoose = require("mongoose");

mongoose
 .connect(
  "mongodb+srv://aashutoshmishra296:aSHUTOSH%4012@cluster0.mml9qev.mongodb.net/TEST?retryWrites=true&w=majority",
  {
   useNewUrlParser: true,
   autoIndex: true,
   useUnifiedTopology: true,
  }
 )
 .then(() => console.log("connected to db "))
 .catch((e) => console.log(e));
