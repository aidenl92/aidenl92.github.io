/*
	for the homepage, i wanted a 2x2 grid of images users can click on to go to the correlating paage.
	to make it more lively and more clear of which page the image leads to, I decided to have an animation
	involving the title of the page it leads to
*/

$(document).ready(function(){
	var imageList = [
		'images/overlay-discs.png','images/overlay-courses.png','images/overlay-tips.png','images/overlay-quiz.png'
	];
	
	/*
	for(var i =0; i <imageList.length; i++){
		$("#overlay-div").push($("<img>").attr("src",imageList[i]));
	}
	*/
	
	$(".box").hover(function(){
		console.log($(this).attr("title"));
		// on hover, create animation with css
		$(this).animate({
			opacity: "0.5"
			
		});
	},
	function(){
		$(this).animate({
			opacity: "1"
		});
	
	});
});