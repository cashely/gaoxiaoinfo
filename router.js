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
  .get('/nav/:id', routes.category.detail)
  .post('/nav/:id', routes.category.update)
  .get('/upload/images', routes.upload.list)
  .get('/upload/image/:filename', routes.upload.image)
  .get('/courses', routes.course.list)
  .get('/course/:id', routes.course.detail)
  .post('/course', routes.course.add)
  .post('/course/:id',routes.course.update)
  .get('/highs', routes.high.list)
  .get('/provinces', routes.province.list)
  .get('/province/:id', routes.province.detail)
  .post('/province/:id', routes.province.update)
  .post('/province', routes.province.add)
  .get('/specials', routes.special.list)
  .get('/specials/page', routes.special.pageInfo)
  .get('/special/:id', routes.special.detail)
  .post('/upload/element-ui', routes.upload.elementUI)
  .get('/schools', routes.school.list)
  .get('/school/:id', routes.school.detail)
  .get('/schools/page', routes.school.pageInfo)
  .post('/school', routes.school.add)
  .post('/school/:id', routes.school.update)
  .get('/advs',routes.adv.list)
  .get('/adv/:id', routes.adv.add)
  .post('/adv', routes.adv.add)
  .post('/adv/:id', routes.adv.update)
  .delete('/adv/:id', routes.adv.delete)
}