let s;
let feeds = [];

function create()
{
s = document.getElementById('feedback').value;
feeds.push(s);
}

function view()
{

for(let i=0;i<feeds.length;i++)
{
document.getElementById('output').innerHTML += "Feedback " + i + " " + feeds[i] + "<br>";
}
feeds = [];
}

