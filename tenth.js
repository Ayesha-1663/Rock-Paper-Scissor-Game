let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const UserScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = (userChoice,compChoice)=>{
    message.innerText=`Game was Draw.Play Again`;
    message.style.backgroundColor = "#2E4057" ;
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin === true){

    message.innerText= `You Win: Your ${userChoice} beats  ${compChoice}`;
    message.style.backgroundColor = "green";
    userScore++;
    UserScorePara.innerText = userScore;
    }
    else{
        message.innerText = `You Loose:  ${compChoice}  beats Your ${userChoice}`;
        message.style.backgroundColor = "red";
        compScore++;
        CompScorePara.innerText = compScore;
    }   
}

const playGame = (userChoice)=>{
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
       drawGame(userChoice,compChoice);
    }
       else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin =  compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
       }
};

choices.forEach((choice)=>{
 choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
  playGame(userChoice);
 });
});