const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
const counterEl = document.querySelector("#value")

let counterValue = 0
counterEl.textContent = counterValue

increment.addEventListener('click', ()=> {
     counterValue += 1
    counterEl.textContent = counterValue
})

decrement.addEventListener('click', ()=> {
        counterValue -= 1 
        counterEl.textContent = counterValue 
})