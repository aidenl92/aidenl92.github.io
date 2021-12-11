/*
	was going to use hover, decided to do onclick  with dialog box
*/

$(document).ready(function(){
	var flightImg = 'images/flightRatings_edit.png';
	
	$("#discs-dialog").html("<img src="+flightImg+">").hide();
	
	
	
	$(".flight-rating").click(function(){
		console.log("show flight desc")
		$("#discs-dialog").dialog({
			modal:true,
			dialogClass: "no-close",
			buttons: [{
				text: "OK",
				click: function(){
					$(this).dialog("close");
				}
			}]
		});
		$(".ui-dialog-titlebar-close").css("display","none");
	});
	
	
	$("#discs-dialog").click(function(){
		$(this).dialog("close");
	});
});
