const models = require('../model.js');
const {response} = require('../functions/helper.js');

module.exports = {
  list: (req, res, next) => {
    models.course.find().select('parentId title')
    .then(courses => {
      response(200, courses, res);
    })
    .catch(error => {
      response(200, error, res);
    })
  },
  add: (req, res, next) => {
    
  },
  update: (req, res, next) => {
  }
}