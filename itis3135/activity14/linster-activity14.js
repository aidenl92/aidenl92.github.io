$(document).ready(function() {

	$('#toobin').click(function(){
        $.ajax({
            type: "get",
            url"json_files/toobin.json",
            success: function(data){
				$.getJSON('toobin.json', function(data){
					$.each(data,function(){
						$.each(this, function(key, val){
							$("main").html(
								
							);
						});
					});
				});
        }); //end toobin ajax
    }); //end toobin click

    $('#sorkin').click(function(){

    }); //end sorkin click

    $('#chua').click(function(){

    }); //end chua click

    $('#sampson').click(function(){

    }); //end sampson click
}); // end ready