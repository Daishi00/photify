
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to db'))
  .catch(err => console.error('Cant connect' + err));

const tablesRouter = require('./routes/users');
const ordersRouter = require('./routes/photos');
  
app.use('/users', tablesRouter);
app.use('/photos', ordersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});