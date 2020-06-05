$(document).ready(function(){
    $('[data-href]').on('click', function(e){
        e.preventDefault();
        document.location.href=$(this).data('href');
    })
    $('[submit-form]').on('click', function(){
        $(this).closest('form').submit();
    });

   

    $("#subaccountActivate input").on('ifToggled', function(event){
        $("#subacct-container").collapse('toggle');
    });

    $("#inputAllowSso").on('change', function() {
        var loader = $(this).closest('.panel-switch').find('.loader')
        loader.fadeIn(400);
        WHMCS.http.jqClient.post("clientarea.php", jQuery("#frmSingleSignOn").serialize()).promise().done(function(){
            loader.fadeOut(400);
        });
    });

    $(document).on('click', '[data-trigger-click]', function(e){
        e.preventDefault;
        var target = $(this).data('target');
        $('body').find(target).trigger('click');
    });

    $('[data-form]').on('click', function(e){
        e.preventDefault;
        var target = $(this).data('form');
        $('body').find(target).submit();
    });

    var context = $('.list-group-tab-nav, .page-clientareadomaindetails #Overview');
    var prefix = "#tab";

    var settings = $.extend({
        getHashCallback: function (hash) {
            return hash;
        }
    });
    $('a', context).on('click', function () {
		if ($(this).data('toggle') === 'tab') {
			var hash = this.hash;
            var selector = hash ? 'a[href*="' + hash + '"]' : 'li:first-child > a';
            var hashReplace = hash.replace('tab','');
			$(context).find('.active').removeClass('active');
            $('body').find(selector).addClass('active');            
            $('body').find(hashReplace).addClass('active').siblings('.tab-pane').removeClass('active');
			window.location.hash = settings.getHashCallback(hash);
        }
    });

    if(window.location.hash && context.length > 0) {
        var hash = window.location.hash;
        var selector = hash ? 'a[href*="' + hash + '"]' : 'li:first-child > a';
        $('body').find(selector).addClass('active');
        var hashReplace = hash.replace('tab','');
        $('body').find(hashReplace).addClass('active').siblings('.tab-pane').removeClass('active');
    }

	
    $(document).on('click', '[data-btn-loader]', function(){
        $(this).find('span').not('.loader').addClass('invisible');
        $(this).find('.loader').removeClass('hidden');
    });

    $('[data-cc-popover-show]').on('mouseenter', function(){
        $(this).siblings('[data-cc-popover]').addClass('fade in').show();
    });
    $('[data-cc-popover-show]').on('mouseout', function(){
        $(this).siblings('[data-cc-popover]').removeClass('fade in').hide();
    });

    $('[data-radio-tab]').on('click', function(){
        $(this).find('input[type="radio"]').iCheck('update');
    });

    if($('.payment-form').length > 0){
        var btntext = $('.payment-form').data('btntext');
        var btnsubscribetext = $('.payment-form').data('btnsubscribetext');
        $('.payment-form').find('input[type="image"]').attr('type','submit').attr('value', btntext);
        $('#paynow').html(btntext).attr('style','color: #fff').addClass('btn');

        var formCount = $('.payment-form').find('form').length;
        if (formCount == 2){
            $('.payment-form').find('form:first').find('input[type="submit"]').attr('value', btnsubscribetext);
        }
    }

    
    var checkAll = $('.btn-check-all');
    var checkboxes = $('.check-all-container input[type="checkbox"]').not(':disabled');
    checkAll.on('click', function (e) {
        e.preventDefault();
        var checkalltext = $(this).data('checkalltext');
        var uncheckalltext = $(this).data('uncheckalltext');
        if ($(this).hasClass('checked')){
            checkboxes.iCheck('uncheck');
            $(this).removeClass('checked');
            $(this).text(checkalltext);
        } else {
            checkboxes.iCheck('check');
            $(this).addClass('checked');
            $(this).text(uncheckalltext);
        }
    });

    $('input[name="canchangepin"]').closest('div').addClass('checkbox').css('margin-top','-5px');
    $('input[name="canchangepin"]').iCheck({
        checkboxClass: 'checkbox-styled',
        radioClass: 'radio-styled',
        increaseArea: '40%'
    });

    jQuery('.ssl-status.ssl-sync').each(function () {
        var self = jQuery(this);       
        WHMCS.http.jqClient.post(
            WHMCS.utils.getRouteUrl('/domain/ssl-check'),
            {
                'type': self.closest('.ssl-info').data('type'),
                'domain': self.closest('.ssl-info').data('domain'),
                'token': csrfToken
            },
            function (data) {
                if (data.invalid) {
                    self.hide();
                } else {
                    var template = self.data('maintemplate');
                    if (template == 'undefined'){
                        template = "lagom"
                    }
                    var newDataImage = data.image.replace('assets/img/ssl/','templates/'+template+'/assets/img/ssl/12x12/');
                    newDataImage = newDataImage.replace('.png','.svg');
                   
                    self.replaceWith(
                         '<img src="' + newDataImage + '" data-toggle="tooltip" title="' + data.tooltip + '" class="' + data.class + '">'
                    );
                }
            }
        );
    });
});