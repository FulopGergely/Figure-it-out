var b1;
var y2;
var y1;
var b2;
var r1;
var x2;
var x1;
var r2;
var map = 1;
var obj1 = $(("#demoDrag"));
var obj2 = $(("#demoDrag2"));
var obj3 = $(("#demoDrag3"));
var obj4 = $(("#demoDrag4"));
var akadaly = $(("#akadaly"));
var akadaly2 = $(("#akadaly2"));

$(function () {
    console.log("elso map");
    $(("#demoDrag3")).hide();
    $(("#demoDrag4")).hide();
    $(("#akadaly")).hide();
    $(("#akadaly2")).hide();
    //elso();
    //animate();var p = $( "p" ).first();
    //asd =  $("demoDrag").position();

    //alert("Top position: " + x.top + " Left position: " + x.left);
    //var position = $("demoDrag").offset();


    //gameArea = $('<div></div>');
    //gameArea.appendTo('body');
    //gameArea.attr('id', 'gamearea');
    //console.log(collision(asd, asd2));


    //addShip();
    //$(window).on('keydown', moveShip);
});

$(document).ready(function() {
    var prevOffset, curOffset;
    $("#demoDrag").draggable({
        start: function(e, ui) {
            animate();
            //corners(obj1);
            ui.helper.addClass("dragging");
        },
        stop: function(e, ui) {
            animate();
            ui.helper.removeClass("dragging");
        }
    });
    $("#demoDrag3").draggable({
        start: function(e, ui) {
            animate();
            //corners(obj1);
            ui.helper.addClass("dragging");
        },
        stop: function(e, ui) {
            animate();
            ui.helper.removeClass("dragging");
        }
    });

    $("#akadaly").droppable({
        greedy: true,
        over: function(e,ui) {
            ui.helper.offset(curOffset= prevOffset).trigger("mouseup");
        },
        tolerance: "touch"
    }).draggable({
        drag: function(e,ui) {
            prevOffset= curOffset;
            curOffset= $.extend({},ui.offset);
            return true;
        }
    });
    $("#akadaly2").droppable({
        greedy: true,
        over: function(e,ui) {
            ui.helper.offset(curOffset= prevOffset).trigger("mouseup");
        },
        tolerance: "touch"
    }).draggable({
        drag: function(e,ui) {
            prevOffset= curOffset;
            curOffset= $.extend({},ui.offset);
            return true;
        }
    });
});


function animate() {
    requestAnimationFrame(animate);
    switch(map) {
        case 1:
            elso();
            break;
        case 2:
            masodik();
            break;
        case 3:
            harmadik();
            break;
        case 4:
            negyedik();
            break;
        case 5:
            otodik();
            break;
        default:
    }

}
function elso() {
    //var obj1 = $(("#demoDrag")).position();
    //var obj2 = $(("#demoDrag2")).position();
    obj1 = $(("#demoDrag"));
    obj2 = $(("#demoDrag2"));
    obj3 = $(("#demoDrag3"));
    obj4 = $(("#demoDrag4"));
    akadaly = $(("#akadaly"));
    //document.getElementById("demoDrag3").style.visibility = "hidden";
    szele(obj1,460, 460); //ez az objekt fog ütközni,  ->  x,y hol álljon meg majd az objektum
    if(collision(obj1,obj2)){
        //2 maphoz init
        console.log("második map");
        $("#gamearea").height(800);
        $("#gamearea").width(1000);
        obj2.css('margin-left','855px');
        obj2.css('margin-top','515px');
        map = 2;
    }

}
function masodik() {
    szele(obj1,860,660 , 0, 0);
    szele(obj3, 860,-140 , 0, -802);
    if(collision(obj1, obj3)){

    }
    //akadaly.css('margin-left','600px');
    //akadaly.css('margin-top','-650px');


    if(collision(obj1,obj2)){
        //3 maphoz init
        console.log("harmadik map");
        $("#gamearea").height(800);
        $("#gamearea").width(1000);
        obj2.css('margin-left','855px');
        obj2.css('margin-top','515px');
        obj4.css('margin-left','855px');
        obj4.css('margin-top','-942px');
        //.css('top', 800 + parseInt($("#gamearea").css("margin-top")));
        //obj2.css('left', 2000 + parseInt($("#gamearea").css("margin-left")));
        obj3.css('background-color', 'red' );
        $(("#demoDrag3")).height(140);
        $(("#demoDrag3")).width(140);
        obj3.css('position', 'relative');
        obj3.css('left', 0);
        obj3.css('top', -2000);
        map = 3;
    }

}
function harmadik() {

    szele(obj1,860,660 , 0, 0);
    $(("#demoDrag3")).show();
    $(("#demoDrag4")).show();
    szele(obj3, 860,-140 , 0, -802);
    if(collision(obj1, obj3)){
        var a = y1+140;
        if(a > y2){
            obj1.css('top', y1-100);
        }
    }


    if(collision(obj1, obj2) && collision(obj3, obj4)){
        console.log("negyedik nap");
        obj4.css('left', -858);
        obj4.css('top', 240);
        obj2.css('left', -858);
        obj2.css('top', -240);
        map = 4;
    }




    /*
    ez akell a két objekt üzköüzéwséhez, ez lent volt a collision allján
    var a = y1+140;
    console.log("y1 "+a )
    console.log("y2 "+y2 )
    if(y1 > y2){
        $div1.css('top', y1-100);
    }
    if(y1 < y2){
        $div1.css('top', y2-240);
    }
    */
}

function negyedik(){
    szele(obj1,860,660 , 0, 0);
    $(("#demoDrag3")).show();
    $(("#demoDrag4")).show();
    szele(obj3, 860,-140 , 0, -802);
    $(("#akadaly")).show();
    //collision(akadaly, obj3);
    if(collision(obj1, obj3)){
        var a = y1+140;
        if(a > y2){
            obj1.css('top', y1-100);
        }
    }
    if(collision(obj3, obj4)){
        if(collision(obj1, obj2)){
            console.log("otodik map");
            map = 5;
        }
    }

}
function otodik(){
    $(("#akadaly2")).show();
    szele(obj1,860,660 , 0, 0);
    szele(obj3, 860,-140 , 0, -802);
    obj2.css('margin-left','50px');
    obj4.css('left','0px');
    if(collision(obj1, obj3)){
        var a = y1+140;
        if(a > y2){
            obj1.css('top', y1-100);
        }
    }
    if(collision(obj3, obj4) && collision(obj1, obj2)){
        console.log("win");
        $(("#demoDrag")).hide();
        $(("#demoDrag1")).hide();
        $(("#demoDrag2")).hide();
        $(("#demoDrag3")).hide();
        $(("#demoDrag4")).hide();
        $(("#akadaly")).hide();
        $(("#akadaly2")).hide();
        console.log("win");
        map = 0;
    }



}

function szele($obj,x,y,z,h){
    if($obj.offset().top < parseInt($("#gamearea").css("margin-top"))){
        $obj.css('top', h);
    }
    if($obj.offset().left < parseInt($("#gamearea").css("margin-left"))){
        $obj.css('left', z);
    }
    if($obj.offset().top > parseInt($("#gamearea").css("margin-top")) + parseInt($("#gamearea").css("height"))-parseInt($("#demoDrag").css("height"))){
        $obj.css('top', y);
    }
    if($obj.offset().left > parseInt($("#gamearea").css("margin-left")) + parseInt($("#gamearea").css("width"))-parseInt($("#demoDrag").css("width"))){
        $obj.css('left', x);
    }
    //console.log(parseInt($("#gamearea").css("margin-left")));

}



function collision($div1, $div2) {



    x1 = $div1.offset().left;
    y1 = $div1.offset().top; // x,y bal felső sarok
    h1 = $div1.outerHeight(true);
    w1 = $div1.outerWidth(true);
    b1 = y1 + h1;
    r1 = x1 + w1; // b1,r1 jobb alsó sarok
    x2 = $div2.offset().left;
    y2 = $div2.offset().top;
    h2 = $div2.outerHeight(true);
    w2 = $div2.outerWidth(true);
    b2 = y2 + h2;
    r2 = x2 + w2;





    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
        //nem érnek össze
        return false;
    }


    //összeérnek
/*
    console.log("x1: ");
    console.log(x1);
    console.log("y1: ");
    console.log(y1);
    console.log("b1: ");
    console.log(b1);
    console.log("r1: ");
    console.log(r1);
*/






        //$div1.css('top', y1-100);


    //console.log(parseInt($("#gamearea").css("margin-left")));
    //console.log(parseInt($("#gamearea").css("margin-top")));



    return true;
}

/*
function corners($div1){
    x1 = $div1.offset().left - (parseInt($("#gamearea").css("margin-left")));
    y1 = $div1.offset().top - (parseInt($("#gamearea").css("margin-top"))); // x,y bal felső sarok
    b1 = y1 + h1- (parseInt($("#gamearea").css("margin-left")));
    r1 = x1 + w1- (parseInt($("#gamearea").css("margin-top"))); // b1,r1 jobb alsó sarok
    //parseInt($("#gamearea").css("margin-left"))
    // $obj1.css('left', 0);

    console.log("( "+ x1 + " , " + y1 + ")");
    console.log("( "+ b1 + " , " + r1 + ")");
}
*/



