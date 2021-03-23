import Mock from 'mockjs'



// const Random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据
// let data = []; // 用于接受生成数据的数组
// for (let i = 0; i < 10; i++) {
//     // 可自定义生成的个数
//     let template = {
//         name: Random.name(), // 生成地址,
//         string: Random.string(2, 10), // 生成2到10个字符之间的字符串
//         date: Random.date() // 生成一个随机日期,可加参数定义日期格式
//     };
//     data.push(template);
// }

// let data = {
//     'users|10': [{
//         'name': '@cname', //中文名称
//         'age|1-100': 100, //100以内随机整数
//         'birthday': '@date("yyyy-MM-dd")', //日期
//         'city': '@city(true)' //中国城市
//     }]
// }


// let userData = {
//     'userTableData|10': [{ // 图表过滤所需数据
//         'name': '@cname',
//         'date': '@date',
//         'province': '@province',
//         'city': '@city',
//         'address': '@county(true) @ctitle() @natural(1000,9999) 号',
//         'zip': '@zip'
//     }]
// }

let params = Mock.mock({ // 数据池
    'userTableData|10': [{ // 图表过滤所需数据
        'name': '@cname',
        'date': '@date',
        'province': '@province',
        'city': '@city',
        'address': '@province@city',
        'id': '@zip'
    }]
})


export default {
    params
}






// Mock.mock('/data/index', 'get', params)

// Mock.mock('/user/userInfo', 'get', require('./json/userInfo'));
// Mock.mock('/home/banner', 'get', require('./json/homeBanner'))