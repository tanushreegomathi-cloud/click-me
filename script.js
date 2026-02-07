const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts");

function openValentine() {
  document.getElementById("start").style.display = "none";
  document.getElementById("valentine").classList.remove("hidden");
}

// NO button runs away
function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "vw";
  noBtn.style.top = Math.random() * 70 + "vh";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

// YES clicked
function yesClicked() {
  document.getElementById("valentine").innerHTML = `
    <h1>YAYYY ❤️ you're my galentine</h1>
    <h2 style="font-size:2.2rem;">love you achu kuttyy ❤️</h2>
  `;

  setInterval(createHeart, 150); // faster heart rain
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 2) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}
