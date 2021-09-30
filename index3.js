const sides = document.querySelectorAll(".side-ip");
const calculateButton = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");



calculateButton.addEventListener("click", function calculateHypotenuse(){
    if(Number(sides[0].value) && Number(sides[1].value)){
        if(Number(sides[0].value)> 0 && Number(sides[1].value)> 0){
            const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value))
            const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
            output.innerText = ("The length of Hypotenuse is " + lengthOfHypotenuse + " cm²");
        }else{
            output.innerText=("The numbers entered should be greater than zero");
        }    
    }else{
    output.innerText=("Kindly enter both the inputs");
    }
})

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}