
$(document).ready(function() {
	
	
	var selectedSpeaker = "";
	var imgAlt = "img alt";

	$("#nav_list ul li a").click(function(){
		console.log("clicked");
		selectedSpeaker = $(this).attr("title");
		$.ajax({
			type: "get",
			url: "json_files/"+ selectedSpeaker + ".json",
			dataType: "json",
			success: function(data){
				$("main").empty();
				$.getJSON("json_files/"+ selectedSpeaker + ".json", function(data){
					$.each(data,function(){
						$.each(this, function(key, val){
							$("main").append(
								"<h1>" + val.title + "</h1>"+
								"<h2>" + val.month + "</h2>"+
								"<h3>" + val.speaker + "</h3>"+
								'<img src="'+ val.image +'" alt="'+ imgAlt+'">'+
								"<p>"+ val.text + "</p>"
							);
						});
					});
				});
			}
		}); //end ajax
	}); //end click
	
	console.log("js loaded");
}); // end ready
