$(document).ready(function(){


$("#btn-tips").click(function(){
	//get json content through ajax
	$.ajax({
		type: "get",
		url: "json_files/beginner-tips.json",
		dataType:"json",
		success: function(data){
			$("#accordion").empty();
			$.getJSON("json_files/beginner-tips.json", function(data){
				for( vari=0; i < data.length; i++){
					$("#accordion").append(
							"<h3>" + data[i].title+ "</h3>"+
							"<div><p>"+ data[i].description + "</p></div>"
						);
				}
						
					
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
		},
		error: function(data){
			console.log(JSON.stringify(data));
		}
	});

});
});