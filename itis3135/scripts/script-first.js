
var companyName = "Azure Lion Products";
var userName = "";
var userResponse = "";

function testFunction()
{
    alert("test function works");
}

function introFunction()
{
    userName = prompt("Hello there! What is your name?");
    userResponse = prompt("How are you doing?");

    let today = new Date();
    let time = today.getHours() + " : " + today.getMinutes();

    document.write("<h3 class='head-floatr'> Today is ");
    document.write(today.toDateString());
    document.write(", and the time is " + time);
    document.write("<br>");
    document.write("The " + companyName + " welcomes you, "+ userName +"! ");
    document.write("We are glad you are doing " + userResponse +"!");
    document.write("</h3>");
    
}