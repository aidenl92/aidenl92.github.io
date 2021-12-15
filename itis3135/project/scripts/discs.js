/*
	the idea is to allow users to view the description for flight rating
	while also viewing a disc's flight rating numbers.
	uses dialog widget and jquery color plugin
*/

$(document).ready(function(){
	var flightImg = 'images/flightRatings_edit.png';
	
	//the element with the image shouldnt be visible initially
	$("#discs-dialog").html("<img src="+flightImg+">").hide();
	
	$(".flight-rating").hover(function(){
		$(this).animate({
			backgroundColor: '#060641'
		}, 500);
	},
	function(){
		$(this).animate({
			backgroundColor: '#042c09'
		}, 300);
	});
	
	//set dialog box to appear when flight rating column is clicked
	$(".flight-rating").click(function(){
		console.log("show flight desc")
		$("#discs-dialog").dialog({
			modal:true,
			minWidth: 920,
			minHeight: 595,
			position:{
				my: "left",
				at: "right",
				of: this
			},
			buttons: [{
				text: "OK",
				click: function(){
					$(this).dialog("close");
				}
			}]
		});
		$(".ui-dialog-titlebar-close").css("display","none"); //hide the "close" button that appears on top left of dialog box
	});
	
	// close dialog box when the image is clicked
	$("#discs-dialog").click(function(){
		$(this).dialog("close");
	});
	
});
