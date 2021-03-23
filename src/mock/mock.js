import Mock from 'mockjs'


import data from './index'
// console.log(data)



Mock.mock('/data/index', 'get', data.params)