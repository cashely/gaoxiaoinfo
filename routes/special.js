const models = require('../model.js');
const {response} = require('../functions/helper.js');
module.exports = {
  list: (req, res, next) => {
    let conditions = {};
    let limit = 20;
    let skip = 0;
    let q = req.query;
    if(q._k) {
      conditions.title = new RegExp(q._k)
    }
    if(q.limit) {
      limit = q.limit
    }
    if(q.offset) {
      skip = + q.offset
    }
    models.special.find().where(conditions).skip(skip).limit(limit).select('_id title school address publishDate address endDate')
    .then(specials => {
      response(200, specials, res)
    })
    .catch(error => {
      response(500, error, res)
    })
  },
  pageInfo: (req, res, next) => {
    let conditions = {};
    let q = req.query;
    if(q._k) {
      conditions.title = new RegExp(q._k)
    }
    models.special.count(conditions).then(count => {
      response(200, count, res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  detail: (req, res, next) => {
    let id = req.params.id;
    models.special.findById(id)
    .then(special => {
      response(200, special, res)
    })
    .catch(error => {
      response(500, error, res)
    })
  }
}