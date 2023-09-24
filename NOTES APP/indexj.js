
//returns the first element that matches the specified selectors
const notescontainer = document.querySelector(".notes-boxes");      
const createbutton = document.querySelector(".btn");
let notesbox = document.querySelectorAll(".inputs");        //to select all the notes


//function to get existing content from localStorage of browser
function getStorage()
{
    if(localStorage.getItem("notes"))
    {
        notescontainer.innerHTML = localStorage.getItem("notes");
    }
}
getStorage();


function updateStorage()
{
    localStorage.setItem("notes",notescontainer.innerHTML);
}


//addEventListener() method attaches an event handler to a document.
//it runs a function when an event is triggered, it passes the event object as parameter to the function
createbutton.addEventListener("click", function()
{
    let btn = document.createElement("img");    //creating delete button(icon) for notes container
    btn.src = "delete-img.png";

    let inputbox = document.createElement("p");     //we create p tag in html
    inputbox.className = "inputs";
    inputbox.setAttribute("contenteditable", "true");

    // inputbox.appendChild(btn);  //add button to the notes container
    inputbox.appendChild(btn);
    notescontainer.appendChild(inputbox);     //now add the entire notes boxes to main container

})

//function to execute delete operation of a notes box
notescontainer.addEventListener("click",function(e)
{   
    //if clicked target is an "img" we delete it
    if(e.target.tagName === "IMG")
    {   
        //we remove the targets parent which will basically be the current notes box
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P")
    {   
        notesbox = document.querySelectorAll(".inputs");
        //we iterate the notesbox and whenevr a key is pressed, we update it to localStorage ( realtime )
        //for each will not empty objects/items - so thereby empty inputbox wil not be stored in localStorage
        notesbox.forEach(it => 
            {   
                //it is the iterator
                it.onkeyup = function()
                {
                    updateStorage();
                }
            })
    }
})

//this method is written to prevent the functionality of "Enter" keyword
//if this is eliminated and 
document.addEventListener("keydown",event => 
{
    if(event.key === "Enter")
    {   
        //we add a default line break
        document.execCommand("insertLineBreak");
        //preventdefault prevents from the event from happening, cancels the event, i.e. cancels Enter keys default work
        //this will prevent default feature of Enter KEY
        event.preventDefault();
    }
})