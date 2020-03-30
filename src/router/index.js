import Vue from 'vue'
import Router from 'vue-router'
import mode1 from '../view/mode1/mode1.router.js'

/** 可以检测摸一个文件夹内匹配的文件
 * data1: 目标文件夹
 * data2: 布尔值，true：检测目标文件夹下的文件夹，false不检查子文件夹
 * data3: 正则，要匹配的文件  => 匹配 中间是 router.js 文件
 */
const r = require.context('../view', true, /\.router\.js/)
let arr = []
r.keys().forEach(key => {
    /** 获取 文件夹下 导出的对象 */
    // console.log(r(key))
    arr = arr.concat(r(key).default)
});
Vue.use(Router)
console.log(arr)
export default new Router({
    router: [
        {
            path: '/',
            component: mode1
        }
        // ...arr
    ]
})