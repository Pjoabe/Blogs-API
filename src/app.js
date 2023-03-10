const express = require('express');
const { login, registerNewUser, getAllUsersInfo } = require('./Controllers/userController');
const { validateNewUser } = require('./Middlewares/validateNewUser');
const { validateToken } = require('./Middlewares/validateToken');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', login);

app.post('/user', validateNewUser, registerNewUser);
app.get('/user', validateToken, getAllUsersInfo);

module.exports = app;
