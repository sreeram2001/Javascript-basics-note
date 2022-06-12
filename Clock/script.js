function showtime()
{
    var date = new Date();
    var d = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h==0)
    {
        h = 12;
    }

    if(h>12)
    {
        h = h - 12;
        session  = "PM";
    }

    if(h<10)
    {
        h = "0" + h;
    }

    if(m<10)
    {
        m = "0" + m;
    }

    if(s<10)
    {
        s = "0" + s;
    }

    var display = d + '.' + (month+1) + "." + year + "\n";
    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById('Myclock').innerText = display;
    document.getElementById('Myclock').textContent = display;

    document.getElementById('Mydate').innerText = time;
    document.getElementById('Mydate').textContent = time;

  
    setTimeout(showtime,1000)

}

showtime();