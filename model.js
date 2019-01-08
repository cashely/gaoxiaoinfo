const glob = require('glob');
const path = require('path');
const fs = require('fs');
const dirPath = path.resolve(__dirname, '../spider/gaoxiaoinfo/models/');
let models = module.exports;
const files = fs.readdirSync(dirPath)

files.map(file => {
  models[file.split('.')[0]] = require(path.resolve(dirPath, file))
})