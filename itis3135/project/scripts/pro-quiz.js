$(document).ready(function(){
	
	var userAns= [];
	var ansList = [];
	 $("#quiz-score").hide();
	 $("#correct-ans").hide();
	 $("#ans-header").hide();
	
	$("form").submit(function(e){
		e.preventDefault();
		var isValid = false; 
		var q4Ans = $("#q4-box").val().trim();
		q4Ans = q4Ans.toLowerCase();
		console.log(q4Ans);
		console.log($("input[name='q1']:checked").val());
		
		var isValid = checkAtoZ(q4Ans);
		
		if(!isValid){
			e.preventDefault();
			alert("please enter valid input (A to Z)");
		}
		else{
			//alert("ok!");
			$("#submit-quiz").attr("disabled","disabled");
			for(var i=1; i < 4; i++){
				userAns.push($("input[name='q"+i+"']:checked").val());
			}
			userAns.push(q4Ans);
			//ajax
			$.ajax({
				type:"get",
				url:"json_files/answer_key.json",
				dataType: "json",
				success: function(data){
					var score = 0;
					$.getJSON("json_files/answer_key.json",function(data){
						$.each(data,function(data){
							$.each(this, function(key,val){
								ansList.push(val.ans);
								$("#correct-ans").append(
									"<h3>"+val.ans+"</h3>"
								);
							});
						});
					});
					console.log(ansList);
					console.log(userAns);
					console.log(ansList[2]);
					$("#correct-ans").show();
					$("#ans-header").show();
					for(var i=0; i < userAns.length; i++){
						$("#user-ans").append("<h3>"+userAns[i]+"</h3>");
						if($("#user-ans").children().eq(i).html() == $("#correct-ans").children().eq(i).html()){
							score++;
						}
						
					}
				
					$("#quiz-score").html("Your score: "+score+" out of 4").show();
				},
				error: function(data){
					console.log(JSON.stringify(data)); //this is here so i can see the ajax error
				}
			});
		}
		
	});
	
});

function checkAtoZ(str){
	var validCount = 0;
	alphabet = "abcdefghijklmnopqrstuvwxyz";
	for(var i=0; i< str.length; i++){
		for(var j=0; j < alphabet.length; j++){
			if(str[i] === alphabet[j]){
				validCount++;
				break;
			}
		}
		
	}
	
	return (validCount === str.length);
}

