let userChoise = document.querySelectorAll(".choice");

let gameResult = (choiceId, computerChoise) => {
    console.log("hi");
    if (choiceId === computerChoise) {
        console.log("done");
        document.querySelector("#msg").innerHTML = "Tie";
    } else if (choiceId === "scissor" && computerChoise === "paper" ||
               choiceId === "paper" && computerChoise === "rock" ||
               choiceId === "rock" && computerChoise === "scissor") {
        document.querySelector("#msg").innerHTML = "you won the game";
    } else {
        document.querySelector("#msg").innerHTML = "siya won the game";
    }
};

let siyaChiose = (choiceId) => {
    let option = ["rock", "paper", "scissor"];
    let siyaChiose = Math.floor(Math.random() * 3);
    let computerChoise = option[siyaChiose];
    document.querySelector("#siya").innerHTML = computerChoise;
    gameResult(choiceId, computerChoise);
};

userChoise.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        document.querySelector("#my").innerHTML = choiceId;
        siyaChiose(choiceId);
    });
});
