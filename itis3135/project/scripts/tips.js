$(document).ready(function(){
	
	//get json content through ajax
	$.ajax({
		type:"get",
		url: "json_files/beginner-tips.json",
		dataType:"json",
		success: function(data){
			$("#accordion").empty();
			$.getJSON("json_files/beginner-tips.json", function(data){
				$.each(data,function(data){
					$.each(this, function(key, val){
						$("#accordion").append(
							"<h3>" + val.title+ "</h3>"+
								"<div><p>"+ val.description + "</p></div>"
						);
					});
				});
			});	
			//accordion widget
			$("#accordion").accordion({
				icons: {
				  "header": "ui-icon-triangle-1-e",
				  "activeHeader": "ui-icon-triangle-1-s"
				},
				collapsible: true
			}).css({
				"marginRight": "900px"
			});
			
		},
		error: function(data){
			console.log(JSON.stringify(data)); //this is here so i can see the ajax error
		}
	});


});