const labels = document.querySelectorAll(".form-control label");
const inputs = document.querySelectorAll("input");

const DELAY = [0, 50, 100, 150, 200, 300, 400, 500];

labels.forEach(label => {
  label.innerHTML = label.innerText.split("")
    .map(letter => `<span>${letter}</span>`)
    .join("");
})

inputs.forEach(input => {

  input.addEventListener("focus", (e) => {
    e.target.nextElementSibling.childNodes.forEach((letter, idx) => {
      letter.style.transitionDelay = `${DELAY[idx]}ms`;
      letter.classList.add("wave");
    })
  })

  input.addEventListener("focusout", (e) => {
    e.target.nextElementSibling.childNodes.forEach(letter => {
      letter.classList.remove("wave");
    })
  })

});