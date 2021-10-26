var currImg = 0;

$(function(){
    var imgList = [
        'images/ss1.webp','images/ss2.jpg','images/ss3.jpg',
        'images/ss4.jpg','images/ss5.jpg','images/ss6.jpg'
    ];


    var $imgArray = new Array();
    for(var i=0; i < imgList.length; i++){
        $imgArray.push($('<img>').attr('src', imgList[i]));
    }

    $('#img-container').append('<ul>');
    
    for (var i = 0; i < $imgArray.length ; i++){
        var $li = $('<li id=slideImg'+i+'>').append($imgArray[i]).css('display','none');
        $('#img-container ul').append($li);
    }

    displaySlide(currImg);

    $('#prev').click(function(){
        if(currImg == 0){
            currImg = imgList.length-1;
        }
        else{
            currImg--;
        }
        displaySlide(currImg);
        console.log(currImg);
    });

    $('#next').click(function(){
        if( currImg == imgList.length-1){
            currImg=0;
        }
        else{
            currImg++;
        }
        displaySlide(currImg);
    });
    
    $('.index-button').click(function(){
        currImg = parseInt($(this).text()) - 1;
        console.log(currImg);
        displaySlide(currImg);
    });

});

function displaySlide(slideIndex){
    $('#img-container ul li').css('display','none');
    $('#slideImg'+slideIndex).css('display','block');
    currImg = slideIndex;
}

