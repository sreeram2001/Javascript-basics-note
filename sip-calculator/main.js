
function calculateresult()
{
    let amount = document.getElementById("amount").value;
    let period = document.getElementById("period").value;
    let rate = document.getElementById("rate").value;

    let sip_value;
    let sip_invest;
    let sip_gain;

    let monthly_rate = rate/12/100;     //monthly-return rate
    let tenure = period*12;             //total payments


    //calculation
    sip_value = amount * ((((1 + monthly_rate)**(tenure))-1) * (1 + monthly_rate))/(monthly_rate)

    sip_invest = amount*12*period;

    sip_gain = sip_value - sip_invest;


    //results 
    document.getElementById("sip").innerHTML = Math.round(sip_value);

    document.getElementById("invested").innerHTML = Math.round(sip_invest);

    document.getElementById("gain").innerHTML = Math.round(sip_gain);



   
}


