window.addEventListener('load', ()=>{
    setTimeout(()=>{
        localStorage.setItem('link', document.querySelector('.no-d').textContent)
        window.location.replace(`${window.location.origin}/complete`);
    }, 2000);
})

