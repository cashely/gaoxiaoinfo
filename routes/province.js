const models = require('../model.js');
const {response} = require('../functions/helper.js');

module.exports = {
  list: (req, res, next) => {
    models.province.find().select('parentId title')
    .then(provinces => {
      response(200, provinces, res);
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