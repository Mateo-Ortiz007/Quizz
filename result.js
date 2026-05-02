let score = localStorage.getItem("score");
let total = 10;

document.getElementById("score").innerText = `${score} / ${total}`;

let message = "";

if (score == total) {
  message = "🔥 Excelente!";
} else if (score >= 7) {
  message = "👏 Muy bien!";
} else if (score >= 5) {
  message = "👍 Bien, pero puedes mejorar";
} else {
  message = "💀 Debes estudiar más";
}

document.getElementById("message").innerText = message;

function restart() {
  window.location.href = "home.html";
}
