const inputAngles = document.querySelectorAll(".input-angle");
const checkButton = document.querySelector("#is-triangle");
const output = document.querySelector(".output");

checkButton.addEventListener("click", function isTriangle(){
    if(Number(inputAngles[0].value) && Number(inputAngles[1].value && Number(inputAngles[2].value))){
        if(Number(inputAngles[0].value)> 0 && Number(inputAngles[1].value)> 0 && Number(inputAngles[1].value)){
            const sumOfAngles = calculateSumOfAngles(Number(inputAngles[0].value),Number(inputAngles[1].value),Number(inputAngles[2].value))
            if(sumOfAngles === 180){
                output.innerText = "Yay! The input angles form a triangle";
            }else{
                output.innerText = "Oh Oh! That does not form a triangle";
            }
        }else{
            output.innerText=("The numbers entered should be greater than zero");
        }    
    }else{
    output.innerText=("Kindly enter all the inputs");
    }
});

function calculateSumOfAngles(a,b,c){
    const sumOfAngles = a + b + c;
    return sumOfAngles;    
}