$(document).ready(function(){
	//get json content through ajax
	$.ajax({
	
		success: function(data){
			$("#accordion").empty();
			$.getJSON("json_files/beginner-tips.json", function(data){
				$.each(data, function(){
					$.each(this, function(key, val){
						$("#accordion").append(
							"<h3>" + val.title + "</h3>"+
							"<div><p>"+ val.description + "</p></div>"
						);
					});
				});
			});
		}
	});
	
	//accordion widget
	
	console.log("js loaded");
});