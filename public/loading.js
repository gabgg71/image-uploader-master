window.addEventListener('load', ()=>{
    setTimeout(()=>{
        localStorage.setItem('link', document.querySelector('.no-d').textContent)
        window.location.replace("http://localhost:4000/complete");
    }, 3000);
})

