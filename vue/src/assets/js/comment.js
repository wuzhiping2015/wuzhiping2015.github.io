/*
 	作者：福建京奥通信技术有限公司 研发中心
 	时间：20200225
 	描述: SNMP
*/

//引入VUE 对象方法
var toast = new Vue({
	el: ''
}); 
sessionStorage.setItem('$session', "helios"); //显示激活 
var url = window.location.pathname;
$("#head1").hide();


var d = document.createElement('link');
d.setAttribute('rel', 'shortcut icon');
d.setAttribute('href', 'assets/images/helios.ico');
document.getElementsByTagName('head')[0].appendChild(d);
var loading = document.createElement("div");






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
			type: 'success'
		});
	},
	error: function(msg) {
		toast.$message({
			message: msg,
			showClose: true,
			type: 'error'
		});
	},
	login: function(user, pwd) {
		$("#loginBtn").attr("disabled", "disabled").css({
			"cursor": "no-drop",
			"background": "#3c6485",
			"color": "#c3bfbf"
		}).html('<i class="el-icon-loading"></i> 进入系统中,请稍后...');

		setTimeout(() => {
			window.location.href = "index.html";
		}, 1000);

		/* 

				$.ajax({
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


}

/****************  头部 start****************/
Vue.component('el-main-header', {
	data: function() {
		return {
			action: 0,
			menuList: [
				/*  */
				{
					url: "index.html",
					isActive: false,
					name: "设备列表"
				},

				{
					url: "equipmentalarm.html",
					isActive: false,
					name: "告警列表"
				},
				{
					url: "user.html",
					isActive: false,
					name: "用户列表"
				}
			],
			couponSelected: '',
			couponShow: '',
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

		});
	},
	/*props: ['loguser'], */
	updated() {
		/*Vue.couponShow */
	},
	methods: {
		quit() {
			 sessionStorage.removeItem("$SysType");
			 window.location.href = "login.html";
		}
	},
	template: ` <header class="main-header">
    <a href="index.html" class="logo" title="Helios">
        <span class="logo-mini"><img src="assets/images/logo1.png" alt="whelios"  width="36"> </span>
        <span class="logo-lg"><img src="assets/images/logo.png" alt="whelios" > </span>
    </a>
    <div class="navbar navbar-static-top">
        <div class="avatar"><img src="assets/images/user-pic.png" alt=""> <span class="user-name">{{logUserName}}</span> 
                <em class="fa-angle-left icon iconfont icon-arrow-right"></em>
            <ul class="avatar-more">
                <li><a class="" href="userupdate.html"><i class="icon-zej icon-gerenzhongxinxuanzhong"></i>用户信息</a></li>
              
                <li @click="quit"><a href="javascript:;"><i class="icon-zej icon-tuichu"></i>退出登录</a></li>
            </ul>
        </div>
        <!--div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
            <li class="dropdown messages-menu">
            <a href="alarmhistory.html"   class="dropdown-toggle" title="alarmhistory">
            <i class="iconfont icon-xiaoxi" style="fontSize:14px;"></i>
                     <span class="label label-danger">2</span></a></li> 
            </ul>
        </div-->
        <div class="tagerLink">
             <a v-for="(i,v) in menuList" :href="i.url" :class="{active:i.isActive}">{{i.name}} </a>
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




Vue.component("el-main-sidebar", {
	props: ['msg'],
	data: function() {
		return {
			b: 0,
			action: 0,
			myhash: "index",
			navIndex: "",
			menuList: [],
		}
	},
	methods: {
		incrementHandler: function() {},
		checkabc: function(x) {
			sessionStorage.setItem('tab', x);
			this.navIndex = x;
		},
		getindex: function(x) {
			this.b = x
		},

	},
	mounted: function() {
		this.$nextTick(function() {

			var tempMenu = []; //主菜单
			var obj = {}; //主菜单

			tempMenu.push(obj);
			this.menuList = tempMenu;
			$.each(this.menuList, function(i, t) {
				if (url.indexOf(t.url) > 0) {
					t.isActive = true;
					document.getElementById("head1").innerText = t.name;
					return false;
				}
			});
		});
	},
})
/**************** 侧导航 end****************/

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
		//  alert("not authorized");
		window.location.href = "login.html";
		return;
	}
}
window.onload = function() {
	var url = window.location.href;
	if (url.indexOf('login.html') == -1) {
		setTimeout(function() {
			check_ev();
		}, 500)
		var maxTime = 1000; // seconds
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
		}, 1000);
		
	};
};
