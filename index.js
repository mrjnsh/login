const changeBtn = document.getElementById("change");
const sendBtn = document.getElementById("send");
const giveCodeBtn = document.getElementById("give-a-code");
const container = document.querySelector(".container");



changeBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

sendBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});