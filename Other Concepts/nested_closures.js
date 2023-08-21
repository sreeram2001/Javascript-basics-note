function demo()
{
    let a = 3;

    function print()
    {   
        let aa = 15

        function printf()
        {   
            console.log(aa)
            console.log(a)
        }

        return printf
    }

    return print
}

let pp = demo()
// console.log(pp) - gives output [Function: print]

let pp1 = pp()
// console.log(pp1) - gives output [Function: printf]

pp1()   //now calling pp1 will execute those functions

