const numbersListElement = document.getElementById("numbers-list")

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
