/**
 * Created by hh on 2015/12/1.
 */
$(function(){

    $(".shaixuan li").click(function(){
        $(this).siblings('li').removeClass("on");
        $(this).addClass("on")


    })
    $(".xuanze li").click(function(){
        $(this).siblings('li').removeClass("on");
        $(this).addClass("on")


    })
    $(".mobanlist div").click(function(){
        $(".mobanlist div").removeClass("on");
        $(this).addClass("on")


    })
    $(".tip").hover(function(){

        $(this).find('.tippop').toggle()


    })
    $(".setup").hover(function(){

        $(this).find('.subdiv').toggle()


    })
    $(".msg").hover(function(){

        $(this).find('.subdiv').toggle()


    })

    //if ($('.selectyun').hasClass('selectyun02')) {
    //    $('.btn01').hide();
    //} else {
    //    $('.btn01').show();
    //}

    $(".yxpic li").hover(function () {

        $(this).find(".yxpicmask").toggle();
    });

})

//$.map($('.selectyun'),function(_item){
//    if($(_item).hasClass('.selectyun02')){
//        alert("有勾选");
//        return false
//    }
//});


function afterText() {

    var txt1 = $("<div class='addzone'></div>").html("<div class='del01'><a href='###'>删除</a></div><div class='info1'><label><span class='f-color-r'>* </span>年级：</label><select class='w100'><option></option><option></option><option></option></select><select class='w100'><option></option><option></option><option></option></select><span class='jieshi'>请选择您的年级</span></div><div class='info1'><label><span class='f-color-r'>* </span>学科：</label><select class='w200'><option></option><option></option><option></option></select></div><div class='info2'><label><span class='f-color-r'>* </span>教材：</label><span class='jc'><input type='checkbox'><label>教材1</label><input type='checkbox'><label>教材2</label><input type='checkbox'><label>教材3</label><input type='checkbox'><label>教材4</label></span></div><div class='clear'></div>");     // 通过 jQuery 创建元素


    $(".addzone:last").after(txt1);
}
$(document).on('click', '.del01', function () {
    $(this).parent().remove();
});


//function downloadButton(){
//    if($('.selectyun').hasClass('selectyun02')){
//        $('.btndl').show()
//    } else {
//        $('.btndl').hide()
//    }
//}
//function allButton(){
//    var s1 = $(".selectyun").length;
//    var s2 = $('.selectyun02').length;
//    var s3 = s1 - s2;
//
//    if( s3 == 0 ){
//        $('.allgou').addClass('.allgou02')
//    } else {
//        $('.allgou').removeClass('.allgou02')
//    }
//}


$(document).on('click', '.gou', function () {
    $(this).parent('.selectyun').toggleClass('selectyun02')

});

$(document).on('click', '.xuanx02', function () {
    $(this).toggleClass('on')

});

$(document).on('click', '.xuanx', function () {
    $(this).parent('.shaixuan').find('.xuanx').removeClass('on');
    $(this).toggleClass('on');

});
$(document).on('click', '.allgou', function () {
    $(this).toggleClass('allgou02')
    $('.selectyun').removeClass('selectyun02');
    $('.selectyun').addClass('selectyun02');
    downloadButton();

});
$(document).on('click', '.allgou02', function () {
    $(this).removeClass('allgou02')
    $('.selectyun').removeClass('selectyun02');


    downloadButton();

});



//$(document).delegate('.selectyun', 'click', allButton);

function downloadButton(){
    var totalPic = $('.selectyun').length;
    var hasSelPic = $('.selectyun02').length;
    if(hasSelPic < totalPic){
        $('.allgou').removeClass('allgou02');
    } else {
        $('.allgou').addClass('allgou02');
    }
    if($('.selectyun').hasClass('selectyun02')){
        $('.btndl').show()
    } else {
        $('.btndl').hide()
    }
}
$(document).delegate('.selectyun', 'click', downloadButton);



$(document).on('click', '.shousuo', function () {
    $(this).prev('.plnr').css('height', "auto");
    $(this).addClass('shousuo2')
    $(this).html('收缩全文')

});
$(document).on('click', '.shousuo2', function () {
    $(this).prev('.plnr').css('height', "60px");
    $(this).removeClass('shousuo2')
    $(this).html('查看全文')
});
$(document).on('click', '.starpj li', function () {
    $(this).siblings('.starpj li').removeClass('on')
    $(this).prevAll('.starpj li').addClass('on')
    $(this).addClass('on')
});

$(document).on('click', '.addnext', function () {
    $('.addbox').toggle();


});
$(document).on('click', '.guanzhubtn', function () {

    $(this).parent().addClass('no')

    $(this).parent().next().removeClass('no')

});
$(document).on('click', '.guanzhuedbtn', function () {

    $(this).parent().addClass('no')

    $(this).parent().prev().removeClass('no')

});
$(document).on('click', '#list1 li', function () {
    $('.tab').addClass('no');
    $(this).find('.tab').removeClass('no');
    $(this).parent().find('.mokuai').removeClass('mokuaion');
    $(this).find('.mokuai').addClass('mokuaion');





});
$(document).on('click', '#list2 li', function () {
    $('.tab').addClass('no');
    $(this).find('.tab').removeClass('no');
    $(this).parent().find('.mokuai').removeClass('mokuaion');
    $(this).find('.mokuai').addClass('mokuaion');





});

$(document).on('click', '.addmokuai', function () {


    $(this).next('.addmokuaibox').show();
    $(this).prev('.item2').show();
    $(this).hide();







});
$(document).on('click', '.bclose', function () {


    $(this).parent('.addmokuaibox').hide();
    $(this).parent('.addmokuaibox').parent().find('.item2').hide();
    $(this).parent('.addmokuaibox').prev('.addmokuai').show();







});

$(document).on('click', '.delcloss', function () {

    //$(this).parent('.tab').parent('li').parent('ul').find('li').eq(1).find('.mokuai').addClass("mokuaion");
    //$(this).parent('.tab').parent('li').parent('ul').find('li').eq(1).find('.tab').removeClass("no");
    $(this).parent('.tab').parent('li').remove();








});








