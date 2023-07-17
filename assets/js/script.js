const input = document.getElementById("user-input");
const btn = document.getElementById("btn-send");
const result = document.getElementById("result");
const resultText = document.getElementById("result-text");
let randomNum = randomNumber(10);
let tentativas = 0;

//result.style.visibility = "hidden"

//Retorna um número aleatório, de 0 à maxValue
function randomNumber(maxValue) {
  return Math.floor(Math.random()*(maxValue + 1));
}

btn.addEventListener('click', function() {  
  result.style.visibility = "visible";
  if(tentativas == 5) {
    resultText.textContent = "Game Over!";
    tentativas = 0;
    randomNum = randomNumber(10);
  }

  else if(input.value == "") {
    resultText.textContent = "Não tem nada";
    //result.style.visibility = visible;
  }
  else if(randomNum.toString() == input.value) {
    resultText.textContent = "Acertou, parabéns!";
    randomNum = randomNumber(10);
  } 
  else if(randomNum < Number(input.value)) {
    resultText.textContent = "É menor!";
    tentativas++;
  }
  else {
    resultText.textContent = "É maior!";
    tentativas++;
  }
})

