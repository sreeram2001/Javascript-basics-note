
/userinputs function used to get input from html side/

var p,r,t,emi;  /global variables/

function userinputs()
{
    p = document.getElementById("amount").value;            /principal/
    r = document.getElementById("interest").value;          /interest rate/
    t = document.getElementById("tenure").value;            /tenure in months/

    emicalculate();

}

function emicalculate()
{
    r = (r/100)/12;
    emi = (p*r)*(((1+r)**t)/(((1+r)**t)-1));
    document.getElementById("emi").innerHTML = "EMI : "+ emi.toFixed(2);
}