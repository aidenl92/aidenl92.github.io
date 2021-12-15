$(document).ready(function(){
	
	var accData= '';
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
						accData +=
							"<h3>" + val.title+ "</h3>"+
								"<div><p>"+ val.description + "</p></div>"
						;
					});
				});
			});	
			
		},
		error: function(data){
			console.log(JSON.stringify(data)); //this is here so i can see the ajax error
		},
		complete: function(){
			$("#accordion").append(accData);
			// initialize accordion 
			$("#accordion").accordion({
				icons: {
				  "header": "ui-icon-triangle-1-e",
				  "activeHeader": "ui-icon-triangle-1-s"
				},
				collapsible: true,
				heightStyle:"content",
				active: false
			}).css({
				"marginRight": "900px"
			});
			$("#accordion").accordion("refresh");
		}
	});

});
