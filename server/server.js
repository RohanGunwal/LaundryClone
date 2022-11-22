const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const registerRouter = require("./routes/laudaryRegister")
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/laudary/register",registerRouter)

app.get("/", (req, res) => {
  res.end("Hello World!");
});

mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB is connected`);
   
  }).catch((err)=>console.log(err))
  
app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
