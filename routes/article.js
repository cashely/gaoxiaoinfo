/**
 * @module
 * @description 用于获取文章相关的接口
 */
const models = require('../model.js');
const {response} = require('../functions/helper.js');
module.exports = {
  /**
   * @alias get /articles/
   * @param {String} _k 传递
   * @param {String} limit 限制每页可以传递的文章数量，默认为20
   * @param {Number} offset 从多少条开始,默认为0
   */
  articles: (req, res, next) => {
    const q = req.query;
    let conditions = {};
    let limit = 20;
    let skip = 0
    if(q._k) {
      conditions.title = new RegExp(q._k)
    }
    if(q.limit) {
      skip = q.limit
    }
    if(q.offset) {
      skip = +q.offset
    }
    if(q.province) {
      conditions.province = new RegExp(q.province)
    }
    if(q.address) {
      conditions.address = new RegExp(q.address)
    }
    if(q.course) {
      conditions.course = new RegExp(q.course)
    }
    if(q.school) {
      conditions.school = new RegExp(q.school)
    }
    models.page.find().where(conditions).populate('parentId').limit(limit).skip(skip).then(pages => {
      response(200, pages, res)
    }).catch(err=>{
      response(500, err, res)
    })
  },
  /**
   * @alias get /articles/pageInfo
   * @param {String} _k 查询关键词
   */
  pageInfo: (req, res, next) => {
    const q = req.query;
    let conditions = {};
    if(q._k) {
      conditions.title = new RegExp(q._k)
    }
    if(q.province) {
      conditions.province = new RegExp(q.province)
    }
    if(q.address) {
      conditions.address = new RegExp(q.address)
    }
    if(q.course) {
      conditions.course = new RegExp(q.course)
    }
    if(q.school) {
      conditions.school = new RegExp(q.school)
    }
    models.page.count(conditions).then(num => {
      response(200, num, res)
    })
  },
  detail: (req, res, next) => {
    const id = req.params.id;
    if(!id) return response(500, 'id不存在', res);
    models.article.findOne({parentId: id})
    .then(article => {
      response(200, article, res);
    }).catch(error => {
      response(500, error, res);
    })
  }
}