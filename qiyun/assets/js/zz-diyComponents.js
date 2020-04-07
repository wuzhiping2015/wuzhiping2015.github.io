var Ymis = Ymis || {};
Ymis.windowProxyFuncs = [];
Ymis.initWindowProxy = function() {
	if (!Ymis._initHide) {
		$(document).click(function(e) {
			var _curDom = $(e.target);
			var _funcs = Ymis.windowProxyFuncs;
			for ( var i = 0; i < _funcs.length; i++) {
				if (_funcs[i](_curDom, e)) {
					return;
				}
			}
		});
		Ymis._initHide = true;
	}
};
Ymis.addProxyFuncs = function(func) {
	var _funcs = Ymis.windowProxyFuncs;
	_funcs[_funcs.length] = func;
	Ymis.initWindowProxy();
};

Ymis.Util = {
	/* 模拟：以post提交form 方式 */
	postFrom : function(url, params) {
		var _form = document.createElement("form");
		_form.action = App["contextPath"] + url;
		_form.method = "post";
		_form.style.display = "none";
		for ( var x in params) {
			var opt = document.createElement("input");
			opt.name = x;
			opt.value = params[x];
			_form.appendChild(opt);
		}
		document.body.appendChild(_form);
		_form.submit();
		document.body.removeChild(_form);
	},
	/* 提交form */
	doSubmitForm : function(formId, successFunc, msg, dataType) {
		var _$form = $("#" + formId);
		var _method = _$form.attr("method");
		this.doSubmit(_$form.attr("action"), _$form.serialize(), successFunc,
				msg, dataType, _method);
	},
	/* 提交(hint、dataType和method 是可选传递) */
	doSubmit : function(url, data, successFunc, hint, dataType, method, async) {
		var _hint = hint || "数据提交中...";
		// Ymis.MsgBox.showDelayLoading(_hint);
		var _method = method || "POST";
		var _dataType = dataType || "json";
		var _url = App["contextPath"] + url;
		var _async = true;
		if (typeof (async) == "boolean") {
			_async = async;
		}
		$.ajax({
			async : _async,
			url : _url,
			type : _method,
			dataType : _dataType,
			contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
			data : data,
			success : function(data) {
				// Ymis.MsgBox.hideLoading();
				successFunc(data);
			},
			error : function() {
				// Ymis.MsgBox.hideLoading();
				// Ymis.Dialog.comfirm("请求失败", "请求失败,是否刷新页面？", function() {
				// window.location.reload();
				// }, "可能是网络断了，或是服务器出现异常等原因，建议刷新页面！");
			}
		});
	},
	doSyncSubmit : function(url, data, successFunc, hint) {
		Ymis.Util.doSubmit(url, data, successFunc, hint, null, null, false);
	},
	getNextNum : (function() {
		var i = 0;
		var getNum = function() {
			return i++;
		};
		return getNum;
	})(),
	/* 获取唯一性id */
	getUuid : function(prefix) {
		var _prefix = "";
		if (prefix) {
			_prefix = prefix + "_";
		}
		var _times = (new Date()).getTime();
		return _prefix + _times + "_" + this.getNextNum();
	},
	/* 获取对象属性的个数 */
	getObjCount : function(obj) {
		var count = 0;
		for ( var i in obj) {
			if (obj.hasOwnProperty(i)) {
				count++;
			}
		}
		return count;
	},
	/* 将jquery serializeArray转成对象形式 */
	serializeArrToObj : function(serializeArr) {
		var _obj = {};
		$.each(serializeArr, function() {
			_obj[this.name] = this.value;
		});
		return _obj;
	},
	/* 简单对象的比较:适合form对象使用(这里暂时不完善) */
	simpleObjCompare : function(obj1, obj2) {
		for ( var p in obj1) {
			if (obj1[p] != obj2[p]) {
				return false;
			}
		}
		for ( var p in obj2) {
			if (obj2[p] != obj1[p]) {
				return false;
			}
		}
		return true;
	},
	/* 初始化JqGrid （没有添加JqGrid声明，需要自己依赖）或者可以：在这方法里面写require */
	initJqGrid : function($grid, url, colModel, pagerId) {
		var _pagerId = pagerId ? "#" + pagerId : null;
		$grid.jqGrid({
			pager : _pagerId,
			enabledLoad : false,// 禁用自动加载【重点】
			url : App["contextPath"] + url,
			ajaxGridOptions : {// 【重点】
				contentType : "application/json"
			},
			jsonReader : {
				root : "records", // 与后台Page.java的 records 映射
				rows : "pageSize", // 与后台Page.java的 pageSize 映射
				total : "totalPage", // 与后台Page.java的 totalPage 映射
				page : "currentPage", // 与后台Page.java的 currentPage 映射
				records : "totalRecord" // 与后台Page.java的 totalRecord 映射
			},
			colModel : colModel
		});
		return $grid;
	}
};
// 下拉框组件
// 模糊搜索下拉框组件--默认支持本地模糊搜索模式
Ymis.SelectDropdown = {
	_init : false,
	init : function(parentDom) {
		this._addEvent(parentDom);
		if (!this._init) {
			var _HideFunc = function(dom, e) {
				if (dom.hasClass("select") || dom.parent().hasClass("select")) {
					return true;
				}
				$(".select-box").hide();
				return false;
			};
			Ymis.addProxyFuncs(_HideFunc);
			this._init = true;
		}
	},
	_addEvent : function(parentDom) {
		var _drops = parentDom ? parentDom.find(".select") : $(".select");
		_drops.each(function(i) {
			var _s = Ymis.SelectDropdown;
			var _myself = $(this);
			if (_myself.children(".select-data").val()) {
				_myself.attr("isSelect", "1");
			}
			var _input = _myself.children(".select-name");
			var _selectOnly = _myself.hasClass("select-only");
			if (_selectOnly) {
				_myself.on("click", _s._click);
			} else {
				_myself.children("em").click(_s._click);
				_input.on("keyup", _s._inputAuto);
				_input.on("blur", _s._inputBlur);
			}

			if (_myself.hasClass("disabled") || _selectOnly) {
				_input.attr("readonly", "readonly");
			}
			var _box = _myself.children(".select-box");
			if (_box.length > 0) {
				_box.on("click", "li", _s._selectClick);
				_box.hover(_s._boxHover);
			}
		});
	},
	_click : function() {
		var _self = $(this);
		var _parent = _self.hasClass("select") ? _self : _self.parent();
		if (_parent.hasClass("disabled")) {
			return;
		}
		var _box = _parent.children(".select-box");
		var _displayStatus = _box.css("display");
		$(".select-box").hide();
		if ('block' != _displayStatus) {
			var _value = _parent.children(".select-data").val();
			var _func = _parent.attr("funcGetData");
			if (!_func) {
				_box.show("normal");
				Ymis.SelectDropdown._addSelectClass(_parent, _box, _value);
				return;
			}
			var _data = eval(_parent.attr("funcGetData") + '("")');
			if (_data && _data.length > 0) {
				var _s = Ymis.SelectDropdown;
				var _dataHtml = _s._getBoxHtml(_data);
				if (_box.length > 0) {
					_box.html(_dataHtml);
				} else {
					_dataHtml = '<ul class="select-box">' + _dataHtml + '</ul>';
					_parent.append(_dataHtml);
					_box = _parent.children(".select-box");
					_box.on("click", "li", _s._selectClick);
					_box.hover(_s._boxHover);
				}
				_box.show("normal");
				Ymis.SelectDropdown._addSelectClass(_parent, _box, _value);
			}
		}
	},
	_selectClick : function() {
		var _myself = $(this);
		var _box = _myself.parent();
		var _dataValue = _myself.attr("dataValue");
		var _selectData = _box.siblings(".select-data");
		var _isChange = (_dataValue != _selectData.val());
		_selectData.val(_dataValue);
		var _showValue = _myself.html();
		var _selectCur = _box.siblings(".select-name");
		_selectCur.val(_showValue);
		_box.parent().attr("isSelect", "1");
		if (_isChange) {
			var _changeCall = _box.attr("changeCall");
			if (_changeCall) {
				eval(_changeCall + '("' + _dataValue + '")');
			}
		}
	},
	_inputAuto : function(e) {
		var _myself = $(this);
		var _parent = _myself.parent();
		var _box = _myself.siblings(".select-box");
		if (e.keyCode == 13) {
			if (_box.css("display") != "none") {
				var _lis = _box.children();
				if (_lis.length > 0) {
					$(_lis.get(0)).click();
				}
			}
			return;
		}
		$(".select-box").hide();
		var _text = _myself.val();
		if (!_text) {
			return;
		}
		_parent.attr("isSelect", "");
		var _data = eval(_parent.attr("funcGetData") + '("' + _text + '")');
		if (_data && _data.length > 0) {
			var _s = Ymis.SelectDropdown;
			var _dataHtml = _s._getBoxHtml(_data, true, _text);
			if (_box.length > 0) {
				_box.html(_dataHtml);
			} else {
				_dataHtml = '<ul class="select-box">' + _dataHtml + '</ul>';
				_parent.append(_dataHtml);
				_box = _parent.children(".select-box");
				_box.on("click", "li", _s._selectClick);
				_box.hover(_s._boxHover);
			}
			_box.show();
		}
	},
	_inputBlur : function() {
		var _myself = $(this);
		var _parent = _myself.parent();
		if (!_parent.attr("isSelect") && !_parent.attr("keepNoSelect")) {
			var _selectData = _myself.siblings(".select-data");
			var _oldVal = _selectData.val();
			_myself.val("");
			_selectData.val("");
			if (_oldVal) {
				var _changeCall = _myself.siblings(".select-box").attr(
						"changeCall");
				if (_changeCall) {
					eval(_changeCall + '("")');
				}
			}
		}
	},
	_boxHover : function() {
		var _first = $(this).children().eq(0);
		_first.removeClass("on-hover");
	},
	_addSelectClass : function(select, box, value) {
		if (value && select.hasClass("select-only")) {
			box.children("li").each(function() {
				var _self = $(this);
				if (value == _self.attr("dataValue")) {
					_self.addClass("selected");
				} else {
					_self.removeClass("selected");
				}
			});
		}
	},
	// 获取li数据
	_getBoxHtml : function(datas, isSearch, name) {
		var _html = "";
		var _data = null;
		var _isFirst = true;
		for ( var i = 0, count = datas.length; i < count; i++) {
			_data = datas[i];
			if (isSearch && _data.value.indexOf(name) < 0) {
				continue;
			}
			_html += '<li dataValue="' + _data.key + '"';
			if (_isFirst) {
				_html += ' class="on-hover"';
				_isFirst = false;
			}
			_html += '>' + _data.value + '</li>';
		}
		return _html;
	},
	getData : function(select) {
		var _showName = select.children(".select-name").val();
		var _value = select.children(".select-data").val();
		return [ _value, _showName ];
	},
	setData : function(select, name, value) {
		select.children(".select-name").val(name);
		select.children(".select-data").val(value);
	}
};
// 复选框
Ymis.Checkbox = {
	init : function(theparent) {
		var _checkboxs = theparent ? theparent.find(".checkbox")
				: $(".checkbox");
		Ymis.Checkbox._addEvent(_checkboxs);
	},
	_addEvent : function(checkboxs) {
		checkboxs.each(function() {
			var $myself = $(this);
			var _value = $myself.children("input").val();
			if (_value == 1) {
				$myself.addClass("action");
			}
			$myself.on("click", function() {
				var _checkBox = $(this);
				if (_checkBox.hasClass("disabled")) {
					return;
				}
				var _value = 0;
				if (_checkBox.hasClass("action")) {
					_checkBox.removeClass("action");
				} else {
					_checkBox.addClass("action");
					_value = 1;
				}
				_checkBox.children('input').val(_value);
				var _changeCall = _checkBox.attr("changeCall");
				if (_changeCall) {
					eval(_changeCall + '(' + _value + ')');
				}
			});
		});
	}
};
// 单选框
Ymis.Radio = {
	init : function(theparent) {
		var _radios = theparent ? theparent.find(".diy-radio")
				: $(".diy-radio");
		Ymis.Radio._addEvent(_radios);
	},
	addOne : function(radio) {
		Ymis.Radio._addEvent(radio);
	},
	_addEvent : function(radios) {
		radios.each(function(i) {
			var _s = Ymis.Radio;
			var $myself = $(this);
			var _value = $myself.children(".radio-data").val();
			$myself.children(".radio").each(function() {
				var _self = $(this);
				if (_self.attr("dataValue") == _value) {
					_self.addClass("action");
					return false;
				}
			});
			$myself.on("click", ".radio", _s._click);
		});
	},
	_click : function() {
		var $myself = $(this);
		if ($myself.hasClass("action")) {
			return;
		}
		$myself.siblings(".radio").each(function() {
			$(this).removeClass("action");
		});
		$myself.addClass("action");
		var _dataValue = $myself.attr("dataValue");
		$myself.siblings(".radio-data").val(_dataValue);
		var _changeCall = $myself.parent().attr("changeCall");
		if (_changeCall) {
			eval(_changeCall + '("' + _dataValue + '")');
		}
	}
};

/* 下面是：输入框控件 */
Ymis.Input = {
	_isLimitNumber : false,
	/* 限制为数字类型:默认为 非负 小数 -2 -1 0 1 2 (-2为负数，-1为非正数，0为不限制，1为非负数，2为正数 ) */
	limitNumber : function() {
		if (this._isLimitNumber) {
			return;
		}
		var _root = $(document);
		_root.on("keydown", "input.limit-number", function(e) {
			var _self = $(this);
			var _oldValue = _self.val();
			_self.data("before_value", _oldValue);
			var _input = Ymis.Input;
			var _point = _self.attr("limitPoint");
			var _isOk = ("0" == _point) ? _input.isPlusIntCode(e.keyCode)
					: _input.isLimitPlus(e, this);
			if (!_isOk && e.keyCode == 189) {
				var _numberType = _self.attr("numberType");// 默认是非负数 类型为1 或缺省
				if (isNaN(_numberType)) {
					_numberType = 1;
				}
				if ((_numberType - 0) <= 0) {
					if (_oldValue.indexOf("-") > -1) {
						return false;
					}
					return true;
				} else {
					return false;
				}
			}
			return _isOk || _input.isCtrlCv(e);
		});
		_root.on("keyup", "input.limit-number", function(e) {
			var _self = $(this);
			var _value = _self.val();
			if (_value) {
				var _numberType = _self.attr("numberType");// 默认是非负数 类型1
				if (isNaN(_numberType)) {
					_numberType = 1;
				}
				_numberType = _numberType - 0;
				if ((isNaN(_value) && (_numberType > 0 || "-" != _value))
						|| (_numberType == -2 && _value >= 0)
						|| (_numberType == -1 && _value > 0)
						|| (_numberType == 1 && _value < 0)
						|| (_numberType == 2 && _value <= 0)) {
					_self.val("");
				} else {
					var _limitPoint = _self.attr("limitPoint");
					if (typeof (_limitPoint) != "undefined") {
						_limitPoint = _limitPoint - 0;
						if (_limitPoint > 0) {
							Ymis.Input.limitPoint(_self, _value, _limitPoint);
						} else if (_limitPoint == 0) {
							var _pIndex = _value.indexOf(".");
							if (_pIndex > -1) {
								_self.val(_value.substring(0, _pIndex));
							}
						}
					}
				}
			}
		});
		this._isLimitNumber = true;
	},
	limitPoint : function(self, value, point) {
		var pointAdd = (point - 0) + 1;
		if (value) {
			var _pointIndex = value.indexOf(".");
			if (_pointIndex > -1 && (value.length - _pointIndex > pointAdd)) {
				var _old = self.data("before_value");
				if (_old) {
					if (isNaN(_old)) {
						_old = "";
					} else {
						_pointIndex = _old.indexOf(".");
						if (_pointIndex > -1
								&& (_old.length - _pointIndex > pointAdd)) {
							_old = _old.substring(0, _pointIndex + pointAdd);
						}
					}
				}
				self.val(_old);
			}
		}
	},
	/* 是数字+删除键码 */
	isPlusIntCode : function(keyCode) {
		// 数字
		if (keyCode >= 48 && keyCode <= 57)
			return true;
		// 小数字键盘
		if (keyCode >= 96 && keyCode <= 105)
			return true;
		// Backspace键
		if (keyCode == 8)
			return true;
		// 左右移动
		if (keyCode == 37 || keyCode == 39)
			return true;
		return false;
	},
	/* 是小数点 */
	isPointCode : function(keyCode) {
		return (keyCode == 110 || keyCode == 190);
	},
	/* 是拷贝粘贴 */
	isCtrlCv : function(e) {
		return (e.ctrlKey && (e.keyCode == 86 || e.keyCode == 67));
	},
	/* 是正数字 */
	isLimitPlus : function(e, dom) {
		var _keyCode = e.keyCode;
		var _InputObj = Ymis.Input;
		var _isOk = _InputObj.isPlusIntCode(_keyCode);
		if (!_isOk && _InputObj.isPointCode(_keyCode)) {
			_isOk = true;
			var _beforeValue = $(dom).val();
			if (!_beforeValue || _beforeValue.indexOf(".") > -1 || e.shiftKey) {
				_isOk = false;
			}
		}
		return _isOk;
	}
};
