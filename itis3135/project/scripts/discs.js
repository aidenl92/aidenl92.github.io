/*
	TODO: make button elements for disc types: driver, midrange, putt/approach. the users can click on the button to filter
	disc types. probably use jquery .hide() and .show() methods 
	
	also flight stat description onhover
*/
	
$(document).ready(function(){
	$(".flight-rating").hover(function(){
		console.log("show flight desc")
		//preload img of desc and display it in a secondary table column??
	},
	function(){
		console.log("hide flight desc.")
	});
	
});
