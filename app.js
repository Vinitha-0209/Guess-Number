const formid = document.querySelector('#form-id'); 
const input = document.querySelector('.number'); 
const sumbit = document.querySelector('.submit-btn'); 
const display = document.querySelector('.display'); 

let guessnumber = Math.floor(Math.random()*100);
let guesslimit = 5;

sumbit.addEventListener('click' , guessNumber);

function guessNumber(e){
    const inputNumber = Number(input.value);
    console.log(guessnumber);
    if(isNaN(inputNumber) || inputNumber>Number(100) || inputNumber < Number(0))
    {
        alert('range between 1 to 100');
    }
    if(inputNumber === guessnumber){
        display.innerHTML = `<h1 id="one">YOU WON!! <BR><BR> <span id="oneone">PERFACT GUESS<h1>`;
        sumbit.disabled = true;
    }
    else{
        if(guesslimit === 0){
            display.innerHTML = `<h1 style="color:red">GAME OVER!</h1>`;
            sumbit.disabled = true;
        }
        else{
            if(inputNumber > guessnumber )
            {
                display.innerHTML =`<h1 class="two"> Less than ${inputNumber} <br><br> ${guesslimit} TRIES TO GO</h1>`;
            }
            else{
                display.innerHTML =`<h1 class="two">Bigger than ${inputNumber} <br><br> ${guesslimit} TRIES TO GO</h1>`;
            }

        }
    }
    guesslimit -= 1;
    e.preventDefault();
}