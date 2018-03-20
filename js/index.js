$(function(){
    // 单图标的输入框
    $(".has-in-icon input").on("focus",function(){
        $(this).parent().css("border-color","#e3b437")
    })
    $(".has-in-icon input").on("blur",function(){
        $(this).parent().css("border-color","#dbdbdb")
    })
    // 下拉列表
    $('.c-dropdown ul').on('mousedown','li',function(){
        $(this).addClass('on').siblings().removeClass('on')
        $(this).parent('ul').siblings().children('input').val($(this).text())
    })
    $('.c-dropdown input').on('focus',function(){
        $(this).parent('.c-input').siblings().stop().slideDown(250)
    })
    $('.c-dropdown input').on('blur',function(){
        $(this).parent('.c-input').siblings().stop().slideUp(250)
    })
})