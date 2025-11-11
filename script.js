function proxima(num) {
  document.querySelectorAll('[id^="etapa"]').forEach(el => el.style.display = "none");
  document.getElementById("etapa" + num).style.display = "block";
}

function perguntar() {
  const respostas = ["Sim 😍", "Não 😜", "Talvez... 💕"];
  const sorteio = Math.floor(Math.random() * respostas.length);
  document.getElementById("resposta").textContent = respostas[sorteio];

  if (respostas[sorteio] === "Sim 😍" || respostas[sorteio] === "Talvez... 💕") {
    setTimeout(() => {
      document.getElementById("etapa4").style.display = "none";
      document.getElementById("final").style.display = "block";
    }, 1500);
  }
}