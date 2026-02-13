const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn"); // Ensure HTML has class="btn yes-btn"
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open Letter
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// GROWING LOGIC
let yesScale = 1;

noBtn.addEventListener("click", () => {
    yesScale += 0.5; // Grow by 50% each click
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // Optional: Make No button disappear after a few clicks
    // if(yesScale > 3) noBtn.style.display = "none"; 
});

// WINNER LOGIC
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    buttons.style.display = "none"; // Hide buttons
    finalText.style.display = "block"; // Show date details
});