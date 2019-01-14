const models = require('../model.js');
const {response} = require('../functions/helper.js');
module.exports = {
  list: (req, res, next) => {
    const q = req.query;
    let limit = 20;
    let conditions = {};
    if(q._k) {
      conditions.title = new RegExp(q._k)
    }
    if(q.type) {
      conditions.type = new RegExp(q.type)
    }
    if(q.statu) {
      conditions.statu = !!q.statu
    }
    if(q.limit) {
      limit = +limit
    }
    models.adv.find(conditions).limit(limit).then(advs => {
      response(200, advs, res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  pageInfo: (req, res, next) => {
    const q = req.query;
    let conditions = {};
    if(q._k) {
      conditions.title = new RegExp(q._k)
    }
    if(q.type) {
      conditions.type = q.type
    }
    if(q.statu) {
      conditions.statu = !!q.statu
    }
    models.adv.count(conditions).then(count => {
      response(200, count, res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  add: (req, res, next) => {
    const q = req.body;
    let conditions = {};
    if(q.title) {
      conditions.title = q.title;
    }
    if(q.url) {
      conditions.url = q.url;
    }
    if(q.banner) {
      conditions.banner = q.banner;
    }
    if(q.statu) {
      conditions.statu = !!q.statu;
    }
    if(q.endDate) {
      conditions.endDate = q.endDate;
    }
    if(q.type) {
      conditions.type = q.type;
    }
    if(q.description) {
      conditions.description = q.description;
    }
    if(q.publishDate) {
      conditions.publishDate = q.publishDate;
    }
    new models.adv(conditions).save().then(() => {
      response(200, 'ok', res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  detail: (req, res, next) => {
    models.adv.findById(req.params.id).then(adv => {
      response(200, adv, res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  update: (req, res, next) => {
    const q = req.body;
    const id = req.params.id;
    let conditions = {};
    if(q.title) {
      conditions.title = q.title;
    }
    if(q.url) {
      conditions.url = q.url;
    }
    if(q.banner) {
      conditions.banner = q.banner;
    }
    if(q.statu) {
      conditions.statu = !!q.statu;
    }
    if(q.endDate) {
      conditions.endDate = q.endDate;
    }
    if(q.type) {
      conditions.type = q.type;
    }
    if(q.description) {
      conditions.description = q.description;
    }
    models.adv.findByIdAndUpdate(id, conditions).then(() => {
      response(200, 'ok', res);
    }).catch(error => {
      response(500, error, res);
    })
  },
  delete: (req, res, next) => {
    const id = req.params.id;
    models.adv.findByIdAndRemove(id).then(() => {
      response(200, 'ok', res);
    }).catch(error => {
      response(500, error, res);
    })
  }
}