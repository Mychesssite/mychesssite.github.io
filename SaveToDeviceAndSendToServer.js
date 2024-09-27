let state = 
[
    [
        
    ],
    [
        
    ]
]

function startState ()
{
let positionCounter = 0;  document.querySelectorAll('.cell').forEach(curcell =>
        {
            let id = curcell.id;
            if(id[0]=="t")
            {
                let i = id.slice(2,id.length)
                state[0][Number(i) - 1]=
                (((Math.floor(i/8))%2)===(i%8%2))?"#fffff":"#000000";
                /* если четность ряда совпадает с четностью позиции в ряде, тогда это черная клетка, т.е. : нечетный ряд и нечетная позиция, тогда черная клетка, а если нечетный ряд и четная позиция, то белая*/
            }
            else
            {
                
            }
        })
    
    
    
}
window.onload= function (){startState();
console.log(state);
console.log(state[0].length);}
