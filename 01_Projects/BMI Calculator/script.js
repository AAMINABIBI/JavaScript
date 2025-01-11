const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
e.preventDefault();

const height=parseInt(document.querySelector("#height").value)
const weight=parseInt(document.querySelector("#weight").value)
const rsults=document.querySelector('#result')

rsults.innerHTML=(weight/((height*height)/10000)).toFixed(2)
})