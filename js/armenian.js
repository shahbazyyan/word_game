function createGame (selectedWords) {
 
    const word = document.querySelector(".word");
    const timer = document.querySelector(".time > span");
    const checkWord = document.querySelector(".check");
    const changeWord = document.querySelector(".refresh");
    const input = document.querySelector("input");
    let correctWord, time;
    
    function startTimer (maxTime) {
      clearInterval(time);
      time = setInterval(() => {
         if (maxTime > 0) {
          maxTime --;
          return timer.textContent = maxTime;
         };
         clearInterval(time);
         alert(`Ժամանակը սպառվեց։ Ճիշտ բառն էր '${correctWord}'-ը`)
         initGame();
      }, 1000);
    };
    
    const initGame = () => {
      startTimer(30);
       let randomObj = selectedWords[Math.floor(Math.random() * selectedWords.length)];
       let wordArray = randomObj.word.split("");
       for (let i = wordArray.length - 1; i >  0; i--) {
        let j = Math.floor(Math.random()* (i+1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
       }
       word.innerText = wordArray.join("");
       correctWord = randomObj.word.toLocaleLowerCase();
       input.value = "";
       input.setAttribute("maxlength", correctWord.length);
    };
    
    initGame();
    
    
    function checkWords () {
      let playerWord = input.value.toLocaleLowerCase();
      if (!playerWord) {
        alert("Խնդրում ենք լրացնել բառը։");
        return; // Return if input is empty
      }
    
      if (playerWord !== correctWord) {
        alert(`${playerWord}֊ը սխալ էր, փորձի՛ր կրկին։`);
        return; // Return if input is incorrect
      }
    
      alert('Դուք հաղթեցի՛ք։');
      initGame();
    };
    
    changeWord.addEventListener("click", initGame);
    checkWord.addEventListener("click", checkWords);
};
    
createGame(wordsArmenian);
   