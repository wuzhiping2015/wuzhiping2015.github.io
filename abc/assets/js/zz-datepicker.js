var Ymis = Ymis || {};
Ymis.Datepicker = {
	_boxId : null,
	_init : false,
	_curElement : null,
	_curSelectDate : null,
	init : function(parentDom) {
		var _showBtns = parentDom ? parentDom.find(".datepicker")
				: $(".datepicker");
		_showBtns.on("click", function() {
			var _cal = Ymis.Datepicker;
			var _self = $(this);
			var _dialogId = _self.attr("dialogId");
			var _dom = null;
			if (_dialogId) {
				_dom = $("#" + _dialogId).children(".pop");
			}
			if (_cal._boxId) {
				$("#" + _cal._boxId).remove();
			}
			if (_self.hasClass("disabled")) {
				return;
			}
			_cal.show(_self, _dom);
		});
		if (!this._init) {
			$(document)
					.click(
							function(e) {
								var _cal = Ymis.Datepicker;
								if (_cal._boxId) {
									var _curDom = $(e.target);
									if (_curDom.hasClass("datepicker")
											|| _curDom.parent().hasClass(
													"datepicker")) {
										return;
									}
									$("#" + _cal._boxId).remove();
									_cal._boxId = null;
								}
							});
			this._init = true;
		}
	},
	show : function(forelement, parentDom) {
		var _s = Ymis.Datepicker;
		_s._curElement = forelement;
		_s._curSelectDate = null;
		var _now = new Date();
		var _selectDate = _now;
		var _selectDateStr = forelement.children("input").val();
		if (_selectDateStr) {
			_selectDate = _s.Util.parseDate(_selectDateStr);
			_s._curSelectDate = _selectDateStr;
		}
		var _dates = _s.Util.getCalDates(_selectDate.getFullYear(), _selectDate
				.getMonth(), true, _now);
		var _html = _s.BoxHtml.getHtml(_dates, _selectDate, forelement
				.attr("mycalClass"));
		var _body = parentDom || $("body");
		_body.append(_html);
		_s._boxId = "ui_datepicker_box";
		var _calbox = _s.Events.monthPageInit(_s._boxId);
		_s.setPosition(forelement, _calbox, _body);
	},
	CalDate : function(date, show, isOtherMonth, isToday) {
		this.date = date;
		this.show = show;
		this.isOtherMonth = isOtherMonth;
		this.isToday = isToday;
	},
	/* 日历的定位 */
	setPosition : function(forelement, calbox, parentDom) {
		if (forelement.attr("diyPosition")) {
			return;
		}
		var _elep = forelement.offset();
		var _left = _elep.left;
		var _top = _elep.top + forelement.outerHeight();
		if (parentDom[0].tagName != "BODY") {
			var _pp = parentDom.offset();
			_left -= _pp.left;
			_top -= _pp.top;
		}
		var _adjustPosition = forelement.attr("adjustPosition");
		if (_adjustPosition) {
			var _arr = _adjustPosition.split(",");
			_left += (_arr[0] - 0);
			_top += (_arr[1] - 0);
		}
		calbox.css({
			left : _left,
			top : _top
		});
	},
	Events : {
		/* 添加month状态的所有事件 */
		monthPageInit : function(id) {
			var _cal = Ymis.Datepicker;
			var _events = _cal.Events;
			var _calbox = $("#" + id);
			_calbox.on("click", function() {
				return false;
			});
			var _month = _calbox.find(".ui-datepicker-month");
			var _list = _month.children(".datelist");
			_list.on("click", "td", _events.dateSelect);
			if (_cal._curSelectDate) {
				_list.find("[date='" + _cal._curSelectDate + "']").addClass(
						"action");
			}
			var _title = _month.children(".title-month");
			_title.on("click", "a", _events.monthGoChange);
			_title.children(".title-show").on("click", function() {
				var _self = $(this);
				var _monthBox = _self.parent().parent();
				_monthBox.removeClass("action");
				var _calYear = _monthBox.siblings(".ui-datepicker-year");
				var _event = Ymis.Datepicker.Events;
				var _yearMonths = _monthBox.attr("date").split("-");
				var _year = _yearMonths[0] - 0;
				if (_calYear.length > 0) {
					_event.goYearPage(_year, _calYear);
				} else {
					_event.yearPageInit(_year, _monthBox.parent());
				}
				return false;
			});
			return _calbox;
		},
		dateSelect : function() {
			var _cal = Ymis.Datepicker;
			var _theElement = _cal._curElement;
			var _date = $(this).attr("date");
			var _showDate = _date;
			if ("1" == _theElement.attr("showcalType")) {
				_showDate = _cal.Util.formatChinaDate(_date);
			}
			_theElement.children(".datepicker-show").val(_showDate);
			_theElement.children(".datepicker-data").val(_date);
			$("#" + _cal._boxId).remove();
			_cal._boxId = null;
			var _afterSelectFunc = _theElement.attr("afterSelectFunc");
			if (_afterSelectFunc) {
				eval(_afterSelectFunc + '("' + _date + '")');
			}
			return false;
		},
		monthGoChange : function() {
			var _s = Ymis.Datepicker;
			var _util = _s.Util;
			var _self = $(this);
			var _monthBox = _self.parent().parent();
			var _yearMonth = _util.getYearMonth(_monthBox.attr("date"), _self
					.attr("to") - 0);
			_s.Events.monthGo(_yearMonth[0] - 0, _yearMonth[1] - 0, _monthBox,
					_self.siblings(".title-show"));
			return false;
		},
		monthGo : function(year, month, box, golink) {
			var _s = Ymis.Datepicker;
			var _util = _s.Util;
			var _table = box.children(".datelist");
			_table.children("tbody").remove();
			var _calDates = _util.getCalDates(year, month, true);
			var _tbody = _s.MonthHtml.getCalendarTbody(_calDates);
			_table.append(_tbody);
			var _month = _util.formatTemNum(month + 1);
			var _newMonth = year + '-' + _month;
			box.attr("date", _newMonth);
			var _newTitle = year + '年' + (month + 1) + '月';
			var _show = golink || box.find(".title-show");
			_show.html(_newTitle);

			if (_s._curSelectDate) {
				_table.find("[date='" + _s._curSelectDate + "']").addClass(
						"action");
			}
		},
		/* from year to month page */
		backMonthPage : function() {
			var _s = Ymis.Datepicker;
			var _self = $(this);
			var _month = _self.attr("date");
			var _cal = $("#" + _s._boxId).children().eq(0);
			var _calMonth = _cal.children(".ui-datepicker-month");
			var _calYear = _cal.children(".ui-datepicker-year");
			_s.Events.monthGo(_calYear.attr("date") - 0, _month - 1, _calMonth);
			_calYear.removeClass("action");
			_calMonth.addClass("action");
			return false;
		},
		/* from month to year page */
		goYearPage : function(year, yearBox) {
			var _show = yearBox.children(".title-year").children(".title-show");
			_show.html(year);
			yearBox.attr("date", year);
			yearBox.addClass("action");
		},
		yearPageInit : function(year, parentBox) {
			var _s = Ymis.Datepicker;
			var _events = _s.Events;
			var _html = _s.YearPageHtml.getHtml(year);
			parentBox.append(_html);
			var _calYear = parentBox.children(".ui-datepicker-year");
			var _title = _calYear.children(".title-year");
			_title.on("click", "a", _events.yearGoChange);
			_title.children(".title-show").on("click", function() {
				var _self = $(this);
				var _yearBox = _self.parent().parent();
				_yearBox.removeClass("action");
				var _year = _yearBox.attr("date");
				var _calTenYear = _yearBox.siblings(".ui-datepicker-ten-year");
				var _event = Ymis.Datepicker.Events;
				if (_calTenYear.length > 0) {
					_event.goTenYearPage(_year, _calTenYear);
				} else {
					_event.tenYearPageInit(_year, _yearBox.parent());
				}
				return false;
			});
			_calYear.children(".monthlist").on("click", "td",
					_events.backMonthPage);
		},
		yearGoChange : function() {
			var _self = $(this);
			var _to = _self.attr("to") - 0;
			var _box = _self.parent().parent();
			var _year = (_box.attr("date") - 0) + _to;
			_self.siblings(".title-show").html(_year);
			_box.attr("date", _year);
			return false;
		},
		backYearPage : function() {
			var _s = Ymis.Datepicker;
			var _self = $(this);
			var _year = null;
			if (_self.hasClass("year-go")) {
				var _input = _self.siblings("input");
				var _val = _input.val();
				if (isNaN(_val) || parseInt(_val) < 1) {
					_input.val("");
					return;
				}
				_year = parseInt(_val);
			} else {
				_year = _self.html() - 0;
			}

			var _cal = $("#" + _s._boxId).children().eq(0);
			var _calYear = _cal.children(".ui-datepicker-year");
			var _calTenYear = _cal.children(".ui-datepicker-ten-year");
			_calTenYear.removeClass("action");
			_s.Events.goYearPage(_year, _calYear);
			return false;
		},
		tenYearPageInit : function(year, parentBox) {
			var _s = Ymis.Datepicker;
			var _events = _s.Events;
			var _tenYears = _s.Util.getTenYears(year);
			var _html = _s.TenYearPageHtml.getHtml(_tenYears[0], _tenYears[1]);
			parentBox.append(_html);
			var _calYear = parentBox.children(".ui-datepicker-ten-year");
			var _title = _calYear.children(".title-ten-year");
			_title.on("click", "a", _events.tenYearGoChange);
			var _table = _calYear.children(".yearlist");
			_table.on("click", ".year", _events.backYearPage);
			_table.on("click", ".year-go", _events.backYearPage);
		},
		goTenYearPage : function(year, box) {
			var _s = Ymis.Datepicker;
			_s.Events.tenYearChange(year, box);
			box.addClass("action");
		},
		tenYearGoChange : function() {
			var _s = Ymis.Datepicker;
			var _self = $(this);
			var _to = _self.attr("to") - 0;
			var _box = _self.parent().parent();
			var _year = (_box.attr("date") - 0) + _to;
			_s.Events.tenYearChange(_year, _box, _self.siblings(".title-show"));
			return false;
		},
		tenYearChange : function(year, box, golink) {
			var _s = Ymis.Datepicker;
			var _tenYears = _s.Util.getTenYears(year);
			var _golink = golink
					|| box.children(".title-ten-year").eq(0).children(
							".title-show");
			_golink.html(_tenYears[0] + '-' + _tenYears[1]);
			box.attr("date", _tenYears[1]);
			var _table = box.children(".yearlist");
			_table.children("tbody").remove();
			_table.append(_s.TenYearPageHtml.getTbody(_tenYears[0],
					_tenYears[1]));
		}
	},
	Util : {
		getCalDates : function(year, month, isSimple, today) {
			var _CalDate = Ymis.Datepicker.CalDate;
			var arrayObj = new Array();
			var days = this.getDaysInMonth(year, month);
			var isOnly = isSimple || false;
			var nowDate = today || new Date();
			var todayInMonth = this.getTodayInMonth(year, month, nowDate);
			var theDate = new Date(year, month, 1);
			var dayInWeek = theDate.getDay();
			if (dayInWeek != 0) {
				this.addLastMonthDay(arrayObj, year, month, dayInWeek, isOnly);
			}
			var dateStr = year + '-' + this.formatTemNum(month + 1) + '-';
			for ( var i = 1; i <= days; i++) {
				if (todayInMonth != i) {
					arrayObj.push(new _CalDate(dateStr + this.formatTemNum(i),
							i, false, false));
				} else {
					var todayShow = i;
					if (!isSimple) {
						todayShow = '今天(' + (month + 1) + '月' + i + '日)';
					}
					arrayObj.push(new _CalDate(dateStr + this.formatTemNum(i),
							todayShow, false, true));
				}

			}
			theDate.setDate(days);
			dayInWeek = theDate.getDay();
			if (dayInWeek != 6) {
				this.addNextMonthDay(arrayObj, year, month, dayInWeek, isOnly);
			}
			return arrayObj;

		},
		// 添加上个月的天
		addLastMonthDay : function(arrayObj, year, month, dayInWeek, isSimple) {
			var _CalDate = Ymis.Datepicker.CalDate;
			var lastMonth = (month + 11) % 12;
			var lastYear = month == 0 ? (year - 1) : year;
			var lastDays = this.getDaysInMonth(lastYear, lastMonth);
			var dateStr = lastYear + '-' + this.formatTemNum(lastMonth + 1)
					+ '-';
			var showPre = (lastMonth + 1) + '月';
			var dayInMonth = 0;
			var showStr = null;
			for ( var i = dayInWeek - 1; i >= 0; i--) {
				dayInMonth = lastDays - i;
				showStr = isSimple ? '' + dayInMonth
						: (showPre + dayInMonth + '日');
				arrayObj.push(new _CalDate(dateStr + dayInMonth, showStr, true,
						false));
			}
		},
		// 添加下个月的天
		addNextMonthDay : function(arrayObj, year, month, dayInWeek, isSimple) {
			var _CalDate = Ymis.Datepicker.CalDate;
			var nextMonth = (month + 1) % 12;
			var nextYear = month == 11 ? (year + 1) : year;
			var dateStr = nextYear + '-' + this.formatTemNum(nextMonth + 1)
					+ '-0';
			var showPre = (nextMonth + 1) + '月';
			var showStr = null;
			for ( var i = 1, max = 6 - dayInWeek; i <= max; i++) {
				showStr = isSimple ? '' + i : (showPre + '0' + i + '日');
				arrayObj.push(new _CalDate(dateStr + i, showStr, true, false));
			}
		},
		isLeapYear : function(year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth : function(year, month) {
			if (month == 1) {
				return this.isLeapYear(year) ? 29 : 28;
			}
			if (month < 7) {
				return month % 2 == 0 ? 31 : 30;
			} else {
				return (month + 1) % 2 == 0 ? 31 : 30;
			}

		},
		getTodayInMonth : function(year, month, today) {
			if (year == today.getFullYear() && month == today.getMonth()) {
				return today.getDate();
			}
			return -1;
		},
		// date="2015-12" to=1_12/-1_-12，
		getYearMonth : function(date, to) {
			var aDate = date.split("-");
			var year = aDate[0] - 0;
			var month = (aDate[1] - 1) + to;
			if (to > 0 && month >= 12) {
				year += 1;
			}
			if (to < 0 && month < 0) {
				year -= 1;

			}
			month = (month + 12) % 12;
			return [ year, month ];
		},
		// '2015-05-20' or '2015-5-20'
		parseDate : function(dateStr) {
			var arr = dateStr.split('-');
			return new Date(arr[0], arr[1] - 1, arr[2]);
		},
		// 返回'2015-5-20'
		formatDate : function(date) {
			return date.getFullYear() + '-'
					+ this.formatTemNum(date.getMonth() + 1) + '-'
					+ this.formatTemNum(date.getDate());
		},
		formatYearMonth : function(date) {
			return date.getFullYear() + '-'
					+ this.formatTemNum(date.getMonth() + 1);
		},
		formatTemNum : function(num) {
			return num < 10 ? '0' + num : '' + num;
		},
		formatChinaDate : function(dateStr) {
			var arr = dateStr.split('-');
			return arr[0] + '年' + arr[1] + '月' + arr[2] + '日';
		},
		/* 获取年份所在的那十年，如：2011-2020 */
		getTenYears : function(year) {
			var _yu = year % 10;
			if (_yu == 0) {
				_yu = 10;
			}
			var _startYear = year - _yu + 1;
			var _endYear = _startYear + 9;
			return [ _startYear, _endYear ];
		}
	},
	BoxHtml : {
		getHtml : function(aCalDate, selectDate, myclass) {
			var _m = Ymis.Datepicker.MonthHtml;
			var _myclass = myclass || "";
			var html = '<div id="ui_datepicker_box" class="ui-datepicker-box ';
			html += _myclass;
			html += '"> <div class="ui-datepicker">';
			html += _m.getHtml(aCalDate, selectDate);
			html += '</div></div>';
			return html;
		}
	},
	/* 月视图的html */
	MonthHtml : {
		getHtml : function(aCalDate, selectDate) {
			var html = '<div class="ui-datepicker-month action"';
			html += ' date="'
					+ Ymis.Datepicker.Util.formatYearMonth(selectDate) + '">';
			html += this.getCalendarTitle(selectDate);
			html += this.getCalendarTable(aCalDate);
			html += '</div>';
			return html;
		},
		getCalendarTitle : function(selectDate) {
			var html = '<div class="title-month"> <a class="btn-pre" href="javascript:;" to="-1" title="前一月"><span class="arrow-l"></span></a> <span class="title-show">';
			html += selectDate.getFullYear() + '年'
					+ (selectDate.getMonth() + 1) + '月';
			html += '</span> <a class="btn-next" href="javascript:;" to="1" title="下一月"><span class="arrow-r"></span></a> </div>';

			return html;
		},
		getCalendarTable : function(aCalDate) {
			var html = '<table class="datelist"> <thead> <tr> <th>日</th> <th>一</th> <th>二</th> <th>三</th> <th>四</th> <th>五</th> <th>六</th> </tr> </thead>';
			html += this.getCalendarTbody(aCalDate);
			html += '</table>';
			return html;
		},
		getCalendarTbody : function(aCalDate) {
			var html = '<tbody>';
			var countWeek = aCalDate.length / 7;
			var start = 0;
			for ( var i = 0; i < countWeek; i++) {
				start = i * 7;
				html += this.getOneWeek(aCalDate, start, start + 6);
			}
			html += '</tbody>';
			return html;
		},
		getOneWeek : function(aCalDate, start, end) {
			var html = '<tr>';
			for ( var i = start; i <= end; i++) {
				html += this.getOneDay(aCalDate, i, start, end);
			}
			html += '</tr>';
			return html;
		},
		getOneDay : function(aCalDate, index, start, end) {
			var obj = aCalDate[index];
			var _class = "";
			if (obj.isToday) {
				_class += " todaytd";
			}
			if (obj.isOtherMonth) {
				_class += " invalidateday";
			}
			var html = '<td date="' + obj.date + '"';
			if (_class) {
				html += ' class="' + _class + '"';
			}
			html += '>' + obj.show + '</td>';
			return html;
		}
	},
	/* 年视图的html */
	YearPageHtml : {
		getHtml : function(year) {
			var html = '<div class="ui-datepicker-year action" date="';
			html += year + '">';
			html += this.getTitle(year);
			html += this.getTable();
			html += '</div>';
			return html;
		},
		getTitle : function(year) {
			var html = '<div class="title-year"> <a class="btn-pre" href="javascript:;" to="-1" title="前一年"><span class="arrow-l"></span></a> <span class="title-show">';
			html += year;
			html += '</span> <a class="btn-next" href="javascript:;" to="1" title="下一年"><span class="arrow-r"></span></a> </div>';
			return html;
		},
		getTable : function() {
			var html = '<table class="monthlist"> <tbody> <tr> <td date="1">1月</td> <td date="2">2月</td> <td date="3">3月</td> </tr> <tr> <td date="4">4月</td> <td date="5">5月</td> <td date="6">6月</td> </tr> <tr> <td date="7">7月</td> <td date="8">8月</td> <td date="9">9月</td> </tr> <tr> <td date="10">10月</td> <td date="11">11月</td> <td date="12">12月</td>  </tr> </tbody> </table>';
			return html;
		}
	},
	/* 十年视图的html */
	TenYearPageHtml : {
		getHtml : function(startYear, endYear) {
			var html = '<div class="ui-datepicker-ten-year action" date="';
			html += endYear + '">';
			html += this.getTitle(startYear, endYear);
			html += this.getTable(startYear, endYear);
			html += '</div>';
			return html;
		},
		getTitle : function(startYear, endYear) {
			var html = '<div class="title-ten-year"> <a class="btn-pre" href="javascript:;" to="-10" title="前十年"><span class="arrow-l"></span></a> <span class="title-show">';
			html += startYear + '-' + endYear;
			html += '</span> <a class="btn-next" href="javascript:;" to="10" title="后十年"><span class="arrow-r"></span></a> </div>';
			return html;
		},
		getTable : function(startYear, endYear) {
			var html = '<table class="yearlist">';
			html += this.getTbody(startYear, endYear);
			html += '</table>';
			return html;
		},
		getTbody : function(startYear, endYear) {
			var html = '<tbody>';
			var count = 0;
			for ( var i = startYear; i <= endYear; i++) {
				if (count % 3 == 0) {
					if (count > 0) {
						html += '</tr>';
					}
					html += '<tr>';
				}
				count++;
				html += '<td class="year">' + i + '</td>';
			}
			html += '<td colspan="2" class="noclick-td"><span class="year-choose"><input value="" placeholder="请输入年份"><span class="year-go"></span></span></td>';
			html += '</tbody>';
			return html;
		}
	}

};
