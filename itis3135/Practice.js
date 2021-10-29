var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	var order = [];
	var total = 0;

	//add onclick event handler for each image
	$('espresso-fig').onclick= function(){
		$('order').innerHTML += "$1.95 - Espresso - Delicious espresso. Wanna try it?<br>";
		order.push(1.95);
	}
	$('cappuccino-fig').onclick= function(){
		$('order').innerHTML += "$3.45 - Cappuccino - Delicious Cappuccino!<br>";
		order.push(3.45);
	}

	// for click event add item to order and update total
	$('place_order').onclick= function(){
		for(var i = 0; i < order.length; i++){
			total += order[i];
		}
		$('total').innerHTML = 'total: $'+total.toFixed(2);
	}

	$('clear_order').onclick=function(){
		$('order').innerHTML = "";
		order=[];
	}

	

	// display order and total

	
		
}; // end onload