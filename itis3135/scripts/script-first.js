
var companyName = "Azure Lion Products";
var userName = "";
var userResponse = "";
var coinCount = 0;
var userEmail = undefined;
const coinPrice = 150;

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
    document.write(companyName + " welcomes you, "+ userName +"! ");
    document.write("We are glad you are doing " + userResponse +"!");
    document.write("</h3>");
    
}

function sayHi()
{
    alert("Thanks for saying hi to me, " + userName +"!");
}

function buyCoin()
{
    var coinsPurchased = parseInt(prompt("How many LionCoins would you like to purchase today?"));
    alert("Thank you for purchasing " + coinsPurchased + " LionCoins! Your total is $"+ coinsPurchased * coinPrice);
    coinCount += coinsPurchased;
}

function tradeCoin()
{
    if(coinCount <= 0)
    {
        return "You have no coins to trade!";
    }
    coinCount--;
    return "Thanks for trading! \nYou now have " + coinCount + " coins!";
}

function calcCoinValue()
{
    let coinVal= coinCount * coinPrice;
    let itemList = [
        ['fast food meals',5],
        ['months worth of rent',1471],
        ['college textbooks',100],
        ['pints of beer',4]
    ];
    let randomNum = Math.floor(Math.random()*4);
    let itemsWorth = Math.floor(coinVal / itemList[randomNum][1]);
    alert("You have $" + coinVal + " worth of LionCoin." +
        "\n That's also " + itemsWorth +" " +itemList[randomNum][0]+"!");
}

function mailingList()
{
    (userEmail == undefined) ? obtainEmail() : alert("We already have your email!");
}

function obtainEmail()
{
    if(window.confirm("Would you like to be on our mailing list?"))
    {
        userEmail = prompt("Please enter your email address...");
        alert("Thanks!");
    }

}
