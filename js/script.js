
const numbersListElement = document.getElementById("numbers-list")
const answersFormElement = document.getElementById("answers-form")
const instructionsElement = document.getElementById("instructions")

let newRandomNums = []

// genera 5 numeri casuali e pushali nell'array vuoto
for (i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 50) + 1
    newRandomNums.push(randomNum)
}

// itera ogni elemento nell'array (newRandomNums), crea un li, mettici il valore all'interno e aggiungilo all'html
for (i = 0; i < newRandomNums.length; i++) {
    const newLi = document.createElement("li")
    newLi.innerHTML = newRandomNums[i]
    numbersListElement.appendChild(newLi)
}

// countdown
const countdownElement = document.getElementById("countdown")
let counter = 30


// timer 
const timer = setInterval(function () {

    // at 0 function
    countdownElement.innerHTML = counter
    counter--
    if (counter === -1) {
        clearInterval(timer)
        numbersListElement.classList.add("d-none")
        answersFormElement.classList.remove("d-none")
        instructionsElement.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
    }

}, 1000)


// input values 
const formControlElements = document.getElementsByClassName("form-control")
const form = document.querySelector("form")
const numGuessed = []
const messageElement = document.getElementById("message")


form.addEventListener("submit", function (event) {

    event.preventDefault()
    for (i = 0; i < formControlElements.length; i++) {

        // valore in int dell'elemento i nell'array
        const val = parseInt(formControlElements[i].value)

        // confronta se il valore dell'index è presente nella lista di numeri generati e lo mette in array (numGuessed)
        if (newRandomNums.indexOf(val) !== -1) numGuessed.push(val)

    }
    
    messageElement.textContent = `Hai indovintato ${numGuessed.length} numeri! (${numGuessed.join()})`
})




