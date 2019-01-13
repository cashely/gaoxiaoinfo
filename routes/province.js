const models = require('../model.js');
const {response} = require('../functions/helper.js');

module.exports = {
  list: (req, res, next) => {
    let conditions = {}
    if(req.query.type == 0) {
      conditions.type = 0
    }
    if(req.query.type == 1) {
      conditions.type = 1
    }
    console.log(conditions)
    models.province.find(conditions).select('parentId title type')
    .then(provinces => {
      response(200, provinces, res);
    })
    .catch(error => {
      response(200, error, res);
    })
  },
  add: (req, res, next) => {
    let conditions = {};
    const q = req.body;
    if(q.title){
      conditions.title = q.title;
    }
    conditions.type = q.type;
    if(q.parentId) {
      conditions.parentId = q.parentId;
    }
    new models.province(conditions).save().then(() => {
      response(200, 'ok', res);
    }).catch(error => {
      response(500, error, res);
    })
  },
  update: (req, res, next) => {
    let params = {};
    let id = req.params.id;
    let q = req.body;
    if(q.parentId) {
      params.parentId = q.parentId;
    }
    if(q.title) {
      params.title = q.title
    }

    params.type = q.type;
    models.province.findOneAndUpdate({_id: id}, params).then(() => {
      response(200, 'ok', res);
    }).catch(error => {
      response(500, error, res);
    })
  },
  detail: (req, res, next) => {
    const id = req.params.id;
    models.province.findById(id).then(province => {
      response(200, province, res);
    }).then(error => {
      response(500, error, res);
    })
  }
}