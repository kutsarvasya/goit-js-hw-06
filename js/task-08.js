
const formEl = document.querySelector("form.login-form")

formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (email.length > 0 && password.length > 0) {
        const formObj = {
        email, password }
        console.log(formObj);
        formEl.reset()
    } else {
        alert(Error("ВСІ ПОЛЯ ПОВИННІ БУТИ ЗАПОВНЕНІ!!!"))
      }

})

