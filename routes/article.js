/**
 * @module
 * @description 用于获取文章相关的接口
 */
const models = require('../model.js');
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
    let conditions = {};
    if(q._k) {
      conditions.title = new RegExp(q._k)
    }
    models.page.count(conditions).then(num => {
      response(200, num, res)
    })
  }
}

/**
 * @function
 * @param {Number} statu 
 * @param {Any} data 
 * @param {Responese} res 
 */
function response(statu, data, res) {
  if(statu === 200) {
    res.json({
      data: data
    })
  }else {
    console.log(data)
    res.sendStatus(500)
  }
}