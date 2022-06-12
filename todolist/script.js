
//create a function to add or delete tasks

//when add button is click
document.querySelector('#add').onclick = function()
{

//when the text is none or empty, alert the user to re-enter a value
if(document.querySelector('#newtask input').value.length == 0)
{
    alert("Enter a Task ! ")
}

else{

    document.querySelector('#tasks').innerHTML += `
    <div class="task">
        
        ${document.querySelector('#newtask input').value}
        <button class="delete"><span>&#10060;</span></button>
    </div> `;


    //delete multiple elements
    let tasks = document.querySelectorAll('.delete');
    for(let i=0;i<tasks.length;i++)
    {
        tasks[i].onclick = function()
        {
            this.parentNode.remove();
        }
    }
}
}