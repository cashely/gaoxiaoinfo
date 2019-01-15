/**
 * @module
 * @description 用于获取文章相关的接口
 */
const models = require('../model.js');
const {response} = require('../functions/helper.js');
const _ = require('lodash')
module.exports = {
  navs: (req, res, next) => {
    const q = req.query;
    let conditions = {};
    if(q.rank) {
      // conditions.
    }
    models.category.find().select('title _id parentId rank')
    .then(navs => {
      navs = _.groupBy(navs, 'parentId');
      navs = navs['null'].map(nav => {
        nav = nav.toObject()
        nav.children = navs[nav._id]
        return nav;
      })
      response(200, navs, res)
    })
  },
  detail: (req, res, next) => {
    models.category.findOne({
      _id: req.params.id
    })
    .then(nav => {
      response(200, nav, res)
    })
  },
  update: (req, res, next) => {
    const id = req.params.id;
    let conditions = {};
    const b = req.body;
    if(b.title) {
      conditions.title = b.title
    }
    if(b.url) {
      conditions.url = url
    }
    if(b.parentId) {
      conditions.parentId = b.pid
    }
    if(b.rank) {
      conditions.rank = +b.rank
    }
    if(statu == 0) {
      conditions.statu = 0
    }else if(statu == 1) {
      conditions.statu = 1
    }
    models.category.findByIdAndUpdate(id, conditions)
    .then(result => {
      response(200, result, res)
    }).catch(error => {
      response(500, error, res)
    })
  }
}