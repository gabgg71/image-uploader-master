window.addEventListener('load', ()=>{
    setTimeout(()=>{
        localStorage.setItem('link', document.querySelector('.no-d').textContent)
        window.location.replace("https://image-uploadermaster.herokuapp.com/complete");
    }, 2000);
})

