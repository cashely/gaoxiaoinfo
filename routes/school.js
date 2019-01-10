const models = require('../model.js');
const {response} = require('../functions/helper.js');

module.exports = {
  list: (req, res, next) => {
    models.school.find().select('title')
    .then(schools => {
      response(200, schools, res);
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