let numbers = []
let max = 90

// create the list
for (let i = 0; i < max; i++) {
    numbers.push(i + 1)
}

console.log(numbers);


//select the button
let button = document.querySelector(".btn");

//on click 
button.addEventListener("click", (add) => {
    //genera un numero casuale tra 0 e max
    let x = Math.floor(Math.random() * max);
    //aggiunge al documento il numero estratto prendendolo dalla lista
    document.getElementById("output").innerHTML = numbers[x]
    //toglie il numero dalla lista e assegna un nuovo valore a max per non far estrarre uno stesso numero più volte
    numbers.splice(x, 1)
    max = max - 1
});