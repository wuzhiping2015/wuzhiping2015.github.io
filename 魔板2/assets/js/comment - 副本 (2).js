/*
 	作者：福建京奥通信技术有限公司
 	时间：20200330
 	描述: 多屏光纤
*/

//引入VUE 对象方法
var toast = new Vue({
	el: '',
	mounted() {

	}
});


var url = window.location.pathname;

var d = document.createElement('link');
d.setAttribute('rel', 'shortcut icon');
d.setAttribute('href', 'assets/images/helios.ico');
document.getElementsByTagName('head')[0].appendChild(d);

var new_element = document.createElement('link');
new_element.setAttribute('rel', 'stylesheet');
new_element.setAttribute('href', 'assets/css/iconfont2/iconfont.css');
document.getElementsByTagName('head')[0].appendChild(new_element);

let tagname = sessionStorage.getItem("equipment");
let SITE_NO = sessionStorage.getItem("SITE_NO");

/* sessionStorage.setItem("equipment", "au"); */


var util = {
	warning: function(msg) {
		toast.$message({
			message: msg,
			showClose: true,
			type: 'warning'
		});
	},
	info: function(msg) {
		toast.$message({
			message: msg
		});
	},
	success: function(msg) {
		toast.$message({
			message: msg,
			type: 'success',
			duration: 1000
		});
	},
	error: function(msg) {
		toast.$message({
			message: msg,
			showClose: true,
			type: 'error'
		});
	},
	copy: function() {
		return "Copyright © 2006-2020 福建京奥通信技术有限公司";
	},
	Tablocation: function() {
		$("#Tablocation").html(
			`
		<li >
			<a href="javascript:window.location.href='Basicinfo.html'" click="">设备基础信息</a> 
		</li>
		<li class="" >
			<a href="javascript:window.location.href='configuration.html'">设备配置 </a>
		</li>`
		);
	},
	//登录
	login: function(user, pwd) {
		$("#loginBtn").attr("disabled", "disabled").css({
			"cursor": "no-drop",
			"background": "#3c6485",
			"color": "#c3bfbf"
		}).html('<i class="el-icon-loading"></i> Into the system...');
		sessionStorage.setItem('$session', user);
		setTimeout(() => {
			window.location.href = "Index.html";
		}, 1000);
		/*   $.ajax({
					url: "../cgi-bin/doaction.cgi",
					data: JSON.stringify({
						"action": "login",
						"username": user,
						"password": pwd,
						"type": 4,
						"band": 1,
						"link": 2,
						"mimo": 0,
						"siteno": 0,
						"id": 0,
						"equipid": 0,
					}),
					type: "post",
					success: function(data, status) {
						var rsp = JSON.parse(data);
						if (rsp.status == 'success') {

							util.getmods(0, function() {
								sessionStorage.setItem('$user', user);
								sessionStorage.setItem('$session', rsp.data);
								sessionStorage.setItem('$power', rsp.power);
								$("#loginBtn").attr("disabled", "disabled").css({
									"cursor": "no-drop",
									"background": "#3c6485",
									"color": "#c3bfbf"
								}).html('<i class="el-icon-loading"></i> 进入系统中,请稍后...');

								setTimeout(() => {
									window.location.href = "index.html";
								}, 1000);
							})
						} else {
							util.error("用户名或密码错误!请再试一次");
						}
					}
				});
			 */
	},

	//读取
	getattrajax: function(attr, callback) {
		var p = new Promise(function(resolve, reject) {
			$.ajax({
				url: "../cgi-bin/doaction.cgi",
				data: attr,
				type: "get",
				//async: false,
				success: function(data, status) {
					var rsp = JSON.parse(data);
					//console.log(rsp);
					//console.log(status);
					//	console.log(typeof rsp);
					if (typeof rsp == "string") {
						toast.$message.error("Error：" + attr.data);
					} else {
						callback(rsp);
						resolve(rsp);
						//	window.location.href = "../login.html";
					}
					/* if (rsp.status == 'success') {
						callback(rsp);
						resolve(rsp);
					} else {
						if (rsp.data == "401") {
							alert("not authorized");
							window.location.href = "../login.html";
						} else {
							// util.error(rsp.data);
							callback(rsp);
							resolve(rsp);
						}
					} */
				},
				error: function(req, status, err) {
					console.log(req);
					console.log(status);
					console.log(err);
					callback(err);
					resolve(err);
					reject(err);
				}
			});

		});
		return p;
	},

	//修改
	postattrajax: function(attr, callback) {

		var p = new Promise(function(resolve, reject) {
			$.ajax({
				url: "../cgi-bin/doaction.cgi",
				data: attr,
				type: "post",
				dataType: "text",
				//	contentType:"application/json",
				//async: false,
				beforeSend: function(xhr) {
					//console.log(xhr);
					//console.log("success");
				},
				beforeCreate: function() {
					//console.log("success");
				},
				success: function(data, status) {
					var rsp = JSON.parse(data);

					if (rsp.code == 1) {
						callback(rsp.code);
						resolve(rsp.code);
					} else {
						callback(rsp);
						resolve(rsp);
					}
				},
				error: function(req, status, err) {
					/*  reject(err); */
					console.log(status);
					console.log(err);
					resolve(status);
					callback(err);

				}
			});
		});
		return p;
	},


	//没有数组 真假转换
	ResTruefalse(name, adr, value) {
		let obj = {
			name: "",
			adr: "",
			agent: "",
			enbale: "",
		}
		obj.adr = adr;
		obj.name = name;
		if ("0" == value) {
			obj.agent = false;
			obj.enbale = false;
		}
		if ("1" == value) {
			obj.agent = false;
			obj.enbale = true;
		}
		if ("2" == value) {
			obj.agent = true;
			obj.enbale = false;
		}
		if ("3" == value) {
			obj.agent = true;
			obj.enbale = true;
		}
		return obj
	},
	//没有数组 真假转换为数字
	resnumber(agent, enbale) {
		if (agent == false && enbale == false) {
			return "0";
		} else if (agent == false && enbale == true) {
			return "1";
		} else if (agent == true && enbale == false) {
			return "2";
		} else if (agent == true && enbale == true) {
			return "3";
		}
	}


}
util.Tablocation();

/****************  头部 start****************/
Vue.component('el-main-header', {
	data: function() {
		return {
			action: 0,
			aa: "abc",
			url: sessionStorage.getItem(url),
			tagurl: "",
			urls: [{
					name: 'Information',
					children: [{
						"url": "Information.html",
						"tab": "Information"
					}, ]
				},
				{
					name: 'Device',
					children: [{
							"url": "Status.html",
							"tab": "Status"
						},

					]
				},
				{
					name: 'Network',
					children: [{
							"tab": "Ethernet"
						},
						{

							"tab": "Modem"
						},
						{
							"tab": "SNMP"
						},
						{
							"tab": "VPN"
						},
					]
				},

				{
					name: 'Alarm',
					children: [{
						"tab": "Alarm"
					}, ]
				},
				{
					name: 'Loginfo',
					children: [{
						"tab": "Loginfo"
					}, ]
				},
				{
					name: 'Cluster',
					children: [{
						"tab": "Cluster"
					}, ]
				},

			],


			menuList: [
				/*  */
				{
					url: "Information.html",
					isActive: false,
					name: "Information"
				},
				{
					url: "Status.html",
					isActive: false,
					name: "Device"
				},
				{
					url: "Ethernet.html",
					isActive: false,
					name: "Ethernet"
				},
				{
					url: "Modem.html",
					isActive: false,
					name: "Modem"
				},
				{
					url: "SNMP.html",
					isActive: false,
					name: "SNMP"
				},
				{
					url: "VPN.html",
					isActive: false,
					name: "VPN"
				},
				/* 	{
						url: "Alarm.html",
						isActive: false,
						name: "Alarm"
					},
					{
						url: "Loginfo.html",
						isActive: false,
						name: "Loginfo"
					},
					{
						url: "Cluster.html",
						isActive: false,
						name: "Cluster",
					}, */
			],
			SysType: sessionStorage.getItem('$SysType'),
			logUserName: sessionStorage.getItem('$session')
		}
	},
	mounted: function() {
		this.$nextTick(function() {

			$.each(this.menuList, function(i, t) {
				if (url.indexOf(t.url) > 0) {
					t.isActive = true;
					return false;
				}
			});
			/* if (url.indexOf("Status") > 0) {
				sessionStorage.setItem("url", url);
				sessionStorage.setItem("equipment", "au");
			} */
			if (url.indexOf(sessionStorage.getItem("url"))) {
				this.tagurl = sessionStorage.getItem("url");
			} else {
				this.tagurl = sessionStorage.getItem("url");
			}
			this.action = sessionStorage.getItem("url");
		});



	},
	/*props: ['loguser'], */
	updated() {
		/*Vue.couponShow */
	},
	methods: {
		quit() {
			sessionStorage.removeItem("$session");
			sessionStorage.removeItem("listType");
			sessionStorage.removeItem("lookmax");
			sessionStorage.removeItem("setmax");
			window.location.href = "login.html";
		},
		logout(url) {
			const children = ["Status", "ParaSet", "Roc", "Deviceinfo"];
			if (url == children[0] || url == children[1] || url == children[2] || url == children[4]) {
				sessionStorage.setItem("url", url);
				sessionStorage.setItem("equipment", "au");
				window.location.href = "Status.html"
			} else {
				sessionStorage.setItem("url", url);
				window.location.href = url + ".html"
			}
			this.action = sessionStorage.getItem("url");
		}
	},

	/* 	template: ` <header class="main-header">
	    <a href="Index.html" class="logo" title="Helios">
	        <span class="logo-mini"><img src="assets/images/logo1.png" alt="whelios"  width="36"> </span>
	        <span class="logo-lg" title="Whelios"><img src="assets/images/logo.png" alt="whelios" > </span>
	    </a>
	  <div class="navbar navbar-static-top">
	        <div class="avatar"><img src="assets/images/user-pic.png" alt=""> <span class="user-name">{{logUserName}}</span> 
	                <em class="el-icon-arrow-down el-icon--right" style="color:#fff"></em>
	            <ul class="avatar-more">
	                <!--li><a class="" href="userupdate.html"><i class=" fa-user"></i>用户信息</a></li-->
	                <li @click="quit"><a href="javascript:;"><i class="fa fa-fw icon iconfont icon-tuichu"></i>Safety Exit</a></li>
	            </ul>
	        </div>
	        <div class="tagerLink">
				  <el-dropdown @command="logout" v-for="item in urls" :class="action">
					     <span class="el-dropdown-link" >
							{{item.name}} <i class="el-icon-arrow-down el-icon--right"></i>
					     </span>
						 <el-dropdown-menu slot="dropdown" >
							 <el-dropdown-item   v-for=" (itmes,i) in item.children"  :command="itmes.tab" :class="{action: itmes.tab == tagurl}" > 
								 {{itmes.tab}}      
							 </el-dropdown-item>
						 </el-dropdown-menu>
				 </el-dropdown>  
	         </div>
	    </div>
	</header>` */


	template: ` <header class="main-header">
	    <a href="Index.html" class="logo" title="Helios">
	        <span class="logo-mini"><img src="assets/images/logo1.png" alt="whelios"  width="36"> </span>
	        <span class="logo-lg" title="Whelios"><img src="assets/images/logo.png" alt="whelios" > </span>
	    </a>
	  <div class="navbar navbar-static-top">
	        <div class="avatar"><img src="assets/images/user-pic.png" alt=""> <span class="user-name">{{logUserName}}</span> 
	                <em class="el-icon-arrow-down el-icon--right" style="color:#fff"></em>
	            <ul class="avatar-more">
	                <!--li><a class="" href="userupdate.html"><i class=" fa-user"></i>用户信息</a></li-->
	                <li @click="quit"><a href="javascript:;"><i class="fa fa-fw icon iconfont icon-tuichu"></i>Safety Exit</a></li>
	            </ul>
	        </div>
	        <div class="tagerLink">
	             <a v-for="(i,v) in menuList" :href="i.url" :class="{active:i.isActive}">{{i.name}} </a>
	         </div>
	    </div>
	</header>`

});


if ($("#comp-header").length > 0) {
	new Vue({
		el: '#comp-header',
		data: function() {
			return {
				logUserName: '',
			}
		},
	});
}
/****************  头部 end****************/



/**************** 侧导航 status****************/
let sidebar;
Vue.component("el-main-sidebar", {
	props: ['siteno'],
	data: function() {
		return {
			//菜单数据
			sidebar: [{
				label: 'AU',
				type: 0,
				children: [{
						type: 1,
						label: 'EU 1',
						children: [{
								type: 2,
								label: 'RU 1-2-1'
							},
							{
								type: 2,
								label: 'RU 1-2-1'
							},
							{
								type: 2,
								label: 'RU 1-3-1'
							},
						],
					},
					{
						type: 1,
						label: 'EU 2-1',
						children: [{
								type: 2,
								label: 'RU 2-2-1'
							},
							{
								type: 2,
								label: 'RU 2-2-1'
							},
							{
								type: 2,
								label: 'RU 2-3-1'
							},
						],
					}
				],
			}],
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			tagname: tagname,
		}

	},

	methods: {
		handleNodeClick(data) {
			if (data.type == 0) {
				sessionStorage.setItem("equipment", "au");
				sessionStorage.setItem("url", "Status");
			} else if (data.type == 1) {
				sessionStorage.setItem("equipment", "eu");
				sessionStorage.setItem("url", "Status");
			} else if (data.type == 2) {
				sessionStorage.setItem("equipment", "ru");
				sessionStorage.setItem("url", "Status");
			}
			window.location.href = "Status.html"
		},

	},
	mounted: function() {
		/* 	console.log(this.tagname);
			this.$nextTick(function() {
				console.log(this.tagname);
			}); */
	},

	/* <img  v-if='data.type==0? true :false' align="absMiddle" src="assets/images/root.gif">
	<img  v-if='data.type==1? true :false' align="absMiddle" src="assets/images/folder.gif">
	<img  v-if='data.type==2? true :false' align="absMiddle" src="assets/images/file.gif"> */

	template: ` <div class="main-sidebar">
		 <div class="box-header with-border">
		 	<h3 class="box-title"><i class="icon iconfont icon-caijishebeixinxichaxun"></i> {{tagname}}-{{siteno}} </h3>
		 </div>
		 
		<div class="sidebar">
			<el-tree :data="sidebar" default-expand-all  :props="defaultProps" @node-click="handleNodeClick">
					 <span class="custom-tree-node" slot-scope="{ node, data }">
						     <i v-if='data.type==0 ? true :false' class="icon iconfont icon-jierujiedian"></i> 
						     <i v-if='data.type==1 ? true :false' class="icon iconfont icon-jierushipeiqileixing"></i> 
							 <i v-if='data.type==2 ? true :false' class="icon iconfont icon-LTEjizhanyanshou"></i> 
						     {{node.label }} 
					</span>
			</el-tree>
		</div>
	</div>`
});
if ($("#comp-sidebar").length > 0) {
	let helios_sidebar;
	let data = {
		sitenodata: ""
	}
	helios_sidebar = new Vue({
		el: "#comp-sidebar",
		data: data,
		beforeMount() {
			/* console.log("挂载前：");
			console.log(this.$data); */
			this.SITE_NO();
		},
		methods: {
			SITE_NO() {
				var obj1 = [82, 83];
				var obj = {
					"data": obj1.join(),
					"action": "READ"
				}
				util.getattrajax(obj, function(data) {

					function int2hex(num, width) {
						var hex = "0123456789abcdef";
						var s = "";
						while (num) {
							s = hex.charAt(num % 16) + s;
							num = Math.floor(num / 16);
						}
						if (typeof width === "undefined" || width <= s.length) {
							return " " + s;
						}
						var delta = width - s.length;
						var padding = "";
						while (delta-- > 0) {
							padding += "0";
						}
						return " " + padding + s;
					}

					for (var i = 0; i < data.data.length; i++) {
						if (data.data[i].adr == 83) {
							var zh = int2hex(data.data[i].value);
							helios_sidebar.sitenodata = zh;

						}
					}
				});
				//	console.log(this.SITENAME);
			}
		}
	})
}
/**************** 侧导航 end****************/


//首页左边AU LIST  START
Vue.component("el-index-slidebar", {
	data: function() {
		return {

		}
	},
	methods: {
		link() {
			sessionStorage.setItem("url", "Status");
			sessionStorage.setItem("equipment", "au");
			window.location.href = "Status.html"
		}
	},
	template: `
				<div class="main-sidebar">
					<div class="box-header with-border">
						<h3 class="box-title">
							AU List
							<font style="font-size:16px;">
								/ 3
							</font>
						</h3>

					</div>
					<div class="products-list product-list-in-box">
						<li class="item" title="Site No AU1" @click="link">
							<div class="product-img">
								<img src="assets/images/111.png" alt="Product Image">
							</div>
							<div class="product-info">
								<a href="javascript:void(0)" class="product-title">Site No AU1
								</a>
								<p class="label alert-danger">Alarm</p>&nbsp;&nbsp;
								<p class="label bg-olive">
									Static
								</p>
							</div>
						</li>
						<li class="item" title="Site No AU2"  @click="link">
							<div class="product-img">
								<img src="assets/images/111.png" alt="Product Image">
							</div>
							<div class="product-info">
								<a href="javascript:void(0)" class="product-title">Site No AU2
								</a>
								<p class="label alert-danger">Alarm</p>&nbsp;&nbsp;
								<p class="label bg-olive">
									Static
								</p>
							</div>
						</li>
						<li class="item" title="Site No AU3"  @click="link">
							<div class="product-img">
								<img src="assets/images/111.png" alt="Product Image">
							</div>
							<div class="product-info">
								<a href="javascript:void(0)" class="product-title">Site No AU3
								</a>
								<p class="label alert-danger">Alarm</p>&nbsp;&nbsp;
								<p class="label bg-olive">
									Static
								</p>
							</div>
						</li>
					</div>
				</div>
`

});

if ($("#index-sidebar").length > 0) {
	new Vue({
		el: "#index-sidebar",
		data: function() {
			return {}
		}
	});
}

//首页左边AU LIST  START


//Device 菜单
Vue.component("device", {
	data: function() {
		return {
			activeName: "Status",
			equipment: sessionStorage.getItem("equipment"),
			active: 0,
			tagurl: "",
			children: [
				/* {
						"tab": "Topology"
					}, */
				{
					"tab": "Status"
				},
				{
					"tab": "ParaSet"
				},
				{
					"tab": "Deviceinfo"
				},

			]
		}
	},
	methods: {
		moreState(event) {
			this.tagurl = event;
			if (event == "Status") {
				if (this.equipment == "au") {
					sessionStorage.setItem("url", "status_page");
					document.getElementById("iframe1").setAttribute("src", "status_page.html");
				} else if (this.equipment == "eu") {
					sessionStorage.setItem("url", "status_pageeu");
					document.getElementById("iframe1").setAttribute("src", "status_pageeu.html");
				} else {
					sessionStorage.setItem("url", "status_pageru");
					document.getElementById("iframe1").setAttribute("src", "status_pageru.html");
				}

			} else if (event == "Deviceinfo" || event == "Topology") {
				sessionStorage.setItem("url", event);
				document.getElementById("iframe1").setAttribute("src", event.toLowerCase() + ".html");
			} else {
				sessionStorage.setItem("url", event);
				if (sessionStorage.getItem("equipment") == "au") {
					document.getElementById("iframe1").setAttribute("src", event.toLowerCase() + ".html");
				} else if (sessionStorage.getItem("equipment") == "eu") {
					document.getElementById("iframe1").setAttribute("src", event.toLowerCase() + "eu.html");
				} else {
					document.getElementById("iframe1").setAttribute("src", event.toLowerCase() + "ru.html");
				}
			}
			//	$(this).addClass("active").siblings("li").removeClass("active")
			//window.location.href = "index.html"
		}
	},
	mounted() {
		this.$nextTick(function() {
			if (url.indexOf(sessionStorage.getItem("url"))) {
				this.tagurl = sessionStorage.getItem("url");
			} else {
				this.tagurl = sessionStorage.getItem("url");
			}

			//au 开启 roc 网页
			if (this.equipment != "eu") {
				this.children.splice(2, 0, {
					"url": "Roc.html",
					"tab": "Roc"
				});
			}
			/* 	$.each(this.menuList, function(i, t) {
					if (url.indexOf(t.url) > 0) {
						t.isActive = true;
						return false;
					}
				}); */

		});
	},
	beforeCreate() {
		/* console.log("创建前：");*/

	},
	beforeMount() {

	},


	template: `  <div style="position:relative"> 
			<div class="nav-tabs-custom">
				<ul class="nav nav-tabs"  >
					 <li v-for="item in children"  :class="{active: item.tab == tagurl}"  @click="moreState(item.tab)">
						<a href="javascript:void(0);">
						<span v-if=" item.tab == 'Status' ? true :false"  class="icon iconfont icon-zhuangtai1"></span> 
						<span v-if=" item.tab == 'ParaSet' ? true :false"  class="icon iconfont icon-shezhi"></span> 
						<span v-if=" item.tab == 'Roc' ? true :false"  class="icon iconfont icon-kongzhitai"></span> 
						<span v-if=" item.tab == 'Deviceinfo' ? true :false"  class="icon iconfont icon-caijishebeixinxichaxun"></span> 
						
						{{item.tab}}
					</a>
					 </li>
				</ul>
			</div>
			    </div>`
})
//DEVICE 菜单 END



function ShowInvalidLoginMessage() {
	// 清除sessionstorage中的登录ID
	// 退到登陆界面
	window.location.href = "login.html";
}

function check_ev() {
	if (!window.sessionStorage) {
		//alert("the browser version is too low");
		window.location.href = "login.html";
		return;
	}
	var url = window.location.href;
	var session = sessionStorage.getItem('$session');
	if (!session && url.indexOf('login.html') == -1) {
		window.location.href = "login.html";
		return;
	}
}
window.onload = function() {
	var url = window.location.href;
	if (url.indexOf('login.html') == -1) {
		setTimeout(function() {
			check_ev();
		}, 100)
		var maxTime = 300; // seconds
		var time = maxTime;
		document.body.addEventListener("mousemove", function() {
			time = maxTime; // reset
		}, false);
		var intervalId = setInterval(function() {
			time--;
			if (time <= 0) {
				ShowInvalidLoginMessage();
				clearInterval(intervalId);
			}
		}, 100000000);

	};
};
