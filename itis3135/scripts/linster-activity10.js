$(document).ready(function() {

    var imgList = [
        'Activity10_images/h1.jpg','Activity10_images/h2.jpg','Activity10_images/h3.jpg',
        'Activity10_images/h4.jpg','Activity10_images/h5.jpg','Activity10_images/h6.jpg'
    ];

        // preload the image for each link


    var imgArray = new Array();
    for (var i =0; i < imgList.length; i++){
        imgArray.push($('<img>').attr('src',imgList[i]));
    }


    console.log($('#image_list').children(0).children().attr('title'));


    // set up the event handlers for each link

           $('#image_list').children().on("click",function(event){
               event.preventDefault();
               console.log($(this).children().attr("title"));
           });


    			// get the image URL and caption for each image and animate the caption
            var nextImg;
            var nextCaption = "";
            $('#image_list').children().on('click',function(){
               nextImg = imgArray[$(this).index()];
               nextCaption = $(this).children().attr('title');
               $('p').fadeOut(1500);
               $('#caption').fadeOut(1500,function(){
                   $('#caption').html(nextCaption).fadeIn(1500);
                   $('p').html(nextImg).fadeIn(1500);
               });

            });


            // cancel the default action of each link


    // move the focus to the first link
    $('#image_list').children(0).focus();

}); // end ready