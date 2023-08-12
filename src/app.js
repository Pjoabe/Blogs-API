const express = require('express');
const {
   login, registerNewUser, getAllUsersInfo, getUserInfoByItsID,
  } = require('./Controllers/userController');
  const { registerNewCategory, getAllCategoriesInfo } = require('./Controllers/categoryController');
  const { getAllPostsInfo } = require('./Controllers/postController');
const { validateNewUser } = require('./Middlewares/validateNewUser');
const { validateToken } = require('./Middlewares/validateToken');
const { validateCategoryName } = require('./Middlewares/validateNameCategory');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.post('/login', login);
app.post('/user', validateNewUser, registerNewUser);
app.get('/user', validateToken, getAllUsersInfo);
app.get('/user/:id', validateToken, getUserInfoByItsID);
app.post('/categories', validateToken, validateCategoryName, registerNewCategory);
app.get('/categories', validateToken, getAllCategoriesInfo);
app.get('/post', validateToken, getAllPostsInfo);
module.exports = app;
