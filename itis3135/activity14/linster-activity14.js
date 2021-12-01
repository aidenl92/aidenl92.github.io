$(document).ready(function() {

	var selectedSpeaker = "";
	var imgAlt = "";

	$('#toobin').click(function(){
		selectedSpeaker = "toobin";
		imgAlt = "toobin_court";
        $.ajax({
            type: "get",
            url: "json_files/toobin.json",
			dataType:"json",
            success: function(data){
				$('main').html('');
				$.getJSON('toobin.json', function(data){
					$.each(data,function(){
						$.each(this, function(key, val){
							$('main').html(
								"<h1>" + val.title + "</h1>"+
								"<h2>" + val.month + "</h2>"+
								"<h3>" + val.name + "</h3>"+
								'<img src="'+ val.image +'" alt="'+ imgAlt+'">'+
								"<p>"+ val.text + "</p>"
							);
						});
					});
				} //end success function
        }); //end toobin ajax
    }); //end toobin click

    $('#sorkin').click(function(){
		selectedSpeaker = "sorkin";
		imgAlt = "sorkin_desk";
		$.ajax({
			type: "get",
			url: "json_files/sorkin.json",
			dataType: "json",
			success: function(data){
				getSpeakerInfo(data,selectedSpeaker,imgAlt);
			}
		});
	
    }); //end sorkin click

    $('#chua').click(function(){

    }); //end chua click

    $('#sampson').click(function(){

    }); //end sampson click
}); // end ready

function getSpeakerInfo(data,speaker,imgAlt){
	$("main").html("");
	$.getJSON(speaker +".json"), function(data){
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
}