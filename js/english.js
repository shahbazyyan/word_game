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
         alert(`You're time has left. The right word was '${correctWord}' `)
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
        alert("Plese, write the word!");
        return; 
      }
    
      if (playerWord !== correctWord) {
        alert(`${playerWord}'s was incorrect. Try again!`);
        return; 
      }
    
      alert('You wooon!');
      initGame();
    };
    
    changeWord.addEventListener("click", initGame);
    checkWord.addEventListener("click", checkWords);
};

createGame(wordsEnglish);
