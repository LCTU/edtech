fontSize();
$(window).resize(function () {
    fontSize();
});

function fontSize() {
    var size;
    var winW = $(window).width();
    if (winW <= 1300 && winW > 800) {
        size = Math.round(winW / 13);
    } else if (winW <= 800) {
        size = Math.round(winW / 7.5);
        if (size > 65) {
            size = 65;
        }
    } else {
        size = 100;
    }
    $('html').css({
        'font-size': size + 'px'
    })
}

$(function () {
    //--
    setTimeout(function () {
        $('body').addClass('show');
    }, 500);
    //--选项卡
    $('.tabContentDiv').find('.tabContent:first').show();
    $('.tab').each(function (i) {
        var _this = $(this);
        var tabContentDiv = $('.tabContentDiv').eq(i).find('.tabContent');
        $(this).find('li').each(function (ii) {
            $(this).click(
                function () {
                    _this.find('li').removeClass('on');
                    $(this).addClass('on');
                    tabContentDiv.hide();
                    tabContentDiv.eq(ii).show();
                }
            )
        })
    });
    //--返回顶部
    $('.topA').click(function () {
        $('body,html').stop(true, true).animate({scrollTop: 0}, 300);
    });
    $(window).scroll(function () {
        if($(window).scrollTop() > $(window).height()){
            $('.topA').addClass('show')
        }else{
            $('.topA').removeClass('show')
        }
    });
    //--js下拉选择框
    $('.select').each(function () {
        var _this = $(this);
        _this.find('select').change(function () {
            _this.find('span').html($(this).find("option:selected").text());
        })
    });

    $('.pageSide').find('li').each(function () {
        var li = $(this);
        if(li.find('dl').length > 0){
            li.find('a').eq(0).click(function () {
                if(li.hasClass('on')){
                    li.removeClass('on');
                    $(this).removeClass('onon');
                    li.find('dl').stop(true, true).slideUp(300)
                }else{
                    li.addClass('on');
                    $(this).addClass('onon');
                    li.find('dl').stop(true, true).slideDown(300)
                }
                return false
            })
        }
    });

    $(window).scroll(function () {
        if($(window).scrollTop() > $('.navDiv').offset().top){
            $('.nav').addClass('on')
        }else{
            $('.nav').removeClass('on')
        }
    });

    navFun()

});

function navFun(){
    if($(window).width() > 800) return;
    var html = $('.nav').html();
    $('.nav').html('<a href="javascript:;" class="navA"></a><div class="navList"><div class="close"><i></i></div>'+ html +'</div>');
    $('.head').find('a.btn').prependTo('.nav');

    $('.navA').click(function () {
        if ($('body').hasClass('navShow')) {
            $('body').removeClass('navShow')
        } else {
            $('body').addClass('navShow')
        }
    });
    $('.nav').find('.close').find('i').click(function () {
        $('body').removeClass('navShow')
    });
    $('.nav').find('li').each(function () {
        var _ = $(this);
        if (_.find('.list').length > 0) {
            _.addClass('sNavLi');
            _.find('a.name').click(function () {
                if (_.hasClass('on')) {
                    _.removeClass('on');
                    _.find('.list').hide();
                } else {
                    _.addClass('on');
                    _.find('.list').show();
                }
                return false
            })
        }
    });
}

pageTipsFun();
function pageTipsFun() {
    if ( $.browser.msie ){
        if(Number($.browser.version) < 10){
            _()
        }
    }

    function _(){
        $('body').append('<div class="pageTips"><div class="container"><a href="javascript:;" class="close"></a><div class="img"><img src="image/nimg273.png" alt="" /></div><div class="msg">抱歉，我们不再支持您的浏览器。请升级您的Internet Explorer（IE）浏览器到<a href="">最新版本( IE 10以上版本)</a>，或将<a href="">搜狗</a>、<a href="">360</a>、<a href="">QQ</a> 等浏览器切换到急速模式，您还可以下载安装 <a href="">谷歌</a>、<a href="">火狐</a> 浏览器以达到最佳观看模式。</div></div></div>');
        $('.pageTips').fadeIn(300);

        $('.pageTips').find('.close').click(function () {
            $('.pageTips').hide()
        });
    }
}
