
const divGrey = document.querySelector('.grey');
const elegir = document.querySelector('.choose');
const inputChoose = document.querySelector('input');
const formulario = document.querySelector('form');


elegir.addEventListener('click', (e)=>{
    inputChoose.click();
});

inputChoose.addEventListener('change', (e)=>{
    setFiles(inputChoose.files[0]);
})

divGrey.addEventListener('dragstart', (e)=>{
    e.stopPropagation();
    e.preventDefault();
});

divGrey.addEventListener('dragenter', (e)=>{
    e.stopPropagation();
    e.preventDefault();

});

//debemos poner esto para que me permita soltar dentro del contenedor
divGrey.addEventListener('dragover', (e)=>{
    e.stopPropagation();
    e.preventDefault();
});

divGrey.addEventListener('drop', (e)=>{
    e.preventDefault();
   inputChoose.files = e.dataTransfer.files;
    setFiles(e.dataTransfer.files[0]);
});





const setFiles =(files)=>{
    console.log(files)
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.addEventListener('load', (e)=>{
        localStorage.setItem('src', e.currentTarget.result);
        formulario.submit();
    });
    
}