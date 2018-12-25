const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app =  express();

const MONGO_URI = 'mongodb://alo42:Pasture1874@ds113873.mlab.com:13873/fss';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}


mongoose.connect(MONGO_URI, { useNewUrlParser: true } )
  .then(
    () => console.log('Connected to MLab'),
    err => console.log('Error connecting to MLab')
  );

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.get('/hello', (req, res) => {
  res.send('Helloo')
});

app.listen(3001, () => {
  console.log('listening on 3001')
});