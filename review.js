let questions = JSON.parse(localStorage.getItem("questions")) || [];
let answers = JSON.parse(localStorage.getItem("answers")) || [];

let container = document.getElementById("review");

questions.forEach((q, i) => {
  let user = answers[i];
  let correct = q.correct;

  let div = document.createElement("div");
  div.className = "card " + (user === correct ? "correct" : "wrong");

  div.innerHTML = `
    <h3>${i + 1}. ${q.question}</h3>
    <p>Tu respuesta: ${q.options[user] || "No respondida"}</p>
    <p>Correcta: ${q.options[correct]}</p>
  `;

  container.appendChild(div);
});

function goHome() {
  window.location.href = "index.html";
}
