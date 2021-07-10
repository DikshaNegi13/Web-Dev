let di=document.querySelector('div');
for(let i=1;i<=100;i++)
{
    let im=document.createElement('img');
    let s=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    im.src=s;
    di.append(im);
}