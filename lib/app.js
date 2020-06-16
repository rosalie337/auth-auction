const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/auction', require('./routes/auction'));
app.use('/api/v1/bid', require('./routes/bid'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
