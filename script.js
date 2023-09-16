


let Password = document.getElementById("Password")
const submitBtn = document.getElementById("Claim")


submitBtn.addEventListener("click", () => {
    let firstName = document.getElementById("FirstName")
    const fnameError = document.getElementById("fnameError")
    if (firstName.value === "") {
        fnameError.classList.remove("hidden")
        event.preventDefault()
    }

    let lastName = document.getElementById("LastName")
    const lnameError = document.getElementById("lnameError")
    if (lastName.value === "") {
        lnameError.classList.remove("hidden")
        event.preventDefault()
    }

    let Email = document.getElementById("Email").value
    const emailError = document.getElementById("mailError")
    if (Email === "" || !Email.includes(".") || !Email.includes("@")) {
        emailError.classList.remove("hidden")
        event.preventDefault()
    }

    let Password = document.getElementById("Password")
    const pswError = document.getElementById("pswError")
    if (Password.value === "") {
        pswError.classList.remove("hidden")
        event.preventDefault()
    }

})