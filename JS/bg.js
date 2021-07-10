

const h1=document.querySelector('h1');
const butt=document.querySelector('button');
const body=document.querySelector('body');

butt.addEventListener('click',()=>{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
h1.textContent=`rgb(${r},${g},${b})`;
body.style.backgroundColor=`rgb(${r},${g},${b})`;
});