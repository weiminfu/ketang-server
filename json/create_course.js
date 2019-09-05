let ary = [{
	"name": "VUE",
	"pic": "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C1%2C600%2C396%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=555c93571fce36d3b64bd97007c316b6/b3b7d0a20cf431adc5062cb44136acaf2fdd9862.jpg",
	"date": "2019-10-01",
	"address": "深圳",
	"time": "1小时",
	"dec": "Vue.js是一个构建数据驱动的web界面的渐进式框架。Vue.js的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。",
	"price": 3000,
	"type": "vue"
}, {
	"name": "REACT",
	"pic": "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=79515ecd52e736d14c1e845afa3924a7/d833c895d143ad4b104c56d184025aafa40f0644.jpg",
	"date": "2019-10-01",
	"address": "深圳",
	"time": "1小时",
	"dec": "React起源于Facebook的内部项目，因为该公司对市场上所有JavaScript MVC框架，都不满意，就决定自己写一套，用来架设Instagram的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。",
	"price": 3000,
	"type": "react"
}, {
	"name": "小程序",
	"pic": "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D13%2C0%2C510%2C337%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=be189146bbfd5266b36466549629a407/a50f4bfbfbedab643c9cd06dfa36afc378311eb4.jpg",
	"date": "2019-10-01",
	"address": "深圳",
	"time": "1小时",
	"dec": "微信小程序（wei xin xiao cheng xu），简称小程序，英文名Mini Program，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。",
	"price": 3000,
	"type": "xiaochengxu"
}];

let vueN = 0;
let reactN = 0;
let weixinN = 0;

let result = [];

// 循环生成300条数据
for (let i = 1; i < 300; i++) {
	// 生成随机索引n，供ary[n]使用
	let n = Math.round(Math.random() * 2);
	
	// 深度克隆从数组ary中随机得到的对象
	let item = JSON.parse(JSON.stringify(ary[n]));
	
	// 为每个随机对象加id属性，把原来对象的其他属性扩展到新对象item中
	item = {id: i, ...item};
	
	// 为标题的序号准备m变量
	let m = 0;
	switch (item.type) {
		case 'vue':
			++vueN;
			m = vueN;
		case 'react':
			++reactN;
			m = reactN;
		default:
			++weixinN;
			m = weixinN;
	}
	// 数字补零
	m = (m < 100 && m >= 10) ? '0' + m : (m < 10 ? '00' + m : m);
	item.name = item.name + '[第' + m + '讲]';
	result.push(item);
}

// 通过promise版的FS方法，将生成的300条数据写入到course.json文件
require('../utils/promiseFS').writeFile('./course.json', result);