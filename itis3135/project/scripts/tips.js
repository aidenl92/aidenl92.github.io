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
		
			
			//accordion widget
			/*
			$("#accordion").accordion({
					icons: {
							  "header": "ui-icon-triangle-1-e",
							  "activeHeader": "ui-icon-triangle-1-s"
							},
					collapsible: true
			});
					
			$("#accordion").css({
				"marginRight": "900px"
			});
			*/
		}
		//timeout: 3000
	});

	
});