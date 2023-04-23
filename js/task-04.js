const decrement = document.querySelector("[data-action='decrement']");


const increment = document.querySelector("[data-action='increment']");



const counterEl = document.querySelector("#value")


let counterValue = 0


counterEl.textContent = counterValue
increment.addEventListener('click', ()=> {

    counterEl.textContent = counterValue += 1
})

decrement.addEventListener('click', ()=> {
    if (counterValue > 0) {
        counterEl.textContent = counterValue -= 1 
}
})