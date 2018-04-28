/**
 * Created by 32783 on 2018/4/27.
 */
/**
 * 程序入口文件
 * **/
import Vue from 'vue'
import App from '../app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue ({
    render: (h)=>h(App)
}).$mount(root)