
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


});

function drawButterfly() {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'rgb(215,210,215)'
    ctx.beginPath();
    ctx.arc(205,120,3,0,Math.PI*2);
    ctx.arc(195,120,3,0,Math.PI*2);
    ctx.closePath();
    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(205,120);
    ctx.lineTo(205,285);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(195,120);
    ctx.lineTo(195,285);
    ctx.stroke();  
    let x;
    let y;
    let rad = 150;
    ctx.beginPath();
    ctx.fillStyle = 'rgb(215,0,255)';
    for (let a = -Math.PI/2; a <= Math.PI/2; a += 0.03) {
        x=200+rad*Math.sin(a)*Math.sin(2*a)*(Math.abs(Math.sin(t))+0.2);
        y=200+rad*Math.cos(a)*Math.sin(2*a);     
        ctx.arc(x,y,0.5,0,Math.PI*2);   
        ctx.fill();            
    } 
    for (let a = Math.PI/2; a <= 3*Math.PI/2; a += 0.03) {
        x=200+rad*Math.sin(a)*Math.sin(2*a)*(Math.abs(Math.sin(t))+0.2);
        y=200+rad*Math.cos(a)*Math.sin(2*a);
        ctx.arc(x,y,0.5,0,Math.PI*2);  
        ctx.fill();            
    } 
    ctx.closePath();
}

function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

let t = 0;
setInterval(()=>{
   clear();
   drawButterfly();
   t += 0.2;
},1000/100)