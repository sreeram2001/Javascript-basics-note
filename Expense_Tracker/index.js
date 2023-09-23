// initial array, we get it from localStorage of Browser
const expenses = []
expenses = (JSON.parse(localStorage.getItem('expenses')))
get();

//function to add an expense
function add()
{
    var expense = document.getElementById('expense').value
    var amount = document.getElementById('amount').value
    var date = document.getElementById('date').value

    if(expense == null || amount == null || date == null)
    {
        alert("Please Fill all the data Correctly")
    }
    else
    {
        //tag is used as index, so as to make our job of deleting an item easier by getting the index
        const expenseObj = {
            expense : expense,
            amount : amount,
            date : date,
            tag: (expenses.length > 0 ? (expenses[expenses.length - 1].tag + 1) : 1)
        }

        //we push each entry as an object inside expenses array which stores all our entries
        expenses.push(expenseObj)

        //adding it to Local Storage
        localStorage.setItem('expenses',JSON.stringify(expenses));

        console.log(expense, amount, date)

        get();  //FUNCTION CALL TO SHOW/DISPLAY THE EXPENSES
        

        // var expense_col = document.getElementById('expense_col')
        // var tr = document.createElement("tr")
        // tr.innerHTML = expense
        // expense_col.appendChild(tr)
        // var table = document.getElementById('table');

        // var row = table.insertRow();
        // row.insertCell(0).innerHTML = expense;
        // row.insertCell(1).innerHTML = amount;
        // row.insertCell(2).innerHTML = date;
        // row.insertCell(3).innerHTML = "<button id='deleteItem'>DELETE</button>";

            //     var del = document.getElementById('deleteItem')
    //     for(let i=0;i<del.length;i++)
    //     {
    //         if(del[i].onclick())
    //         {
    //             console.log("clicked")
    //         }
    //     }
    // }

}}


//function to display the Expenses
function get(){

    var expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    //now we will iterate through the expenses array
    //to display each expense item one by one
    for(let i=0;i<expenses.length;i++)
    {
        //we use ES6 formats for our ease
        expenseTable.innerHTML += `
        <tr>
        <td>${expenses[i].expense}</td>
        <td>${expenses[i].amount}</td>
        <td>${expenses[i].date}</td>
        <td> <button id="deleteIt" onclick = "deleteIt(${expenses[i].tag})">DELETE</button> </td>
        </tr>`;
    }

    //loop thru each items expense and sum it up
    //sum the expenses and place it in table 2
    var sumExp = 0;
    for(let i=0;i<expenses.length;i++)
    {
        sumExp  += Number(expenses[i].amount);
    }
    
    var table2 = document.getElementById('sumi');
    table2.innerHTML = sumExp;
}

//function to delete the Expenses when delete button is clicked
function deleteIt(tag)
{

    for(let i=0;i<expenses.length;i++)
    {
        if(expenses[i].tag == tag)
        {
            //delete the entry(expenseObj) entire row content from array
            expenses.splice(i,1);
        }
    }

    //update in localStorage
    localStorage.setItem('expenses',JSON.stringify(expenses))
    get();
}

get();