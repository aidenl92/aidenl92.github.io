$(document).ready(function(){
	
	var userAns= [];
	var ansList = [];
	incorrect = [];
	
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
							ansList.push(val.ans);
						});
					});
					
					for(var i=0; i < ansList.length; i++){
						if(userAns[i] != ansList[i]){
							score--;
							incorrect.push("q"+i);
							$("#q"+i).append("	<b>"+ansList[i]+"</b>")
						}
					}
				
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

