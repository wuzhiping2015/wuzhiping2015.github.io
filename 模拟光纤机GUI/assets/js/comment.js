/*
 	作者：福建京奥通信技术有限公司
 	时间：20200725
 	描述: 数字光纤
*/

var toast = new Vue({
	el: '',
	mounted() { },
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
let $session = sessionStorage.getItem("$session");
let heliosUser = ["Factory", "Agent", "Admin", "Technician"];



var util = {
	warning: function (msg) {
		toast.$message({
			message: msg,
			showClose: true,
			type: 'warning'
		});
	},
	info: function (msg) {
		toast.$message({
			message: msg
		});
	},
	success: function (msg) {
		toast.$message({
			message: msg,
			type: 'success',
			duration: 600
		});
	},
	error: function (msg) {
		toast.$message({
			message: msg,
			type: 'error'
		});
	},
	copy: function () {
		var adr = [69]; /* 152 状态 */
		var obj = {
			"data": adr.join(),
			"action": "READ"
		};
		var Version = "";
		var Clusterswitch = "";
		util.getattrajax(obj, function (data) {
			data.data.forEach(function (v, i, attr) {
				switch (v.adr) {
					case 69:
						Version = `Copyright  2018 Helios Technologies Co., Ltd.  GUI Version:  ` + v.value +
							`&nbsp;&nbsp;<a href="http://www.heliostelecom.com/" title="Helios" target="_blank" class="icon iconfont icon-wangzhi heliosUrl"></a>`;
						document.querySelector(".login-footer").innerHTML = Version;
						break;
					case 292:
						Clusterswitch = v.value == "0" ? false : true;
				}
			});
			if (true == Clusterswitch) {
				$("#loginBtn").after(`<p class="btn-bottom"  id="loginCluter"> Cluster Management<i class="el-icon-arrow-right"></i></p>`);

				$("body").on("click", "#loginCluter", function () {
					window.location.href = "Cluster.html";
				});
			}
		});

	},
	//登录
	login: function (user, pwd) {
		var obj = {
			"data": "81",
			"action": "READ"
		};
		var HeliosDev = false;
		/* var pwd = (heliosUser[0] == user) ? `3A7Q9644` : user; */
		util.getattrajax(obj, function (data) {
			if (81 == data.data[0].adr) {
				if ("1" === data.data[0].value) {
					HeliosDev = true;
					util.GetHeliosDevMsg();
					$.ajax({
						url: "../cgi-bin/doaction.cgi",
						data: {
							"action": "USER_LOGIN",
							"user": user,
							"pwd": pwd,
						},
						type: "post",
						success: function (data, status) {
							var data1 = JSON.parse(data);
							if (data1.code == 1) {
								var TagLen = (data1.data.indexOf(";"));
								var sessionName = data1.data.slice(TagLen + 1, data1.data.length - 1);
								sessionStorage.setItem('sessionName', sessionName);
								sessionStorage.setItem('$session', user.charAt(0).toUpperCase() + user.slice(1));
								sessionStorage.setItem('url', "Status");

								Helios.pwd == "";
								Helios.user == "";
								$("#loginBtn").attr("disabled", "disabled").css({
									"cursor": "no-drop",
									"background": "#3c6485",
									"color": "#c3bfbf"
								}).html('<i class="el-icon-loading"></i> Into the system...');
								setTimeout(() => {
									window.location.href = "Basic.html";
								}, 2000);
							} else {
								util.error(data1.message);
								/* util.error(`Incorrect user name or password !`); */
							}
						}
					});
				}
				else {
					localStorage.removeItem("SETdisp");
					$("#loginBtn").attr("disabled", "disabled").css({
						"cursor": "no-drop",
						"background": "#3c6485",
						"color": "#c3bfbf"
					}).html('<i class="el-icon-loading"></i> Into the system...');
					util.error(`[Device is restarted and restored] It is expected to take 1 minute!`);
					setTimeout(function () {
						window.location.href = "login.html";
					}, 4000);
				}
			}
		});
	},

	//读取
	getattrajax: function (attr, callback) {
		var p = new Promise(function (resolve, reject) {
			$.ajax({
				url: "../cgi-bin/doaction.cgi",
				data: attr,
				type: "get",
				success: function (data, status) {
					var rsp = JSON.parse(data);
					if (typeof rsp == "string") {
						toast.$message.error("Error：" + attr.data);
					} else {
						callback(rsp);
						resolve(rsp);
						//window.location.href = "../login.html";
					}
				},
				error: function (req, status, err) {
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


	HeliosReadAjax: function (attr, callback) {
		var p = new Promise(function (resolve, reject) {
			$.ajax({
				url: "../cgi-bin/doaction.cgi",
				data: attr,
				type: "get",
				success: function (data, status) {
					var rsp = JSON.parse(data);
					if (typeof rsp == "string") {
						toast.$message.error("Error：" + attr.data);
					} else {
						callback(rsp);
						resolve(rsp);
						//window.location.href = "../login.html";
					}
				},
				error: function (req, status, err) {
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
	postattrajax: function (attr, callback) {
		/* console.log(attr); */
		var p = new Promise(function (resolve, reject) {
			$.ajax({
				url: "../cgi-bin/doaction.cgi",
				data: attr,
				type: "post",
				dataType: "text",
				success: function (data, status) {
					var rsp = JSON.parse(data);
					if (rsp.code == 1) {
						callback(rsp.code);
						resolve(rsp.code);
					} else {
						callback(rsp);
						resolve(rsp);
					}
				},
				error: function (req, status, err) {
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

	//修改
	postattrajax1: function (attr, callback) {
		/* console.log(attr); */
		var p = new Promise(function (resolve, reject) {
			$.ajax({
				url: "../cgi-bin/doaction.cgi",
				data: attr,
				type: "post",
				dataType: "text",
				success: function (data, status) {
					/* console.log(data);
					console.log(status);
					console.log(data); */
					if (status == "success") {
						callback(status);
						resolve(status);
					} else {
						callback(status);
						resolve(status);
					}
				},
				error: function (req, status, err) {
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
			Agentenable: false,
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
			obj.Agentenable = true;
		}
		if ("3" == value) {
			obj.agent = true;
			obj.enbale = true;
			obj.Agentenable = true;
		}
		return obj
	},
	ResTruefalseArray(name, adr, value) {
		let obj = {
			name: "",
			adr: "",
			agent: [],
			enbale: [],
			Agentenable: [],
		}
		obj.adr = adr;
		obj.name = name;
		for (var i = 0; i < value.length; i++) {
			if ("0" == value[i]) {
				obj.agent.push(false);
				obj.enbale.push(false);
				obj.Agentenable.push(false);
			}
			if ("1" == value[i]) {
				obj.agent.push(false);
				obj.enbale.push(true);
				obj.Agentenable.push(false);
			}
			if ("2" == value[i]) {
				obj.agent.push(true);
				obj.enbale.push(false);
				obj.Agentenable.push(true);
			}
			if ("3" == value[i]) {
				obj.agent.push(true);
				obj.enbale.push(true);
				obj.Agentenable.push(true);
			}
		}
		return obj;
	},
	//使能开关Array  读取
	HeliosEnable(name, adr, value) {
		let obj = {
			name: "",
			adr: "",
			value: [],
		}
		obj.adr = adr;
		obj.name = name;

		for (var i = 0; i < value.length; i++) {
			if ("0" == value[i]) {
				obj.value.push(false);
			}
			if ("1" == value[i]) {
				obj.value.push(true);
			}
		}
		return obj;
	},
	//使能开关Array  设置
	HeliosNumberRes(value) {
		let make = [];
		for (var i = 0; i < Helios.Roclength; i++) {
			if (value[i] == false) {
				make.push("0");
			} else if (value[i] == true) {
				make.push("1");
			}
		}
		return make.join();
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
	resnumberArray(agent, enbale) {
		let make = [];
		for (var i = 0; i < Helios.Roclength; i++) {
			if (agent[i] == false && enbale[i] == false) {
				make.push("0");
			} else if (agent[i] == false && enbale[i] == true) {
				make.push("1");
			} else if (agent[i] == true && enbale[i] == false) {
				make.push("2");
			} else if (agent[i] == true && enbale[i] == true) {
				make.push("3");
			}
		}
		return make.join();
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
		return a.reduce(function (acc, c) {
			acc = 16 * acc + c;
			return acc + "";
		}, 0);
	},

	divide() {
		var argu = [];
		var utiltip = false;
		if (0 == arguments[1]) {
			arguments[0].forEach(function (v, i) {
				argu.push(v / 1000);
			});
			return argu;
		} else {
			arguments[0].find(function (v) {
				if (true != !isNaN(v)) {
					utiltip = true;
					return false;
				} else {
					argu.push(v * 1000);
				}
			});
			if (true == utiltip) {
				toast.$message({
					message: `Please enter the valid 【UL Freq】 OR 【DL Freq】 data`,
					type: 'error',
					duration: 1000
				});
				setTimeout(function () {
					;
					window.location.href = "roc.html";
				}, 2000);
				return false;
			} else {
				if (true != utiltip) {

					return argu.join();
				}
			}
		}
	},
	//获取设备类型 编号
	GetHeliosDevMsg() {
		function DevType(type) {
			let devType = "";
			switch (type) {
				case "0":
					sessionStorage.setItem("equipment", "MU");
					devType = "MU";
					break;
				case "1":
					sessionStorage.setItem("equipment", "RU");
					devType = "RU";
					break;
			}
			return devType;
		}

		var adr = [97, 70, 72, 52];
		var obj = {
			"data": adr.join(),
			"action": "READ"
		};

		util.getattrajax(obj, function (data) {
			let Data2 = [];
			let Data1 = [];
			data.data.forEach(function (v, i, attr) {
				switch (v.adr) {
					case 97:
						var HeliosDev1 = {
							adr: v.adr,
							value: (v.value),
							devType: DevType(v.value),
						};
						Data1.push(HeliosDev1);
						break;
					case 70:
						var HeliosDev = {
							adr: v.adr,
							value: (v.value),
						}
						var HeliosDev1 = {
							adr: v.adr,
							value: (v.value),
						}
						Data1.push(HeliosDev1);
						Data2.push(HeliosDev);
						break;
					case 72:
						var HeliosDev = {
							adr: v.adr,
							value: (v.value),
						}
						var HeliosDev1 = {
							adr: v.adr,
							value: (v.value),
						}
						Data1.push(HeliosDev1);
						Data2.push(HeliosDev);
						break;

					case 52:
						var HeliosDev1 = {
							adr: v.adr,
							value: (v.value),
						}
						Data1.push(HeliosDev1);
				}
			});
			//保留多用户
			localStorage.setItem("MDOTS", JSON.stringify(Data2));
			localStorage.setItem("MDOTS1", JSON.stringify(Data1));
		});
	},

	//多用户操作 设备执行 
	SetHeliosDevMsg() {
		let MDOTS = JSON.parse(localStorage.getItem("MDOTS"));
		var obj = {
			"data": JSON.stringify(MDOTS),
			"action": "SET"
		}
		util.postattrajax(obj, function (data) {
			localStorage.setItem("MDOTS", JSON.stringify(MDOTS));

			if (1 != data) {
				toast.$message({
					message: ' Error:' + data.message,
					type: 'error',
					showClose: true,
					offset: 80
				});
			} else {
				localStorage.setItem("MDOTS", JSON.stringify(MDOTS));
			}
		});
	},
	//权限数据长度
	HeliosDataLength() {
		let isshow = [];
		if (heliosUser[3] != $session) {
			for (var i = 0; i < arguments[0].length; i++) {
				if (arguments[0][i].Agentenable == true) {
					/* continue; */
					isshow.push(true);
				} else {
					//isshow = false;
					isshow.push(false);
				}
			}
		}
		return isshow;
	},

	HeliosDataLength1() {
		let isshow = false;
		if (heliosUser[0] != $session) {
			for (var i = 0; i < arguments[0].length; i++) {
				if (arguments[0][i] == true) {
					isshow = (true);
				} else {
					//isshow = false;
				}
			}
		}
		return isshow;
	},
}
util.GetHeliosDevMsg();

/****************  头部 start****************/
Vue.component('el-main-header', {
	data: function () {
		return {
			action: 0,
			url: sessionStorage.getItem(url),
			TopoNull: sessionStorage.getItem("TopoNull"),
			tagurl: "",
			menuList: [

				{
					url: "Basic.html",
					isActive: false,
					name: "Basic"
				},
				{
					url: "javascript:void(0);",
					isActive: false,
					name: "Network"
				},
				{
					url: "Alarm.html",
					isActive: false,
					name: "Alarm"
				},
				{
					url: "Advanced.html",
					isActive: false,
					name: "Advanced"
				},

				{
					url: "Report.html",
					isActive: false,
					name: "Report"
				},


			],
			SysType: sessionStorage.getItem('$SysType'),
			logUserName: sessionStorage.getItem('$session')
		}
	},
	mounted: function () {
		this.$nextTick(function () {
			$.each(this.menuList, function (i, t) {
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
		/* 	if (heliosUser[0] == $session) {
				this.menuList.splice(7, 0, {
					url: "Factory.html",
					isActive: false,
					name: "Factory"
				});
			} */
	},
	methods: {

		//退出
		quit() {
			let data = [];
			var $Tit = "";
			var $Tit1 = `Out of the GUI `;
			var $Txt = `Determine whether to exit or not`;
			var obj = {
				adr: 83,
				value: "0",
			};
			const h = this.$createElement;
			this.$msgbox({
				title: $Tit1,
				message: h('p', null, [
					h('span', null,
						$Tit
					),
					h('p', {
						style: 'color: teal'
					}, $Txt)
				]),
				showCancelButton: true,
				confirmButtonText: 'Confirm',
				cancelButtonText: 'Cancel',
				beforeClose: (action, instance, done) => {
					if (action === 'confirm') {
						instance.confirmButtonLoading = true;
						instance.confirmButtonText = 'The execution of...';
						setTimeout(() => {
							done();
							setTimeout(() => {
								instance.confirmButtonLoading = false;
								data.push(obj);
								var obj1 = {
									"data": JSON.stringify(data),
									"action": "SET"
								}
								util.postattrajax1(obj1, function (data) {
									if ("success" != data) {
										toast.$message({
											message: ' Error:' + data.message,
											type: 'error',
											showClose: true,
											offset: 80
										});
									} else {
										/* 
										 */
										$.ajax({
											url: "../cgi-bin/doaction.cgi",
											data: {
												"action": "USER_LOGOUT",
												"user": $session,
											},
											type: "post",
											success: function (data, status) {
												var data1 = JSON.parse(data);
												if (data1.code == 1) {
													setTimeout(() => {
														sessionStorage.removeItem("$session");
														sessionStorage.removeItem("sessionName");
														sessionStorage.removeItem("url");
														sessionStorage.removeItem("equipment");
														sessionStorage.removeItem("AlarmData");
														sessionStorage.removeItem("TopoNull");
														localStorage.removeItem("AlarmData");
														localStorage.removeItem("code");
														window.location.href = "login.html";
													}, 0);
												} else {

													util.error(data.message);
												}
											}
										});
									}
								});
							}, 100);
						},
							1000);
					} else {
						done();

					}
				}
			}).then(action => {
                /* this.$message({
                    type: 'success',
                    message: "The update is successful"
                }); */
			}).catch(() => {
				console.log(1);
			});
		},


	},

	template: ` <header class="main-header">
	    <a href="Basic.html" class="logo" title="Helios">
	        <span class="logo-mini"><img src="assets/images/logo1.png" alt="whelios"  width="36"> </span>
	        <span class="logo-lg" title="Whelios"><img src="assets/images/logo.png" alt="whelios" > </span>
	    </a>
	  <div class="navbar navbar-static-top">
	        <div class="avatar"><img src="assets/images/user-pic.png" alt=""> <span class="user-name">{{logUserName}}</span> 
	                <em class="el-icon-arrow-down el-icon--right" style="color:#fff"></em>
	            <ul class="avatar-more">
                    <li><a  href="Advanced.html"><i class="fa fa-fwicon iconfont icon-guangxianxiangduanzi"></i> Advanced</a></li>
                    <li @click="quit"><a href="javascript:;"><i class="fa fa-fw icon iconfont icon-tuichu"></i>Safety Exit</a></li>
                </ul>
            </div>
            <div class="tagerLink">
                 <ul>
                    <li v-for="(v,i) in menuList" > 
                     <a :href="v.url" :class="{active:v.isActive}" v-if="v.name!='Network'">{{v.name}} </a>
                    
                     <a :href="v.url" :class="{active:v.isActive}" v-if="v.name=='Network'">{{v.name}}
                        <em class="el-icon-arrow-down el-icon--right" ></em> 
                     </a>
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
		data: function () {
			return {
				logUserName: '',
			}
		},
	});
}
/****************  头部 end****************/

/**************** 侧导航 status****************/
let sidebar;

/**************** 侧导航 end****************/


//首页左边AU LIST  START
Vue.component("el-index-slidebar", {
	data: function () {
		return {
			DevType: "",
			DevName: "",
			Devalarm: "",
			GuiDev: {
				name: "",
				type: "",
				status: ""
			}
		}
	},
	methods: {
		link() {
			sessionStorage.setItem("url", "Status");
			window.location.href = "Basic.html"
		}
	},
	mounted() {

		let MDOTS = JSON.parse(localStorage.getItem("MDOTS1"));
		this.DevType = MDOTS[0].devType;
		this.Devalarm = Number(MDOTS[3].value);

		if (MDOTS[1].value.trim() == "" || MDOTS[1].value.trim() == undefined) {
			this.DevName = "Site Name IS Null"
		} else {
			this.DevName = MDOTS[1].value;
		}
		setInterval(() => {
			var adr = [70, 97, 52];
			var obj = {
				"data": adr.join(),
				"action": "READ"
			};
			(function (GuiDev) {
				util.getattrajax(obj, function (data) {
					data.data.forEach(function (v, i) {
						if (v.adr == 70) {
							GuiDev.name = v.value;
						}
						if (v.adr == 97) {
							GuiDev.type = Number(v.value) == 0 ? "MU" : "RU";
						}
						if (v.adr == 52) {
							GuiDev.status = Number(v.value);
						}
					});
				});
			})(this.GuiDev)
		}, 2500);

	},
	template: `
				<div class="main-sidebar">
					<div class="box-header with-border">
						<h3 class="box-title">
							GUI /{{GuiDev.type}}
						</h3>
					</div>
					<div class="products-list product-list-in-box">
						<li class="item" title="Site No AU1" @click="link">
							<div class="product-img">
								<span class="icon iconfont icon-zhuji text-green"  v-if="GuiDev.status==0"></span>
								<span class="icon iconfont icon-zhuji text-red"  v-if="GuiDev.status!=0"></span>
							</div>
							<div class="product-info">
								<a href="javascript:void(0)" class="product-title">{{GuiDev.name}}
								</a> 
								<p class="label  bg-olive"  v-if="GuiDev.status==0">Alarm</p>
								<p class="label alert-danger" v-if="GuiDev.status!=0">Alarm</p>
							</div> 
						</li> 
					</div>
				</div>
`
});/* 	<span class="icon iconfont icon-gaojing3 text-green" v-if="Devalarm==0"></span>
<span class="icon iconfont icon-gaojing3 text-red" v-if="Devalarm!=0"></span> */

if ($("#index-sidebar").length > 0) {
	new Vue({
		el: "#index-sidebar",
		data: function () {
			return {}
		}
	});
}
//首页左边AU LIST  START
//Device 菜单
Vue.component("device", {
	data: function () {
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
					"tab": "Sub-System"
				},
				/* 	{
						"tab": "ParaSet"
					}, */
				{
					"tab": "Device Info"
				},
			]
		}
	},
	methods: {
		moreState(event) {
			this.tagurl = event;
			if (this.equipment == "MU") {
				if (event == "Status") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "status_page.html");
				}
				if (event == "Sub-System") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "roc.html");
				}
				if (event == "Device Info") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "deviceinfo.html");
				}
			} else if (this.equipment == "RU") {
				if (event == "Status") {
					sessionStorage.setItem("url", event);
					document.getElementById("iframe1").setAttribute("src", "status_pageru.html");
				}
				if (event == "Sub-System") {
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
		this.$nextTick(function () {
			if (url.indexOf(sessionStorage.getItem("url"))) {
				this.tagurl = sessionStorage.getItem("url");
			} else {
				this.tagurl = sessionStorage.getItem("url");
			}

			//au 开启 roc 网页
			/* 	if (this.equipment != "eu") {
					this.children.splice(2, 0, {
						"url": "Roc.html",
						"tab": "Sub-System"
					});
				} */
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
				<ul class="nav nav-tabs"> 
					 <li v-for="item in children"  :class="{active: item.tab == tagurl}"  @click="moreState(item.tab)">
						<a href="javascript:void(0);">
						<span v-if=" item.tab == 'Status' ? true :false"  class="icon iconfont icon-zhuangtai1"></span> 
						<span v-if=" item.tab == 'ParaSet' ? true :false"  class="icon iconfont icon-shezhi"></span> 
						<span v-if=" item.tab == 'Sub-System' ? true :false"  class="icon iconfont icon-kongzhitai"></span> 
						<span v-if=" item.tab == 'Device Info' ? true :false"  class="icon iconfont icon-caijishebeixinxichaxun"></span> 
						{{item.tab}}
					</a>
					 </li>
				</ul>
			</div>
			    </div>`
});
//DEVICE 菜单 END



function ShowInvalidLoginMessage() {
	// 清除sessionstorage中的登录ID
	// 退到登陆界面
	sessionStorage.removeItem("$session");
	sessionStorage.removeItem("sessionName");
	sessionStorage.removeItem("url");
	sessionStorage.removeItem("equipment");
	sessionStorage.removeItem("AlarmData");
	sessionStorage.removeItem("TopoNull");

	localStorage.removeItem("AlarmData");
	localStorage.removeItem("code");
	window.location.replace("login.html");
	parent.location.reload();
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

function getOnline() {
	var sessionName = sessionStorage.getItem('sessionName');
	$.ajax({
		url: "../cgi-bin/doaction.cgi",
		data: {
			"action": "GetOnline",
			"session": sessionName,
		},
		type: "post",
		success: function (data, status) {
			var data1 = JSON.parse(data);
			if (data1.code == 1) { } else {
				toast.$notify({
					title: 'GUI Restarts',
					message: 'Restart the device and it will exit the system',
					type: 'warning',
					duration: 1000
				});
				setTimeout(function () {
					ShowInvalidLoginMessage();
				}, 2000);

			}
		}
	});
}

window.onload = function () {
	var url = window.location.href;
	if (url.indexOf('login.html') == -1) {
		setTimeout(function () {
			check_ev();
			getOnline();
		}, 0)
		var maxTime = 500; // seconds
		var time = maxTime;
		document.body.addEventListener("mousemove", function () {
			time = maxTime; // reset
		}, false);
		var intervalId = setInterval(function () {
			time--;
			if (time <= 0) {
				ShowInvalidLoginMessage();
				clearInterval(intervalId);
			}
		}, 1000);

	};
};