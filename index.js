//selectionner les ellement qui seront amener a etre dynamik
const numberText = document.querySelector(".counter-value");
const btnDecrease = document.querySelector(".btn.decrease");
const btnReset = document.querySelector(".btn.reset");
const btnIncrease = document.querySelector(".btn.increase");
//initialiser le compteur a 0
let count = 0;
//rendre les boutons dynamik
btnDecrease.addEventListener("click",function(){
    count -= 1;
    actualise(count);
});
btnReset.addEventListener("click",function(){
    count = 0;
    actualise(count);
});
btnIncrease.addEventListener("click",function(){
    count += 1;
    actualise(count);
});
function setValue(value) {
    numberText.textContent = value;
}
function actualiseColor(value) {
    if (value > 0){
        numberText.style.color = "green";
    }else if (value < 0){
        numberText.style.color = "red";  
    }else{
        numberText.style.color = "black";
    }
    numberText.textContent = value;
}

function actualise(value){
    setValue(value);
    actualiseColor(value);
}