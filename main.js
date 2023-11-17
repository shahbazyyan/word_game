const words = [
    { word: "գեղեցիկ" },
    { word: "շուն" },
    { word: "առաջ" },
    { word: "ամեն" },
    { word: "երկու" },
    { word: "այս" },
    { word: "անդադար" },
    { word: "գերազանց" },
    { word: "թողել" },
    { word: "տեսնել" },
    { word: "գրել" },
    { word: "ուտել" },
    { word: "գործել" },
    { word: "գնալ" },
    { word: "համագործակցություն" },
    { word: "աշխատել" },
    { word: "պատրաստել" },
    { word: "հաճախորդ" },
    { word: "կատարել" },
    { word: "առաջացնել" },
    { word: "անկում" },
    { word: "հասկանալ" },
    { word: "խնդրել" },
    { word: "գործարար" },
    { word: "հաճախորդի" },
    { word: "հարցնել" },
    { word: "հայերեն" },
    { word: "անգլերեն" },
    { word: "ռազմական" },
    { word: "համակարգչային" },
    { word: "մուտք" },
    { word: "ելք" },
    { word: "գրանցել" },
    { word: "մուտքագրել" },
    { word: "հիշել" },
    { word: "մուտքաբառ" },
    { word: "դիմել" },
    { word: "պատասխանել" },
    { word: "գրադարան" },
    { word: "պահել" },
    { word: "վերցնել" },
    { word: "արագ" },
    { word: "կարճ" },
    { word: "երկար" },
    { word: "բարձր" },
    { word: "նեղ" },
    { word: "հանգիստ" },
    { word: "առավոտ" },
    { word: "երեկո" },
    { word: "գիրք" },
    { word: "պատմություն" },
    { word: "մաթեմատիկա" },
    { word: "ֆիզիկա" },
    { word: "բժշկություն" },
    { word: "մուտքագրած" },
    { word: "վերացնել" },
    { word: "կուտակել" },
    { word: "ներկայացնել" },
    { word: "սովորել" },
    { word: "կարդալ" },
    { word: "վարկանիշ" },
    { word: "շաբաթ" },
    { word: "լուսաբաց" },
    { word: "ամբողջական" },
    { word: "ուրիշ" },
    { word: "միջազգային" },
    { word: "արտադրություն" },
    { word: "հարթակ" },
    { word: "հասցե" },
    { word: "կենդանի" },
    { word: "կաթ" },
    { word: "մատիտ" },
    { word: "կայծակ" },
    { word: "կարիճ" },
    { word: "լավ" },
    { word: "ավելի" },
    { word: "ուշ" },
    { word: "արձանագրել" },
    { word: "պահապանել" },
    { word: "վերացնել" },
    { word: "բույս" },
    { word: "գազ" },
    { word: "լուծարվածք" },
    { word: "հոգեւորական" },
    { word: "առաջնորդել" },
    { word: "համեմատել" },
    { word: "մատուցել" },
    { word: "կաթնաղբյուր" },
    { word: "համեստ" },
    { word: "կոնֆերանս" },
    { word: "հատուկ" },
    { word: "առանձնացած" },
    { word: "հավաքել" },
    { word: "հատված" },
    { word: "կողմը" },
    { word: "մեքենա" },
    { word: "հայր" },
    { word: "մայր" },
    { word: "որդի" },
    { word: "կենաց" },
    { word: "վառել" },
    { word: "գլխարկ" },
    { word: "ոտք" },
    { word: "ձեռնարկ" },
    { word: "տանը" },
    { word: "բոլորը" },
    { word: "մեր" },
    { word: "դուք" },
    { word: "նրանք" },
    { word: "ես" },
    { word: "դու" },
    { word: "մենք" },
  ];
  
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
   let randomObj = words[Math.floor(Math.random() * words.length)];
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


  


