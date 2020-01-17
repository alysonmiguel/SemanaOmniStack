const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/test', {
  useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 1000
});
app.use(cors());
app.use(express.json());
app.use(routes);

// get, post, put, delete 

// MongoDB (Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);
