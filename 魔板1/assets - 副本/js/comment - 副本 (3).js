/*
 	作者：福建京奥通信技术有限公司
 	时间：20200330
 	描述: 多屏光纤
*/

var toast = new Vue({
	el: '',
	mounted() {}
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
			`<li>
			<a href="javascript:window.location.href='Basicinfo.html'" click="">设备基础信息</a> 
		</li>
		<li class="" >
			<a href="javascript:window.location.href='configuration.html'">设备配置 </a>
		</li>`
		);
	},
	//登录
	login: function(user, pwd) {


		// console.log(this.SITENAME);
		$("#loginBtn").attr("disabled", "disabled").css({
			"cursor": "no-drop",
			"background": "#3c6485",
			"color": "#c3bfbf"
		}).html('<i class="el-icon-loading"></i> Into the system...');
		sessionStorage.setItem('$session', user);
		sessionStorage.setItem('url', "Status");
		sessionStorage.setItem("equipment", "au");
		setTimeout(() => {
			//window.location.href = "Index.html";
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

				success: function(data, status) {
					var rsp = JSON.parse(data);

					if (typeof rsp == "string") {
						toast.$message.error("Error：" + attr.data);
					} else {
						callback(rsp);
						resolve(rsp);
						//window.location.href = "../login.html";
					}

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
	},

	//进制转换
	hex2int(hex) {
		var len = hex.length,
			a = new Array(len),
			code;
		for (var i = 0; i < len; i++) {
			code = hex.charCodeAt(i);
			if (48 <= code && code < 58) {
				code -= 48;
			} else {
				code = (code & 0xdf) - 65 + 10;
			}
			a[i] = code;
		}
		return a.reduce(function(acc, c) {
			acc = 16 * acc + c;
			return acc + "";
		}, 0);
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
					name: 'Report',
					children: [{
						"tab": "Log"
					}, ]
				},
				{
					name: '统计',
					children: [{
						"tab": "###"
					}, ]
				},
				{
					name: '分析',
					children: [{
						"tab": "###"
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
					url: "helios.html",
					isActive: false,
					name: "Dashboard"
				},
				{
					url: "Index.html",
					isActive: false,
					name: "Topology"
				},
				{
					url: "Status.html",
					isActive: false,
					name: "Device"
				},
				{
					url: "javascript:void(0);",
					isActive: false,
					name: "Network"
				},
				/* {
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
				}, */
				{
					url: "Alarm.html",
					isActive: false,
					name: "Alarm"
				},

				{
					url: "Log.html",
					isActive: false,
					name: "Log"
				},

				{
					url: "helios.html",
					isActive: false,
					name: "分析工具"
				},

				{
					url: "Cluster.html",
					isActive: false,
					name: "Cluster",
				},
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
			sessionStorage.removeItem("url");
			sessionStorage.removeItem("equipment");

			let dataadr = [{
				adr: 83,
				value: "0"
			}];
			var obj = {
				"data": JSON.stringify(dataadr),
				"action": "SET"
			}
			util.postattrajax(obj, function(data1) {
				if (1 != data1) {
					/* toast.$message({
						message: ' Error:' + data1.message,
						type: 'error',
						showClose: true,
						offset: 80
					}); */
				} else {
					toast.$message({
						message: "success",
						type: 'success',
						showClose: true,
						offset: 80
					});
				}
				window.location.href = "login.html";
			});

		},
	/*logout(url) {
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
		} */
	},
	/* 
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
		</header>`
	 */

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
				 <ul>
					<li v-for="(v,i) in menuList" > 
							<a :href="v.url" :class="{active:v.isActive}">{{v.name}}</a>
							 <ol class="ol-list" v-if="v.name=='Network'">
								 <li><a href="Ethernet.html">Ethernet</a></li>
								 <li><a href="Modem.html">Modem</a></li>
								 <li><a href="SNMP.html">SNMP</a></li>
								 <li><a href="VPN.html">VPN</a></li>
							 </ol>	
					</li>
					
				 </ul>
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
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			tagname: tagname.toUpperCase(),
			menu: [],
		}
	},
	/* (tagname == "" || tagname == null || tagname == undefined) ? "AU" : */
	methods: {
		handleNodeClick(data) {
			var tagurl = (data.DEVtype).toLowerCase();
			sessionStorage.setItem("url", "Status");
			sessionStorage.setItem("equipment", tagurl);

			let dataadr = [{
					adr: 82,
					value: util.hex2int(data.site_no)
				},
				{
					adr: 83,
					value: util.hex2int(data.equipid)
				},
			];

			var obj = {
				"data": JSON.stringify(dataadr),
				"action": "SET"
			}
			util.postattrajax(obj, function(data1) {
				if (1 != data1) {
					/* toast.$message({
						message: ' Error:' + data1.message,
						type: 'error',
						showClose: true,
						offset: 80
					}); */
				} else {
					toast.$message({
						message: "success",
						type: 'success',
						showClose: true,
						offset: 80
					});
				}
				window.location.href = "Status.html";
			});

			//	window.location.href = "Status.html"
		},
	},

	beforeCreate() {

		let tempMenu = []; //主菜单
		var param = [];
		var sitelist;
		var currentStation = 0;
		var currentPort = 0;
		var stationlist = [];
		var vue = this;
		let tempMenu1 = [];
		var obj = {};
		var portlist = new Array(8);
		portlist.fill(0);

		$.ajax({
			type: "GET",
			url: "http://192.168.93.245:80/topology.json",
			dataType: "json",
			success: function(data1) {

				//设置第一条AU
				data1.sites[0].device.splice(0, 0, {
					"device_id": "0",
					"route": 0,
					"type": "au",
					"site_no": data1.sites[0].site_no
				});

				let j = 0;
				let setNodata = data1.sites[0].device;
				let data = [];
				//沿用旧项目处理方式
				while (j < setNodata.length) {
					let obj2 = {
						equipid: setNodata[j].device_id,
						offline: 0,
						route: setNodata[j].route,
						station: "0",
						status: 0,
						type: 0,
						site_no: data1.sites[0].site_no
					}
					data.push(obj2);
					j++;
				}
				currentStation = data[0].station;
				var offset = 0;
				obj = {};
				obj.label = currentStation;
				obj.children = [];

				obj.offline = 0;
				obj.station = 0;
				obj.equipid = 0;
				obj.type = 0;
				obj.DEVtype = "au";
				obj.site_no = data1.sites[0].site_no;
				tempMenu1.push(obj);

				$.each(data, function(idx, item) {
					if (currentStation == item.station) {

					} else {

						obj = {};
						obj.label = item.station;
						obj.offline = 0;
						obj.station = 0;
						obj.equipid = 0;
						obj.children = [];
						obj.type = 1;
						obj.site_no = data1.sites[0].site_no;
						tempMenu1.push(obj);
						currentStation = item.station;
					}
					if (item.route == "0") {
						obj = {};
						obj.offline = item.offline;
						obj.route = item.route;
						obj.equipid = item.equipid;
						obj.type = item.type;
						obj.station = item.station;
						obj.site_no = data1.sites[0].site_no;
						obj.stationlist = [];
						tempMenu.push(obj);
						stationlist.push(currentStation);
						tempMenu1[tempMenu1.length - 1].equipid = item.equipid;
						tempMenu1[tempMenu1.length - 1].station = item.station;
						tempMenu1[tempMenu1.length - 1].offline = item.offline;
					}
				});

				currentStation = stationlist[1];
				currentpoint = 0;
				$.each(data, function(idx, item) {

					if (item.route != "0") {
						if (currentStation == item.station) {
							obj1 = {};
							obj1.offline = item.offline;
							obj1.station = item.station;
							obj1.route = item.route;
							obj1.equipid = item.equipid;
							obj.site_no = data1.sites[0].site_no;
							obj1.type = item.type;
							tempMenu[currentpoint].stationlist.push(obj1);

						} else {
							currentpoint = stationlist.findIndex(function(value) {
								return value == item.station
							});
							currentStation = item.station;
							obj1 = {};
							obj1.offline = item.offline;
							obj1.station = item.station;
							obj1.route = item.route;
							obj1.equipid = item.equipid;
							obj.site_no = data1.sites[0].site_no;
							obj1.type = item.type;
							tempMenu[currentpoint].stationlist.push(obj1);
						}
					} else {
						//console.log(item);
					}

				});

				for (var i = 0; i < tempMenu.length; i++) {
					portlist.fill(0);
					currentPort = 0;
					$.each(tempMenu[currentpoint].stationlist, function(idx, item) {

						//赋值
						var str = item.route.toString();
						str = str.substr(0, 1);
						//console.log(parseInt(str) + "-" + portlist[parseInt(str)]);

						if (portlist[parseInt(str)] == 0) {
							obj = {};

							//obj.label = str;
							obj.label = item.route;
							obj.type = 1;
							obj.offline = 0;
							obj.station = 0;
							obj.equipid = item.equipid;
							obj.site_no = data1.sites[0].site_no;
							obj.children = [];
							obj.DEVtype = "eu";

							tempMenu1[currentpoint].children.push(obj);

							//站点赋值进去
							currentPort = tempMenu1[currentpoint].children.length;
							portlist[parseInt(str)] = currentPort;
							obj = {};
							obj.label = item.route;

							if (item.offline == 1) {
								obj.type = 2;
							} else {
								obj.type = 3;
								obj.offline = 1;
								obj.station = item.station;
								obj.equipid = item.equipid;
								obj.site_no = data1.sites[0].site_no;
								obj.children = [];
							}
							//tempMenu1[currentpoint].children[currentPort - 1].children.push(obj);
						} else {
							currentPort = portlist[parseInt(str)];
							obj = {};
							obj.label = item.route;
							if (item.offline == 1) {
								obj.type = 2;
							} else {
								obj.DEVtype = "ru";
								obj.type = 3;
								obj.offline = item.offline;
								obj.station = item.station;
								obj.equipid = item.equipid;
								obj.site_no = data1.sites[0].site_no;
								obj.children = [];
								tempMenu1[currentpoint].children[currentPort - 1].children.push(obj);

							}
						}
					});
				}

				vue.menu = tempMenu1;
				//vue.menuList1 = tempMenu;

			},
		});

	},

	/* sidebar   menu*/
	template: ` <div class="main-sidebar">
		 <div class="box-header with-border">
		 	<h3 class="box-title"><i class="icon iconfont icon-caijishebeixinxichaxun"></i> {{tagname}} - {{siteno}} </h3>
		 </div>
		 
		<div class="sidebar">  
			<el-tree :data="menu" default-expand-all  :props="defaultProps" @node-click="handleNodeClick">
					 <span class="custom-tree-node" slot-scope="{ node, data }">
						     <i v-if="data.type=='0' ? true :false" class="icon iconfont icon-jierujiedian"></i> 
						     <i v-else-if="data.type=='1' ? true :false" class="icon iconfont icon-jierushipeiqileixing"></i> 
							 <i v-else-if="data.type=='3' ? true :false" class="icon iconfont icon-LTEjizhanyanshou"></i> 
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
			this.SITE_NO();
		},
		methods: {
			//获取站点编号，设备ID
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
							/* var zh1;
							zh1 = Number(zh);
							if (zh1 > 0) {
								sessionStorage.setItem("equipment", "au");
							} */
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
			url: sessionStorage.getItem("url"),
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
					"tab": "Device Info"
				},

			]
		}
	},
	methods: {
		moreState(event) {
			this.tagurl = event;
			if (this.equipment == "au") {
				if (event == "Status") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "status_page.html");
				}
				if (event == "ParaSet") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "paraset.html");
				}
				if (event == "Band") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "roc.html");
				}
				if (event == "Device Info") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "deviceinfo.html");
				}
			} else if (this.equipment == "eu") {
				if (event == "Status") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "status_pageeu.html");
				}
				if (event == "ParaSet") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "paraseteu.html");
				}
				if (event == "Device Info") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "deviceinfo.html");
				}
			} else if (this.equipment == "ru") {
				if (event == "Status") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "status_pageru.html");
				}
				if (event == "ParaSet") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "parasetru.html");
				}
				if (event == "Band") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "rocru.html");
				}
				if (event == "Device Info") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "deviceinfo.html");
				}
			}
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
					"tab": "Band"
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

	template: `  <div style="position:relative"> 
			<div class="nav-tabs-custom">
				<ul class="nav nav-tabs"  >
					 <li v-for="item in children"  :class="{active: item.tab == tagurl}"  @click="moreState(item.tab)">
						<a href="javascript:void(0);">
						<span v-if=" item.tab == 'Status' ? true :false"  class="icon iconfont icon-zhuangtai1"></span> 
						<span v-if=" item.tab == 'ParaSet' ? true :false"  class="icon iconfont icon-shezhi"></span> 
						<span v-if=" item.tab == 'Band' ? true :false"  class="icon iconfont icon-kongzhitai"></span> 
						<span v-if=" item.tab == 'Device Info' ? true :false"  class="icon iconfont icon-caijishebeixinxichaxun"></span> 
						 
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
		}, 5000);

	};
};
