let box = document.querySelectorAll(".print");
let resetbtn = document.querySelector(".btn");
let newbtn = document.querySelector(".newbtn");
let msg = document.querySelector("#msg");
let newgame = document.querySelector(".newgame");
let turn = document.querySelector(".turn");
let turnmsg = document.querySelector("#turnmsg");
let turnO = true;
let count = 0;
let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
box.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (turnO) {
            button.innerText = "O";
            turnmsg.innerText = "Player X's Turn";
            button.style.color = "rgba(110, 6, 6, 0.87)"; 
            turnO = false;
        }else{
            button.innerText = "X";
            turnmsg.innerText = "Player O's Turn";
            button.style.color = "rgba(82, 110, 6, 0.87)"; 
            turnO = true;
        }
        count++;
        button.disabled = true;
        checkWinner();
        checkdraw();
    })
});
function checkWinner(){
    for (let element of winningPattern) {
        let pos1 = box[element[0]].innerText;
        let pos2 = box[element[1]].innerText;
        let pos3 = box[element[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3){
                msg.innerText = `winner is ${pos1}`;
                newgame.classList.remove("hide");
                newgame.classList.add("noscroll");
                disableboxes();
                turn.classList.add("hide");
                count = 0;
            }
        }
    }
}
function checkdraw(){
    if (count == 9) {
        msg.innerText = `match draw`;
        newgame.classList.remove("hide");
        disableboxes();
    }
}
function disableboxes(){
    for (const boxval of box) {
        boxval.disabled = true;
    }
}
function enableboxes(){
    for (const boxval of box) {
        boxval.disabled = false;
        boxval.innerText= "";
    }
}
newbtn.addEventListener("click", ()=>{
    turnO = true;
    turn.classList.remove("hide");
    turnmsg.innerText = "Player O's Turn";
    enableboxes();
    newgame.classList.add("hide");
    newgame.classList.remove("noscroll");
})
resetbtn.addEventListener("click", ()=>{
    turnO = true;
    turn.classList.remove("hide");
    turnmsg.innerText = "Player O's Turn";
    enableboxes();
    newgame.classList.add("hide");
    newgame.classList.remove("noscroll");
})