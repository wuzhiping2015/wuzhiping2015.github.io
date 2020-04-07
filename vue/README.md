  	 
   配置自动跑起来
   config/index.js   autoOpenBrowser: true,  //false  配置制动跑起来
   postman  请求工具
  
    VUE 配置重启  npm run dev
  
  
  
  
  // 安装jQuery 

  https://blog.csdn.net/qq_39009348/article/details/91046895
  
  
  
  
  
  
 <div v-bind:id="'list-' + id">菜鸟教程</div>    绑定一个ID
 <p v-if="seen">现在你看到我了</p>              真假
   <a v-bind:href="url" v-bind:target="target">   一个连接地址
 <div v-html="site"></div>					  显示一个HTML
 <div v-bind:class="{'isActive':use}">			是否显示一个Class
	一个测试文件11
 </div>
 
 <input type="button" value="点击按钮"  v-model="use">  绑定单选按钮控制  是否选择
 
 
 
 
 
 #执行的：
 methods:  事件在里面执行
 
 
	methods:{
		resmessage:function(){
			data6.msgda=222;
		}
	}
		 
		 
 
 
 
  
  
  #项目初始化

		 1.安装vue-cli 
		     npm install -g vue-cli
		 2.初始化项目
		     vue init webpack my-project 
		  3.进入项目
				cd my-project
		   4.安装依赖
		      npm install 
			5.启动项目
		      npm ren dev
		   
   
 #项目目录结构
 
	 index.html：项目根视图
	 postcssrc.js :postcss 配置文件
	 static:静态文件目录
	 src: 文件编译目录
	 
	 
	 
	 
	 
	 #列表渲染：
		    v-for
		      每个列表都要添加key
	    
	  #事件监听
	       v-on:
		   methods:
		   事件参数
		   
		 #事件修饰符
			prvent stop
			
			数组更新检测
			
         filter	 
		 计算属性和观察者
		 computed
		   计算属性和Methods区别
		   
		 标点输入绑定  
			v-model:双向数据绑定
		       修饰符：lazy
		
		   
		#Axios: 
		   https://www.kancloud.cn/yunye/axios
		   //获取Axios 对象
			import Axios from "axios"
			Vue.prototype.$axios=Axios

			Axios.defaults.baseURL = 'https://api.example.com';   //配置地址
			Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
			//获取Axios 对象
			   
         import qs from "qs"    post 数据请求加  stringify

		 *拦截器
		   // 添加请求拦截器
				Axios.interceptors.request.use(function (config) {
					// 在发送请求之前做些什么
					return config;
				  }, function (error) {
					// 对请求错误做些什么
					return Promise.reject(error);
				  });

				// 添加响应拦截器
				Axios.interceptors.response.use(function (response) {
					// 对响应数据做点什么
					return response;
				  }, function (error) {
					// 对响应错误做点什么
					return Promise.reject(error);
				  });
		

		   *跨域处理
		   
		      修改config  -->index.js 文件编译目录 
		 
			proxyTable: {
			     "/api":{
					target:'http://localhost:3030',
					changeOrigin:true,
					pathRewrite:{
						'^/api/':""
					}
				 }
			},
			
			
			2.添加host 
			Vue.prototype.HOST='/api '
			
			
		Mock:数据模拟
		   mockjs.com
	
			
		#vue-router 路由	
		
		安装 npm install --save vue-rounter
		   
	  
	 
	 
	 
	 
	 
axios封装，使用拦截器统一处理接口，超详细的教程
https://blog.csdn.net/qq_38145702/article/details/81558816


	 
	 
	 
	 
	 
	 
  

