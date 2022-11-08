// grabbing all the necessary stuffs
const foodFromDom = document.getElementById("foodFromDom")
const tipFromDom = document.getElementById("tipFromDom")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")
const fakas = document.querySelectorAll(".faka")
const peoples = document.querySelector(".peoples")

// this will be changed so thats why its "let"
let numberOfPeople = Number(numberOfPeopleDiv.innerText)



// main activity starts....

const calculateTip = () => {
  const food = Number(foodFromDom.value)
  const tipPercentage = Number(tipFromDom.value) / 100
  const tipAmount = food * tipPercentage
  const total = food + tipAmount
  const perPersonTotal = total / numberOfPeople
  perPersonTotalDiv.innerText = `${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
  const now = numberOfPeople += 1
  numberOfPeopleDiv.innerText = now
  calculateTip()
}

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return 
  }
  
  const now = numberOfPeople -= 1
  numberOfPeopleDiv.innerText = now
  calculateTip()
}

const reset = () => {
  fakas.forEach(faka => {
    faka.value = ""
    faka.innerText = "0.00"
  })
  peoples.innerText = "1"
}