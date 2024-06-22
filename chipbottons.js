document.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click',()=>{
        const background = chip.querySelector('.chip-background');
        if(background){
            background.classList.toggle('active');
        }
    });
});