const inputEl = document.querySelector("#font-size-control")

const textEl = document.querySelector("#text")

let color = "red"



inputEl.addEventListener("input", (e)=> {
    textEl.setAttribute('style', `font-size:${e.currentTarget.value}px`)
    
})