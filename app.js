const express = require('express');
const path = require("path");
const app = express();
const { sequelize } = require("./models");
const cors = require('cors');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin : '*',
    credentials :'true'
  
  }));


// db연결
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB Connected Success");
  })
  .catch((err) => {
    console.error(err);
  });

  app.use(express.json({
    limit: '5mb'
  }))
  app.use(express.urlencoded({
    limit: '5mb',
    extended: false
  }))

  
app.use("/users", require("./routes/users")); // 유저
app.use("/monthlypests", require("./routes/monthlypests")); // 달마다의 해충
app.use("/declarations", require("./routes/declarations")); // 신고

app.get("/", (req, res) => {
  res.sendFile(__dirname +"/daum_address.html");
});

app.get("/33ohoh", (req, res) => {
  res.sendFile(__dirname +"/download.html");
});

app.listen(3000, () => {
    console.log("Express App on port 3000!");
  });
  

  