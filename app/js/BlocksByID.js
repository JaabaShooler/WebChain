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