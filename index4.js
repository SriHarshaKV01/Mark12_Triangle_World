const inputs = document.querySelectorAll(".bh-ip");
const calculateButton = document.querySelector("#checkarea-btn");
const output = document.querySelector("#output");

calculateButton.addEventListener("click", function calculateAreaOfATriangle(){
    if(Number(inputs[0].value) && Number(inputs[1].value)){
        if(Number(inputs[0].value)> 0 && Number(inputs[1].value)> 0){
            const productOfInputs = calculateProductOfInputs(Number(inputs[0].value),Number(inputs[1].value))
            const areaOfATriangle = 0.5*(productOfInputs);
            output.innerText = ("The area of a Triangle is " + areaOfATriangle + " cm");
        }else{
            output.innerText=("The numbers entered should be greater than zero");
        }    
    }else{
    output.innerText=("Kindly enter both the inputs");
    }
});
    

function calculateProductOfInputs(a,b){
    const productOfInputs = a*b;
    return productOfInputs;
}



