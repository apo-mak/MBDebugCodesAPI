const API = require('static-api-generator')
const api = new API({
  blueprint: 'Data_source/:manufacture/:socket/:model/:variant',
  targetDirectory: 'output'
})

api.generate({
  endpoints: ['manufacture','variant']
})


api.generate({
  endpoints: ['socket'],
  levels: ['model', 'variant'],
  root: 'manufacture'
})

api.generate({
  endpoints: ['mb_codes']
})