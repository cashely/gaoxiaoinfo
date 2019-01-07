const Page = require('../spider/gaoxiaoinfo/models/page.js')
module.exports = (app) => {
  app.get('/articles', (req, res, next) => {
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
    Page.find().where(conditions).limit(limit).skip(skip).then(pages => {
      res.json(pages)
      response(200, pages, res)
    }).catch(err=>{
      response(500, err, res)
    })
  })
  .get('/articles/page', (req, res, next) => {
    Page.count().then(num => {
      response(200, num, res)
    })
  })
}



function response(statu, data, res) {
  if(statu === 200) {
    res.json({
      data: data
    })
  }else {
    res.statu(500).end(data)
  }
}