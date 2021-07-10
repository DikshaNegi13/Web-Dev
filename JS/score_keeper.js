const form=document.querySelector('input');
var n;
form.addEventListener('change',function(){

    n =parseInt(form.value);


});
const spa1=document.querySelector('#spa1');
const spa2=document.querySelector('#spa2');
var pl1=0;
var pl2=0;


const but1=document.querySelector('#b1');
const but2=document.querySelector('#b2');
const but3=document.querySelector('#b3');

function see()
{
    if(pl1+pl2==n){
but1.disabled=true;
but2.disabled=true;

but1.style.backgroundColor='#bbedd6';
but2.style.backgroundColor='#b3d5fc';

form.value="";
    }
}
function pl1score()
{
    ++pl1;
spa1.innerText=`${pl1}`;
spa2.innerText=`${pl2}`;
col();
see();
    }
function resetscore()
    {pl1=0;
        pl2=0;
        spa1.innerText=`${pl1}`;
spa2.innerText=`${pl2}`;
col();
but1.disabled=false;
but2.disabled=false;
but1.style.backgroundColor='#7bf1a8';
but2.style.backgroundColor='#5390d9';
    
    }
    function pl2score(){
        ++pl2;
        spa1.innerText=`${pl1}`;
        spa2.innerText=`${pl2}`;
        col();
        see();
            
    }


function col(){
    if(pl1>pl2)
    {
        spa1.style.color='green';
spa2.style.color='red';
    }
    else if(pl1<pl2)
    {spa1.style.color='red';
    spa2.style.color='green';
        }
        else{
            spa1.style.color='gray';
spa2.style.color='gray';
    }
        }

    
let i=0;




    but1.addEventListener('click',pl1score);
    but2.addEventListener('click',pl2score);
but3.addEventListener('click',resetscore);


