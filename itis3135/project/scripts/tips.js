$(document).ready(function(){
	
	//get json content through ajax
	$.ajax({
		type: "get",
		url:"json_files/tips.json",
		dataType:"json",
		success: function(data){
			$("#accordion").empty();
			$.getJSON("json_files/tips.json", function(data){
				$.each(data,function(){
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
});