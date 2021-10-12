window.onload = function()
{
    let h2 = document.getElementsByTagName('h2');
    h2[0].innerHTML = 'Arrays Activity';
    focusNameField();
}

var testVal = 'nothing';
var people = [];
var salaries = [];

var $ = function (elemId)
{
    return document.getElementById(elemId);
};



function addSalary()
{
    let selectedEmployee = $('employee-dropdown');
    let salaryEntry = $('salary-entry');

    //console.log(people.toString());
    if(isValidEntry(selectedEmployee.value, salaryEntry.value))
    {
        people.push(selectedEmployee.value);
        selectedEmployee.remove(selectedEmployee.selectedIndex);
        salaries.push(salaryEntry.value);
    }
    else
    {
        displayAddError(selectedEmployee.value, salaryEntry.value);
    }
    
    salaryEntry.value = '';
    focusNameField();

    console.log(people +'||'+ salaries);

}

function isValidEntry(employee, sal)
{
    return((employee != '') && (sal > 0));
}

function displayResults()
{
    let avgSalaries = $('salary-average');
    let highestSalary = $('salary-highest');
    let sum = 0;
    let highest = 0;

    for(var i = 0; i < salaries.length; i++)
    {
        if(salaries[i] > highest)
        {
            highest = parseFloat(salaries[i]);
        }
        sum += parseFloat(salaries[i]);
    }

    let averageSal = sum/salaries.length;
    console.log('sum: '+sum);
    console.log('average: '+averageSal);

    highestSalary.innerHTML = "Highest Salary: " + highest;
    avgSalaries.innerHTML = "Average Salary: " + averageSal.toFixed(2);

}

function displaySalary()
{

    let salaryTable = $('salary-table');
    for(var j = 0; j < salaryTable.rows.length; j++)
    {
        salaryTable.deleteRow(j);
    }
    salaryTable.deleteTHead(0);
    let tHead = salaryTable.createTHead();
    let headRow = tHead.insertRow(0);
    headRow.insertCell(0).innerHTML = '<b class="yellow">Name</b>';
    headRow.insertCell(1).innerHTML = '<b class="yellow">Salary (in thousands)</b>';

    for(var i = 0; i < people.length; i++)
    {
        let tableRow = salaryTable.insertRow(i + 1);
        tableRow.insertCell(0).innerHTML = people[i];
        tableRow.insertCell(1).innerHTML = '$'+salaries[i];
    }

}

function testFunction()
{
    alert(people.toString());
}

function focusNameField()
{
    $('employee-dropdown').focus();
}

function displayAddError(name, salary)
{
    if(name =='')
    {
        alert("No employee selected!");
    }
    else
    {
        alert("Invalid entry for salary");
    }
}