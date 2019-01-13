const models = require('../model.js');
const {response} = require('../functions/helper.js');
module.exports = {
  list: (req, res, next) => {
    const q = req.query;
    let [limit, skip, conditions] = [20, 0, {}];
    if(q._k) {
      conditions.title = new RegExp(q._k);
    }
    if(q.limit) {
      limit = +q.limit
    }

    if(q.offset) {
      skip = +q.offset
    }
    if(q.province) {
      conditions.province = new RegExp(q.province)
    }
    if(q.city) {
      conditions.city = new RegExp(q.city)
    }
    models.school.find(conditions).limit(limit).skip(skip).then(schools => {
      response(200, schools, res);
    }).catch(error => {
      response(500, error, res);
    })
  },
  pageInfo: (req, res, next) => {
    let conditions = {};
    let q = req.query;
    if(q._k) {
      conditions.title = new RegExp(q._k);
    }
    if(q.province) {
      conditions.province = new RegExp(q.province)
    }
    if(q.city) {
      conditions.city = new RegExp(q.city)
    }
    models.school.count(conditions).then(count => {
      response(200, count, res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  detail: (req, res, next) => {
    let id = req.params.id;
    models.school.findById(id).then(school => {
      response(200, school, res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  update: (req, res, next) => {
    let conditions = {};
    const id = req.params.id;
    let q = req.body;
    if(q.title) {
      conditions.title = q.title;
    }
    if(q.province) {
      conditions.province = q.province
    }
    if(q.city) {
      conditions.city = q.city
    }
    if(q.home) {
      conditions.home = q.home
    }
    if(q.region) {
      conditions.region = q.region
    }
    if(q.type) {
      conditions.type = q.type
    }
    if(q.logo) {
      conditions.logo = q.logo
    }
    if(q.banner) {
      conditions.banner = q.banner
    }
    if(q.refArticle) {
      conditions.refArticle = q.refArticle
    }
    if(q.description) {
      conditions.description = q.description
    }
    if(q.code) {
      conditions.code = q.code
    }
    if(q.grade) {
      conditions.grade = q.grade
    }
    models.school.findOneAndUpdate({_id: id}, conditions).then(() => {
      response(200, 'ok', res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  add: (req, res, next) => {
    let conditions = {};
    let q = req.body;
    if(q.title) {
      conditions.title = q.title;
    }
    if(q.province) {
      conditions.province = q.province
    }
    if(q.city) {
      conditions.city = q.city
    }
    if(q.home) {
      conditions.home = q.home
    }
    if(q.region) {
      conditions.region = q.region
    }
    if(q.type) {
      conditions.type = q.type
    }
    if(q.logo) {
      conditions.logo = q.logo
    }
    if(q.banner) {
      conditions.banner = q.banner
    }
    if(q.refArticle) {
      conditions.refArticle = q.refArticle
    }
    if(q.description) {
      conditions.description = q.description
    }
    if(q.code) {
      conditions.code = q.code
    }
    if(q.grade) {
      conditions.grade = q.grade
    }
    new models.school(conditions).save().then(() => {
      response(200, 'ok', res)
    }).catch(error => {
      response(500, error, res)
    })
  }
}