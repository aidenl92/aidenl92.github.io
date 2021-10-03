/* author: Aiden Linster */

var userNumber = "";
var shape = "";

function shapeToPage() //function to call multiple functions so it is slightly neater in the html
{
    getShape(userNumber);
    writeShapeToPage();
}


function getUserInput()
{
    let validFlag = false;
    // will continue to prompt for user input until the input is considered valid
    while(!validFlag)
    {
        userNumber = parseFloat(prompt("Hello! The Azure Lion would like you to pick a number from 1 to 10" +
            " (positive or negative)... "));
        validFlag = validateEntry(userNumber);
    }
     userNumber = roundToAbsInt(userNumber);
    // once input is valid, set the global variable to the rounded absolute value of the number the user input
    //alert("TEST! number is " + userNumber);
}

function roundToAbsInt(num)
{
    return Math.abs(num.toFixed(0)); // function to get absolute value and round the number for convenience
}

function validateEntry(num)
{
    if (isNaN(num)) //checks to see if the given parameter is a number before checking it with roundToAbsInt function
    {
        alert("Not a number!");
        return false;
    }
    else if (roundToAbsInt(num) < 1 || roundToAbsInt(num) > 10)
    {
        alert("Number outside of range.");
        return false;
    }
    else
    {
        return true;
    }

}

function getShape(sides) //takes given number of sides and returns the corresponding polygon name
{
    switch(sides)
    {
        case 1:
            shape = "henagon";
            break;
        case 2:
            shape = "digon";
            break;
        case 3:
            shape = "trigon";
            break;
        case 4:
            shape = "tetragon";
            break;
        case 5:
            shape = "pentagon";
            break;
        case 6:
            shape = "hexagon";
            break
        case 7:
            shape = "heptagon";
            break;
        case 8:
            shape = "octagon";
            break;
        case 9:
            shape = "enneagon";
            break;
        case 10:
            shape = "decagon";
            break;
        default:
            shape = null; // this should not happen
    }
    return shape;
}

function writeShapeToPage()
{
    document.writeln("<h2 class='body-text'>You have chosen <b class='pink'>" + shape + "</b> as your polygon!</h2>");
    document.write("<p class='body-text'>That's my favorite polygon.");
}