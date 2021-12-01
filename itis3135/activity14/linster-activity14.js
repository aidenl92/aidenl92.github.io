$(document).ready(function() {

	var selectedSpeaker = "";
	var imgAlt = "img alt";

	$("#nav-list ul li a").click(function(){
		selectedSpeaker = this.attr(title);
		$.ajax({
			type: "get",
			url: "json_files/"+ selectedSpeaker + ".json",
			dataType: "json",
			success: function(data){
				$("#main").html('');
				$.getJSON(selectedSpeaker + ".json", function(data){
					$.each(data,function(){
						$.each(this, function(key, val){
							$("main").append(
								"<h1>" + val.title + "</h1>"+
								"<h2>" + val.month + "</h2>"+
								"<h3>" + val.name + "</h3>"+
								'<img src="'+ val.image +'" alt="'+ imgAlt+'">'+
								"<p>"+ val.text + "</p>"
							);
						});
					});
				});
			}
		});
	});
	
	
}); // end ready
 /*
function getSpeakerInfo(data,speaker,imgAlt){
	$("main").html("");
	$.getJSON(speaker +".json", function(data){
		$.each(data,function(){
			$.each(this,function(key,val){
				"<h1>" + val.title + "</h1>"+
				"<h2>" + val.month + "</h2>"+
				"<h3>" + val.name + "</h3>"+
				"<img src='"+ val.image +"' alt='"+ imgAlt+"'>"+
				"<p>"+ val.text + "</p>"
			});
		});
	});
*/