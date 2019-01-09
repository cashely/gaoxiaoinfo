const models = require('./model.js');

const fs = require('fs');
const path = require('path');
const routesPath = path.resolve(__dirname, './routes/');
let routes = {}
let routeFiles = fs.readdirSync(routesPath);
routeFiles.map(file => {
  routes[file.split('.')[0]] = require(path.resolve(routesPath,file));
})

module.exports = (app) => {
  app
  .get('/articles', routes.article.articles)
  .get('/articles/page', routes.article.pageInfo)
  .get('/articles/:id', routes.article.detail)
  .get('/navs', routes.category.navs)
  .get('/navs/:id', routes.category.detail)
  .get('/upload/images', routes.upload.list)
  .get('/upload/image/:filename', routes.upload.image)
  .post('/upload/element-ui', routes.upload.elementUI)
}