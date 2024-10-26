const body=document.body;
const greyBox=document.getElementById('grey');
const blueBox=document.getElementById('blue');
const whiteBox=document.getElementById('white');
const YellowBox=document.getElementById('yellow');

greyBox.addEventListener('click',()=>{
     body.style.backgroundColor='grey'
})
blueBox.addEventListener('click',()=>{
    body.style.backgroundColor='blue'
})
whiteBox.addEventListener('click',()=>{
    body.style.backgroundColor='white'
})
YellowBox.addEventListener('click',()=>{
    body.style.backgroundColor='yellow'
})

