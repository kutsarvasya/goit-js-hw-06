const inputEl = document.querySelector("#validation-input")


inputEl.classList.add("validation-input")



inputEl.addEventListener("blur", (e) => {
    if (e.currentTarget.value.length >= inputEl.getAttribute('data-length')) {
       inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")
    } else {
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid")
    } 
})
