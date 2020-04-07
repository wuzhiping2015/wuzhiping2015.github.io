var CurPage = {
	init : function() {
		Ymis.SelectDropdown.init();
		Ymis.Radio.init();
		Ymis.Checkbox.init();
		Ymis.Datepicker.init();
		Ymis.Input.limitNumber();
	}
};
CurPage.selectData_sex = function(text) {
	return [ {
		key : "",
		value : "请选择"
	}, {
		key : "1",
		value : "男"
	}, {
		key : "0",
		value : "女"
	}, {
		key : "2",
		value : "中性"
	} ];
};
$(function() {
	CurPage.init();
});
