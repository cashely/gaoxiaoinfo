module.exports = {
/**
 * @function
 * @param {Number} statu 
 * @param {Any} data 
 * @param {Responese} res 
 */
response: (statu, data, res) => {
  if(statu === 200) {
    res.json({
      data: data
    })
  }else {
    console.log(data)
    res.sendStatus(500)
  }
}
}