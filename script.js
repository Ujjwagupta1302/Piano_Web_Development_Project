const pianokeys = document.querySelectorAll(".piano-keys .key") ;
let seq = [] ; 
let audio = new Audio("tunes/a.wav") ;
const playtune = (key)=> {
    audio.src = `tunes/${key}.wav` ; 
    audio.play() ; 
}
pianokeys.forEach(key => {
    key.addEventListener("click",()=>{
        playtune(key.dataset.key) 
    }) ;
}) ;
const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
    // Add your desired background color class, for example, "highlight"
    key.classList.add('highlight');
});









