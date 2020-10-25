
if(document.querySelector('.main-inner') == undefined){
    document.querySelector("header").style.background = "#161616"
}

let langStr = ['#fb','#ig','#tw','#tg','#ua','#en','#ru']
window.addEventListener('scroll', function onScroll()  {
    langStr.map( x => {
        if(document.querySelector('footer').getBoundingClientRect().top 
        < document.querySelector(x).getBoundingClientRect().top 
        || document.querySelector('.main-inner').getBoundingClientRect().bottom 
        > document.querySelector(x).getBoundingClientRect().top){
            document.querySelector(x).style.color = "#fff";
        }else {
            document.querySelector(x).style.color = "#707070";
        }
        console.log(document.querySelector('header').getBoundingClientRect().bottom  +' '+ document.querySelector('.main-inner').getBoundingClientRect().bottom)
        if(document.querySelector('header').getBoundingClientRect().bottom 
        < document.querySelector('.main-inner').getBoundingClientRect().bottom - 200){
            document.querySelector("header").style.background = "linear-gradient(to bottom, #161616, rgba(255,255,255,0))"
            console.log('up')
        }else{
            console.log('down')
            document.querySelector("header").style.background = "#161616"
        }
    })
});


//next button click function
$("#next").click(function() {
    swap("clockwise");
});

//prev button click function
$("#prev").click(function() {
    swap("counter-clockwise");
});

//if any visible items are clicked
$("li").click(function() {
    if ($(this).attr("class") == "items left-pos") {
        swap("counter-clockwise");
    } else {
        swap("clockwise");
    }
});

$('.last-nav').mouseenter(function() {
    $('.divider-line').addClass('hover-line');
});
$('.last-nav').mouseleave(function() {
    $('.divider-line').removeClass('hover-line');
});
if (window.innerWidth > 1000) {
    if (window.innerWidth > 1600) {
        $('.hover_img_portf').mouseenter(function() {
            $(this).find('.block_hover').animate({ 'left': '0%' }, 400);
            $(this).find('.portf_img').css("filter", "brightness(90%)");
            $(this).parent().find('.portf_1').animate({ 'left': '-903px' }, 400);
            $(this).parent().find('.portf_2').animate({ 'left': '-903px' }, 400);
            $(this).parent().find('.portf_txt1').animate({ 'left': '-903px' }, 400);
            $(this).parent().find('.portf_info').animate({ 'left': '-903px' }, 400);
        });
        $('.hover_img_portf').mouseleave(function() {
            $(this).find('.block_hover').animate({ 'left': '-100%' }, 400);
            $(this).find('.portf_img').css("filter", "brightness(100%)");
            $(this).parent().find('.portf_1').animate({ 'left': '100px' }, 400);
            $(this).parent().find('.portf_2').animate({ 'left': '100px' }, 400);
            $(this).parent().find('.portf_txt1').animate({ 'left': '100px' }, 400);
            $(this).parent().find('.portf_info').animate({ 'left': '100px' }, 400);
        });
    }
    if (window.innerWidth > 1000) {
        $('.hover_img_portf').mouseenter(function() {
            $(this).find('.block_hover').animate({ 'left': '0%' }, 400);
            $(this).find('.portf_img').css("filter", "brightness(90%)");
            $(this).parent().find('.portf_1').animate({ 'left': '-903px' }, 400);
            $(this).parent().find('.portf_2').animate({ 'left': '-903px' }, 400);
            $(this).parent().find('.portf_txt1').animate({ 'left': '-903px' }, 400);
            $(this).parent().find('.portf_info').animate({ 'left': '-903px' }, 400);
        });
        $('.hover_img_portf').mouseleave(function() {
            $(this).find('.block_hover').animate({ 'left': '-100%' }, 400);
            $(this).find('.portf_img').css("filter", "brightness(100%)");
            $(this).parent().find('.portf_1').animate({ 'left': '100px' }, 400);
            $(this).parent().find('.portf_2').animate({ 'left': '100px' }, 400);
            $(this).parent().find('.portf_txt1').animate({ 'left': '100px' }, 400);
            $(this).parent().find('.portf_info').animate({ 'left': '100px' }, 400);
        });
    }
}

$(document).ready(function() {
    $('.menu_burger').click(function() {
        $('.nav-menu_b').slideToggle('300');
    });
});
$('.block_name_f').mouseenter(function() {
    $(this).parent().find('.move_line').addClass('hover_line_content');
});
$('.block_name_f').mouseleave(function() {
    $(this).parent().find('.move_line').removeClass('hover_line_content');
});
$('.btn_portf').mouseenter(function() {
    $('.btn_line').addClass('hover_line_portfolio');
});
$('.btn_portf').mouseleave(function() {
    $('.btn_line').removeClass('hover_line_portfolio');
});

$('.custo_block').mouseenter(function() {
    $(this).find('.customers_img').css("filter", "grayscale(0%)");
});
$('.custo_block').mouseleave(function() {
    $(this).find('.customers_img').css("filter", "grayscale(100%)");
});

$('.block_rozrab').click(function() {
    $(this).find(".rozrab").toggleClass("plass");
    $(this).find('.rozrab_txt').slideToggle('300');
});

var flag = false;

function imgchange() {
    if (flag)
        document.all.myimg.src = "img/burg_1.png";
    else
        document.all.myimg.src = "img/burg_3.png";
    flag = !flag;
}


$(window).scroll(function() {
    var foot = document.querySelector('footer');
    var footX = foot.getBoundingClientRect();
    if ((footX.top - window.innerHeight) <= -100) {
        $("html").css('scrollbar-color', '#ffffff #2b2b2b');
        $('html').addClass('supermegachangecolor');
    } else {
        $("html").css('scrollbar-color', '#2b2b2b transparent ');
        $('html').removeClass('supermegachangecolor');
    }
})


let text1 = document.querySelector('.text1'),
    text1Top = text1.getBoundingClientRect().top;
window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > text1Top - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        text1.classList.add("text-animat-1");
        setTimeout(() => text1.classList.add("text-animat-2"), 500);
        setTimeout(() => text1.classList.add("text-animat-3"), 1000);
        setTimeout(() => text1.classList.add("text-animat-4"), 1800);
    }
});

let text2 = document.querySelector('.text2'),
    text2Top = text2.getBoundingClientRect().top;
window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > text2Top - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        text2.classList.add("text-animat-1");
        setTimeout(() => text2.classList.add("text-animat-2"), 500);
        setTimeout(() => text2.classList.add("text-animat-3"), 1000);
        setTimeout(() => text2.classList.add("text-animat-4"), 1800);


    }
});

let text3 = document.querySelector('.text3'),
    text3Top = text3.getBoundingClientRect().top;
window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > text3Top - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        text3.classList.add("text-animat-1");
        setTimeout(() => text3.classList.add("text-animat-2"), 500);
        setTimeout(() => text3.classList.add("text-animat-3"), 1000);
        setTimeout(() => text3.classList.add("text-animat-4"), 1800);


    }
});



let number1 = document.querySelector('.number1'),
    number1Top = number1.getBoundingClientRect().top,
    start1 = +number1.innerHTML,
    end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {

    if (window.pageYOffset > number1Top - window.innerHeight / 2) {

        this.removeEventListener('scroll', onScroll);
        let interval1 = setInterval(function () {
            number1.innerHTML = ++start1;
            if (start1 == end1) {
                clearInterval(interval1);
            }
        }, 200);
    }
});


let number2 = document.querySelector('.number2'),
    number2Top = number2.getBoundingClientRect().top,
    start2 = +number2.innerHTML,
    end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {

    if (window.pageYOffset > number2Top - window.innerHeight / 2) {

        this.removeEventListener('scroll', onScroll);
        let interval2 = setInterval(function () {
            number2.innerHTML = ++start2;
            if (start2 == end2) {
                clearInterval(interval2);
            }
        }, 60);
    }
});

let number3 = document.querySelector('.number3'),
    number3Top = number3.getBoundingClientRect().top,
    start3 = +number3.innerHTML,
    end3 = +number3.dataset.max;

window.addEventListener('scroll', function onScroll() {

    if (window.pageYOffset > number3Top - window.innerHeight / 2) {

        this.removeEventListener('scroll', onScroll);
        let interval3 = setInterval(function () {
            number3.innerHTML = ++start3;
            if (start3 == end3) {
                clearInterval(interval3);
            }
        }, 30);
    }
});

$(window).scroll(function () {
    var about_b = document.querySelector('.about_3');
    var about_3_bl = about_b.getBoundingClientRect();
    if (window.innerWidth > 750) {
        if (about_3_bl.top < 250) {
            $('.about_3_lin').addClass('hover_line_blk');
            setTimeout(function () {
                $('#one_stats').addClass('hover_line_content');;
            }, 500);
            setTimeout(function () {
                $('#two_stats').addClass('hover_line_content');;
            }, 1000);
            setTimeout(function () {
                $('#three_stats').addClass('hover_line_content');;
            }, 1500);
        }
    }
});


$(window).scroll(function() {
    var block_nam_1 = document.querySelector('#bl_nam_1');
    var block_nam_11 = block_nam_1.getBoundingClientRect();
    var block_nam_2 = document.querySelector('#bl_nam_2');
    var block_nam_22 = block_nam_2.getBoundingClientRect();
    if (window.innerWidth > 750) {
        if (block_nam_11.top < 200) {
            $('.info_line').addClass('hover_line_blk');
        }
        if (block_nam_22.top < 200) {
            $('.services_line').addClass('hover_line_blk');
        }
    }
    var block1 = document.querySelector('#block1');
    block1.getBoundingClientRect();
    var block2 = document.querySelector('#block2');
    block2.getBoundingClientRect();
    var block3 = document.querySelector('#block3');
    block3.getBoundingClientRect();
    var block4 = document.querySelector('#block4');
    block4.getBoundingClientRect();
    if (block1.getBoundingClientRect().top < 50) {
        $('.nam_line').hide();
        $('#nam_1').show()
    } else { $('.nam_line').hide(); }
    if (block2.getBoundingClientRect().top < 50) {
        $('.nam_line').hide();
        $('#nam_2').show()
    }
    if (block3.getBoundingClientRect().top < 50) {
        $('.nam_line').hide();
        $('#nam_3').show()
    }
    if (block4.getBoundingClientRect().top < 50) {
        $('.nam_line').hide();
        $('#nam_4').show()
    }
    var img = document.querySelector('.content_img');
    img.getBoundingClientRect();
});
$(function() {
    var waypoint = $(".content_gl").waypoint(function() {
        $("html,body").animate({
            scrollTop: $("#block1").offset().top
        }, 300);
        waypoint[0].enabled = false
    }, {
        offset: "0%"
    })
});
var ekran = window.innerHeight;
if (window.innerWidth > 1000) {
    $('.content_img').css("height", ekran - 120);
} else { $('.content_img').css("height", ekran - 70) }
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $(".carousel li.items").length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$("li.items").each(function(index) {
    items[index] = $(this).text();
});

$('.numer').click(function() {
    $('.nam_line').css("display", "none");
    $(this).find('.nam_line').slideToggle('300');
});
//swap images function
function swap(action) {
    var direction = action;
    //moving carousel backwards
    if (direction == "counter-clockwise") {
        var leftitem = $(".left-pos").attr("id") - 1;
        if (leftitem == 0) {
            leftitem = itemCount;
        }
        $(".right-pos").removeClass("right-pos").addClass("back-pos");
        $(".main-pos").removeClass("main-pos").addClass("right-pos");
        $(".left-pos").removeClass("left-pos").addClass("main-pos");
        $("#" + leftitem + "").removeClass("back-pos").addClass("left-pos");
        startItem--;
        if (startItem < 1) {
            startItem = itemCount;
        }
    }
    //moving carousel forward
    if (direction == "clockwise" || direction == "" || direction == null) {
        function pos(positionvalue) {
            if (positionvalue != "leftposition") {
                //increment image list id
                position++;
                //if final result is greater than image count, reset position.
                if (startItem + position > resetCount) {
                    position = 1 - startItem;
                }
            }
            //setting the left positioned item
            if (positionvalue == "leftposition") {
                //left positioned image should always be one left than main positioned image.
                position = startItem - 1;
                //reset last image in list to left position if first image is in main position
                if (position < 1) {
                    position = itemCount;
                }
            }
            return position;
        }
        $("#" + startItem + "").removeClass("main-pos").addClass("left-pos");
        $("#" + (startItem + pos()) + "").removeClass("right-pos").addClass("main-pos");
        $("#" + (startItem + pos()) + "").removeClass("back-pos").addClass("right-pos");
        $("#" + pos("leftposition") + "").removeClass("left-pos").addClass("back-pos");
        startItem++;
        position = 0;
        if (startItem > itemCount) {
            startItem = 1;
        }
    }
}