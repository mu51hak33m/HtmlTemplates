const ativated = false
document.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click',()=>{
        const background = chip.querySelector('.chip-background');
        if(ativated){
            background.classList.toggle('deactivate');
            ativated = false
        }
        if(background){
            background.classList.toggle('active');
            ativated = true
        
        }

    });
});