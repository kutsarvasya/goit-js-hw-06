const inputEl = document.querySelector("#validation-input")
const dataSetNum = Number(inputEl.dataset.length)

inputEl.classList.add("validation-input")

inputEl.addEventListener("blur", (e) => {
    if (e.currentTarget.value.length === dataSetNum) {
       inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")
    } else {
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid")
    } 
})
