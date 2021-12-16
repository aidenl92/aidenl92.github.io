$(document).ready(function(){
	
	var userAns= [];
	var ansList = [];
	 $("#quiz-score").hide();
	 $("#correct-ans").hide();
	
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
			for(var i=0; i < 3; i++){
				userAns.push($("input[name='q"+i+"']:checked").val());
			}
			userAns.push(q4Ans);
			//ajax
			$.ajax({
				type:"get",
				url:"json_files/answer_key.json",
				dataType: "json",
				success: function(data){
					var score = 4;
					$.getJSON("json_files/answer_key.json",function(data){
						$.each(data, function(key,val){
							ansList.push(JSON.stringify(val.ans));
							$("#correct-ans").append(
								"\n<h3>"+val.ans+"</h3"
							);
						});
					});
					$("#correct-ans").show();
					$("#q"+i).append("	<b>"+ansList[i]+"</b>").css("color","color:#FFC300");
					for(var i=0; i < ansList.length; i++){
						if(JSON.Stringify(userAns[i]) != JSON.Stringify(ansList[i])){
							score--;
						}
					}
					$("#quiz-scord").html("Your score: "+score+" out of 4").show();
				
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
			if(str[i] == alphabet[j]){
				validCount++;
				break;
			}
		}
		
	}
	
	return (validCount == str.length);
}

