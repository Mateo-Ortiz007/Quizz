const questions = [
  {
    q: "¿Edad legal para trabajar en la mayoría de países?",
    a: ["12 años", "14 años", "16 años", "18 años"],
    correct: 2,
  },
  {
    q: "¿El trabajo infantil afecta la educación?",
    a: ["Sí", "No", "Solo a veces", "No afecta"],
    correct: 0,
  },
  {
    q: "¿Principal causa del trabajo infantil?",
    a: ["Riqueza", "Pobreza", "Tecnología", "Educación"],
    correct: 1,
  },
  {
    q: "¿Dónde ocurre más la mendicidad?",
    a: ["Calles", "Escuelas", "Oficinas", "Hospitales"],
    correct: 0,
  },
  {
    q: "¿Organismo que combate el trabajo infantil?",
    a: ["OIT", "FIFA", "NASA", "Netflix"],
    correct: 0,
  },
  {
    q: "¿La migración aumenta el riesgo?",
    a: ["Sí", "No", "Nunca", "No aplica"],
    correct: 0,
  },
  {
    q: "¿El trabajo infantil vulnera derechos?",
    a: ["Sí", "No", "Depende", "Nunca"],
    correct: 0,
  },
  {
    q: "¿Afecta el desarrollo?",
    a: ["Sí", "No", "Poco", "Nada"],
    correct: 0,
  },
  {
    q: "¿Se debe erradicar?",
    a: ["Sí", "No", "Tal vez", "No importa"],
    correct: 0,
  },
  {
    q: "¿La educación ayuda a prevenir?",
    a: ["Sí", "No", "Poco", "Nada"],
    correct: 0,
  },
];

let index = 0;
let score = 0;

function loadQuestion() {
  let q = questions[index];

  document.getElementById("question").innerText = q.q;
  document.getElementById("progressText").innerText = `⚡ ${index + 1}/10`;
  document.getElementById("bar").style.width = (index + 1) * 10 + "%";

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  const colors = ["red", "blue", "yellow", "green"];

  q.a.forEach((text, i) => {
    let btn = document.createElement("button");
    btn.className = `btn ${colors[i]}`;
    btn.innerText = text;

    btn.onclick = () => checkAnswer(btn, i, q.correct);

    answersDiv.appendChild(btn);
  });
}

function checkAnswer(btn, selected, correct) {
  let buttons = document.querySelectorAll(".btn");

  buttons.forEach((b) => (b.disabled = true));

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
    document.getElementById("score").innerText = "🏆 " + score;
  } else {
    btn.classList.add("wrong");
    buttons[correct].classList.add("correct");
  }

  setTimeout(() => {
    index++;
    if (index < questions.length) {
      loadQuestion();
    } else {
      localStorage.setItem("score", score);
      window.location.href = "result.html";
    }
  }, 1000);
}

loadQuestion();
