const button=document.querySelector("button");
const body=document.querySelector("div");
const color=['violet','indigo','blue','green','yellow','orange','red'];
body.style.backgroundColor='aqua';
document.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex];
});