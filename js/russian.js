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
         alert(`Ваше время ушло. Правильное слово было '${correctWord}'`)
         initGame();
      }, 1000);
    };
    
    const initGame = () => {
      startTimer(45);
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
        alert("Пожалуйста, заполните слово.");
        return; 
      };
    
      if (playerWord !== correctWord) {
        alert(` '${playerWord}' было неверно. Попробуйте еще раз!`);
        return; 
      };
    
      alert('Ты выиграл!');
      initGame();
    };
    
    changeWord.addEventListener("click", initGame);
    checkWord.addEventListener("click", checkWords);
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        checkWords()
      };
    });
};
    
  
createGame(russianWords);