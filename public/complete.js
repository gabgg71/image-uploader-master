const link = document.querySelector('input');
const copy = document.querySelector('button');


document.querySelector('img').outerHTML = `<img src='${localStorage.getItem('src')}' alt="Default"></img>`;

window.addEventListener('load', ()=>{
    link.value = localStorage.getItem('link');
})

copy.addEventListener('click', ()=>{
    console.log('Diste click');
    link.select();
    document.execCommand('copy');
    console.log('Lo hice');
})