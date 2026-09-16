const welcomeScreen = document.getElementById("welcomeScreen");
const readyScreen = document.getElementById("readyScreen");
const cakeScreen = document.getElementById("cakeScreen");
const loveScreen = document.getElementById("loveScreen");
const questionScreen = document.getElementById("questionScreen");
const memoriesIntro = document.getElementById("memoriesIntro");
const memoriesScreen = document.getElementById("memoriesScreen");
const letterScreen = document.getElementById("letterScreen");
const letterContent = document.getElementById("letterContent");
const finalScreen = document.getElementById("finalScreen");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const blowBtn = document.getElementById("blowBtn");

const birthdayPopup = document.getElementById("birthdayPopup");
const loveBtn = document.getElementById("loveBtn");

const loveContinueBtn = document.getElementById("loveContinueBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const memoriesBtn = document.getElementById("memoriesBtn");
const openLetterPageBtn = document.getElementById("openLetterPageBtn");

const openLetterBtn = document.getElementById("openLetterBtn");
const envelope = document.getElementById("envelope");

const finishLetterBtn = document.getElementById("finishLetterBtn");

const countdown = document.getElementById("countdown");
const cakeMessage = document.getElementById("cakeMessage");

const flames = document.querySelectorAll(".flame");

const kissContainer = document.getElementById("kissContainer");

const noMessage = document.getElementById("noMessage");

const memoryImage = document.getElementById("memoryImage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryCaption = document.getElementById("memoryCaption");
const memoryNumber = document.getElementById("memoryNumber");
const memoryCounter = document.getElementById("memoryCounter");

const prevMemory = document.getElementById("prevMemory");
const nextMemory = document.getElementById("nextMemory");


/* ========================= */
/* SCREEN CONTROL */
/* ========================= */

function showScreen(screen) {

    const allScreens = [
        welcomeScreen,
        readyScreen,
        cakeScreen,
        loveScreen,
        questionScreen,
        memoriesIntro,
        memoriesScreen,
        letterScreen,
        letterContent,
        finalScreen
    ];

    allScreens.forEach(function(screenItem) {

        if (screenItem) {
            screenItem.classList.add("hidden");
        }

    });

    screen.classList.remove("hidden");

}


/* ========================= */
/* PAGE 1 */
/* ========================= */

startBtn.addEventListener("click", function() {

    showScreen(readyScreen);

});


/* ========================= */
/* PAGE 2 */
/* ========================= */

continueBtn.addEventListener("click", function() {

    showScreen(cakeScreen);

});


/* ========================= */
/* CAKE */
/* ========================= */

blowBtn.addEventListener("click", function() {

    blowBtn.disabled = true;

    blowBtn.style.opacity = "0.5";

    cakeMessage.textContent = "Get ready... ✨";

    let number = 3;

    countdown.textContent = number;

    const timer = setInterval(function() {

        number--;

        if (number > 0) {

            countdown.textContent = number;

        } else {

            clearInterval(timer);

            countdown.textContent = "💨";

            cakeMessage.textContent = "BLOW! 💨";

            setTimeout(function() {

                flames.forEach(function(flame) {

                    flame.classList.add("off");

                });

                countdown.textContent = "✨";

                setTimeout(function() {

                    birthdayPopup.classList.remove("hidden");

                }, 700);

            }, 800);

        }

    }, 1000);

});


/* ========================= */
/* BIRTHDAY POPUP */
/* ========================= */

loveBtn.addEventListener("click", function() {

    birthdayPopup.classList.add("hidden");

    showScreen(loveScreen);

    createKisses();

});


/* ========================= */
/* KISSES */
/* ========================= */

function createKisses() {

    kissContainer.innerHTML = "";

    for (let i = 0; i < 35; i++) {

        const kiss = document.createElement("div");

        kiss.classList.add("kiss");

        kiss.textContent = "💋";

        kiss.style.left = Math.random() * 100 + "vw";

        kiss.style.animationDelay =
            Math.random() * 3 + "s";

        kiss.style.fontSize =
            (20 + Math.random() * 25) + "px";

        kissContainer.appendChild(kiss);

    }

}


/* ========================= */
/* I LOVE YOU -> QUESTION */
/* ========================= */

loveContinueBtn.addEventListener("click", function() {

    showScreen(questionScreen);

});


/* ========================= */
/* NO BUTTON RUNS AWAY */
/* ========================= */

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", function(event) {

    event.preventDefault();

    moveNoButton();

});


function moveNoButton() {

    const maxX =
        window.innerWidth - noBtn.offsetWidth - 30;

    const maxY =
        window.innerHeight - noBtn.offsetHeight - 30;

    const randomX =
        Math.max(20, Math.random() * maxX);

    const randomY =
        Math.max(20, Math.random() * maxY);

    noBtn.style.position = "fixed";

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";

    noMessage.textContent =
        "Hehe... you can't choose NO 😌❤️";

}


/* ========================= */
/* YES */
/* ========================= */

yesBtn.addEventListener("click", function() {

    yesBtn.textContent = "I KNEW IT ❤️";

    noBtn.style.display = "none";

    noMessage.textContent =
        "I knew you'd choose YES... 🥹❤️";

    setTimeout(function() {

        showScreen(memoriesIntro);

    }, 1500);

});


/* ========================= */
/* MEMORIES INTRO -> MEMORIES */
/* ========================= */

memoriesBtn.addEventListener("click", function() {

    showScreen(memoriesScreen);

});


/* ========================= */
/* MEMORY DATA */
/* ========================= */

const memories = [

    {
        image: "memory1.jpg",
        title: "The beginning ❤️",
        caption: "One of those moments I'll always remember."
    },

    {
        image: "memory2.jpg",
        title: "Our little moments 🥹",
        caption: "Even the simplest moments became special with you."
    },

    {
        image: "memory3.jpg",
        title: "The memories we made ✨",
        caption: "So many memories, and still so many more to make."
    },

    {
        image: "memory4.jpg",
        title: "Us ❤️",
        caption: "My favourite kind of memory is one with you."
    },

    {
        image: "memory5.jpg",
        title: "Always us 💕",
        caption: "And this is just the beginning of our story."
    }

];

let currentMemory = 0;


/* ========================= */
/* SHOW MEMORY */
/* ========================= */

function showMemory() {

    const memory = memories[currentMemory];

    memoryImage.src = memory.image;

    memoryTitle.textContent = memory.title;

    memoryCaption.textContent = memory.caption;

    memoryNumber.textContent =
        `${currentMemory + 1} / ${memories.length}`;

    memoryCounter.textContent =
        `${currentMemory + 1} / ${memories.length}`;

}


/* NEXT */

nextMemory.addEventListener("click", function() {

    currentMemory++;

    if (currentMemory >= memories.length) {

        currentMemory = 0;

    }

    showMemory();

});


/* PREVIOUS */

prevMemory.addEventListener("click", function() {

    currentMemory--;

    if (currentMemory < 0) {

        currentMemory = memories.length - 1;

    }

    showMemory();

});


/* ========================= */
/* MEMORIES -> ENVELOPE */
/* ========================= */

openLetterPageBtn.addEventListener("click", function() {

    showScreen(letterScreen);

});


/* ========================= */
/* OPEN ENVELOPE */
/* ========================= */

openLetterBtn.addEventListener("click", function() {

    envelope.classList.add("open");

    openLetterBtn.disabled = true;

    openLetterBtn.style.opacity = "0.5";

    setTimeout(function() {

        showScreen(letterContent);

        letterContent.scrollTop = 0;

    }, 900);

});


/* ========================= */
/* LETTER -> FINAL */
/* ========================= */

finishLetterBtn.addEventListener("click", function() {

    showScreen(finalScreen);

});


/* ========================= */
/* INITIAL MEMORY */
/* ========================= */

showMemory();