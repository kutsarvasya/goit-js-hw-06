const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const counterEl = document.querySelector("#value")

let counterValue = 0
counterEl.textContent = counterValue

incrementButton.addEventListener('click', ()=> {
     counterValue += 1
    counterEl.textContent = counterValue
})

decrementButton.addEventListener('click', ()=> {
        counterValue -= 1 
        counterEl.textContent = counterValue 
})