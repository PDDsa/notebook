/* Stage- Bootstrap one page Event ticket booking theme
Created by pixpalette.com - online design magazine */

$(window).load(function () {
    // Animate loader off screen
    $(".loader").fadeOut("slow");
});

function redirectUrl(th) {
    var the = $(th);
    $.ajax({
        url: '/api/project/%s/'.format(the.attr('data-id')),
        type: 'PATCH',
        success: function () {
        },
        fail: function () {
        }
    });
    console.log(the.attr('data-url'))
    window.location.href = '/'+the.attr('data-url');
}

$(document).on('mouseenter', ".ticketBox", function () {
    $(this).find(".topLine,.bottomLine").stop().animate({"width": "100%"});
    $(this).find(".rightLine,.leftLine").stop().animate({"height": "100%"});
    $(this).css("cursor", "Pointer");

});
$(document).on('mouseleave', '.ticketBox', (function () {
    $(this).find(".topLine,.bottomLine").stop().animate({"width": "0px"});
    $(this).find(".rightLine,.leftLine").stop().animate({"height": "0px"});
}));

function showTime() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var dayArray = new Array(7);
    dayArray[0] = "星期日";
    dayArray[1] = "星期一";
    dayArray[2] = "星期二";
    dayArray[3] = "星期三";
    dayArray[4] = "星期四";
    dayArray[5] = "星期五";
    dayArray[6] = "星期六";
    var day1 = myDate.getDay();
    var day = dayArray[day1];
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    var min = checkTime(minute);
    var sec = checkTime(second);
    var time1 = year + "年" + month + "月" + date + "日";
    var time2 = hour + "：" + min + "：" + sec;
    // document.write(time1+day+time2);
    //用js方法
    // document.getElementById("time").innerHTML = time1+day+time2;
    //用jquery方法
    if (parseInt(sec) % 2 === 0) {
        $('.ticketBox').each(function () {
            $(this).find(".topLine,.bottomLine").stop().animate({"width": "100%"});
            $(this).find(".rightLine,.leftLine").stop().animate({"height": "100%"});
        });
    } else {
        $('.ticketBox').each(function () {
            $(this).find(".topLine,.bottomLine").stop().animate({"width": "0%"});
            $(this).find(".rightLine,.leftLine").stop().animate({"height": "0%"});
        });
    }


    $('#time').text(time1 + day + time2);
    setTimeout("showTime()", 31000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
