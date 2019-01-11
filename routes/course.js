const models = require('../model.js');
const {response} = require('../functions/helper.js');

module.exports = {
  list: (req, res, next) => {
    models.course.find().select('parentId title type')
    .then(courses => {
      response(200, courses, res);
    })
    .catch(error => {
      response(200, error, res);
    })
  },
  detail: (req, res, next) => {
    models.course.findById(req.params.id).then(course => {
      response(200, course, res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  add: (req, res, next) => {
    const q = req.body;
    let params = {}
    if(q.title) {
      params.title = q.title
    }
    if(q.type == 0) {
      params.type = 0
    }
    if(q.type == 1) {
      params.type = 1
    }
    if(q.description) {
      params.description = q.description
    }

    if(q.parentId) {
      params.parentId = q.parentId
    }
    new models.course(params).save().then(() => {
      response(200, 'ok', res)
    }).catch(error => {
      response(500, error, res)
    })
  },
  update: (req, res, next) => {
    const q = req.body;
    const id = req.params.id;
    let params = {};
    if(q.title) {
      params.title = q.title
    }
    if(q.type == 0) {
      params.type = 0
    }
    if(q.type == 1) {
      params.type = 1
    }
    if(q.parentId) {
      params.parentId = q.parentId
    }
    
    if(q.description) {
      params.description = q.description
    }

    if(q.parentId === 'delete') {
      params = {
        $unset: {
          parentId: 1
        }
      }
    }
    console.log(params)
    models.course.updateOne({_id: id}, params).then((result) => {
      console.log(result)
      response(200, 'ok', res)
    }).catch(error => {
      response(500, error, res)
    })
  }
}