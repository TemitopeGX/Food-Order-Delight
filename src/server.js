const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost/foodOrderDelight', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Food Order Delight API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});