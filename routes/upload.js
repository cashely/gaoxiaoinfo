const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const {response} = require('../functions/helper.js');
const staticPath = path.resolve(__dirname, '../public/upload/images/')


module.exports = {
  list: (req, res, next) => {
    let images = fs.readdirSync(staticPath);
    
    images = images.map(image => {
      return '/upload/image/' + image
    })
    response(200, images, res)
  },
  image: (req, res, next) => {
    const file = req.params.filename;
    let image = fs.readFileSync(path.resolve(staticPath, file));
    res.status(200).end(image)
  },
  elementUI: (req, res,next) => {
    const form = new formidable.IncomingForm()
    form.uploadDir = staticPath;
    form.parse(req, (err, fields, files) => {
      const file = files.file;
      if(err) return response(500, err, res);
      fs.rename(file.path, file.path + '.' + file.name.split('.')[1], (err) => {
        response(200, '/upload/image/' + file.path.split('/').reverse()[0] + '.' + file.name.split('.')[1], res)
      })
    })
  } 
}