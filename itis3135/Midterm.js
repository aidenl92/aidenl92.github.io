var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    $('update-button').addEventListener("click",function(){
        updateCalorie();
    });

    $('avg-calorie').addEventListener("click",function(){
        showAverageCalories();
    });
    $('show_max').addEventListener("mouseover",function(){
        showMax();
    });


    
};

function updateCalorie(){
    console.log("updatecal");
    var checkedDay = getDayIndex();
    var calIntake = parseInt($('calorie-intake').value);
    console.log(calIntake);
    console.log(checkedDay);
    if(checkedDay != -1){
        if(calIntake < 0 || isNaN(calIntake)){
            alert("Invalid calorie intake input");
        }
        else{
            calories[checkedDay] = calIntake;
            alert("your updated calories are:\n" + calories);
        }
    }
    console.log(calories);
}

function showAverageCalories(){
    console.log('showavgcal');
    var sum=0;
    for(var i=0; i < calories.length;i++){
        sum += calories[i];
    }
    var avgCal= parseInt(sum / calories.length);
    $('calorie-average').value = avgCal;

}

function showMax(){
    console.log('showmax');
    var maxCal = 0;
    var maxCalIndex = 0;
    for(var i=0; i< calories.length; i++){
        if(calories[i] > maxCal){
            maxCalIndex = i;
            maxCal = calories[i];
        }
    }
    $('showMax').innerHTML = "Your maximum consumed calories are " + maxCal + " on " + days[maxCalIndex];
}

function getDayIndex(){
    for(var i=0; i< days.length; i++){
        if($(days[i]).checked == true){
            return i;
        }
    }
    return -1;
}