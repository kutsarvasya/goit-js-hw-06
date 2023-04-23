function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector("button.change-color")
const bodyEl = document.querySelector("body")
const spanEl = document.querySelector("span.color")

buttonEl.addEventListener('click', () => {
  bodyEl.setAttribute('style', `background-color:${getRandomHexColor()}`)
  spanEl.innerHTML = getRandomHexColor()

})

