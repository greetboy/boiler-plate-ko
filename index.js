const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://johnah:cjs2002@admin.2qwkkyy.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then((value) => console.log("MongoDB 연결에 성공하였습니다."))
  .catch((reason) => console.log(reason));

// console.log(mongoose);
// mongoose.connect(
//   "mongodb+srv://johnah:cjs2002@admin.2qwkkyy.mongodb.net/?retryWrites=true&w=majority",{
//     useNew
//   });
//     {
// )
// mongoose
//   .connect(
//     "mongodb+srv://johnah:cjs2002@admin.2qwkkyy.mongodb.net/?retryWrites=true&w=majority",
//     {
//       useNew
//       // userNewUrlParsesr: true,
//       // useUnifiedTopology: true,
//       // useCreateIndex: true,
//       // useFindAndModify: false,
//     }
//   )
//   .then(() => console.log("Complet"))
//   .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 안녕하세요.111111111111");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
