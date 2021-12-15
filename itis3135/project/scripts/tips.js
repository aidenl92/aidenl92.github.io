$(document).ready(function(){

	//get json content through ajax
	$.ajax({
		type: "get",
		url: "json_files/beginner-tips.json",
		dataType:"json",
		data:"[]"
		success: function(data){
			$("#accordion").empty();
			var tipsString = "";
			$.getJSON("json_files/beginner-tips.json", function(data){
				for(var i=0; i< data.length; i++){
					$.each(data[i],function(key,val){
						tipsString+=
								"<h3>" + val.title+ "</h3>"+
								"<div><p>"+ val.description + "</p></div>"
						;
					});
				}
			});
			$("#accordion").append(tipsString);
		
			
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
		},
		error: function(data){
			console.log(JSON.stringify(data)); //this is here so i can see the ajax error
		}
	});


});