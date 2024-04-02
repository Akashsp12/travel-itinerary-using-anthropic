
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};



app.use(bodyParser.json()); 
app.use(cors(corsOptions));


app.use("/chat", require("./Routes"));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


