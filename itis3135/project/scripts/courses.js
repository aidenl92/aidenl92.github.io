
$(document).ready(function(){
	//preload images
	var imageList = [
		'images/hornets1.jpg','images/hornets2.jpg','images/hornets3.jpg',
		'images/renske1.jpg','images/renske2.jpg','images/renske3.jpg',
		'images/ren-silver1.jpg','images/ren-silver2.jpg','images/ren-silver3.jpg',
		
	];
	
	var imgArr = new Array();
	for (var i=0; i < imageList.length; i++){
		imgArr.push($('<img/>').attr('src',imageList[i]));
	}
	
	$("#thumbs").css("display","none");
	for (var i=0; i< imgArr.length; i++){
		$("#thumbs").append(imgArr[i].css({"width":"200px" , "height":"auto"}).attr("alt","image"+i));
	}
	

	//initialize venobox Plugin
	
	
	var j=0;
	for(j; j< 3;j++){
		console.log($("#thumbs").children().eq(j).prop('outerHTML'));
		$("#hornets-gal").append(
			'<a class="venobox"  data-gall="hornets-gallery" href='+imageList[j]+'> '
			+$("#thumbs").children().eq(j).prop('outerHTML')+'</a>'
		);
	}
	
	for(j; j< 6;j++){
		console.log($("#thumbs").children().eq(j).prop('outerHTML'));
		$("#renske-gal").append(
			'<a class="venobox"  data-gall="renske-gallery" href='+imageList[j]+'> '
			+$("#thumbs").children().eq(j).prop('outerHTML')+'</a>'
		);
	}
	
	for(j; j< 9;j++){
		console.log($("#thumbs").children().eq(j).prop('outerHTML'));
		$("#silver-gal").append(
			'<a class="venobox"  data-gall="silver-gallery" href='+imageList[j]+'> '
			+$("#thumbs").children().eq(j).prop('outerHTML')+'</a>'
		);
	}
	
	$(".venobox").css("text-decoration","none");
	
	$(".venobox").venobox({
		infinigall: true
	}); 
});