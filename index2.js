const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-form");
const output = document.querySelector("#output");

const rightAnswers = ["90°","right angled","Equilateral triangle","right","3","Acute","Isoceles","Scalene","False","True"];

    
function calculateScore(){
    const formResults = new FormData(quizForm);
    let score = 0;
    let index = 0;

    for(let value of formResults.values()){
        
        if (value === rightAnswers[index]){
            score =score+1;
        }
        index =index+1;
    }
    output.innerText = (" Your final score is : " + score);

}

submitButton.addEventListener("click", calculateScore);

  
