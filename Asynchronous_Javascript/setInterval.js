function Hi()
{
    console.log('Hi')
}

//setInterval prints Hi or runs function Hi() after every 1 second
//but it runs infinetly so we need to stop it
let timer = setInterval(Hi, 1000)

//to make it stop we use clearInterval function usage for which we also need to use
//setTimeout

setTimeout(function()
{
    clearInterval(timer)    //we use clearInterval to stop and pass the timer for timing
}, 4000)    //after 4secs it stops

//setTimeout format = setTimeout(callbackfunction, time in ms)