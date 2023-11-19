const path = require("path")
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if (err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000
app.use(cors());
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "https://cute-red-kerchief.cyclic.app"); //for deployment
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // for localhost 
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(express.static(path.join(__dirname, "./client/build")))
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/products', require('./Routes/Product'));

app.listen(port, () => {
  console.log(`Backend is listening on http://localhost:${port}`)
})

