function calculateTip() {
// grabbing stuff from DOM
let foodfromDom = document.getElementById('foodFromDom')
let foodfromDomWithValue = document.getElementById('foodFromDom').value
let tipPercentageFromDom = document.getElementById('tipPercentageFromDom').value
let totally = document.getElementById('totally')

// Doing Bad stuff
let foodAmount = Number(foodfromDomWithValue);
let tipPercentage = Number(tipPercentageFromDom) / 100;
let tipAmount = Math.round(foodAmount * tipPercentage)
let totalBill = foodAmount + tipAmount

// console.logging all this shit ...
console.log(`
--------------------------------
--------------------------------
Food was: $${foodAmount}
Tip was: ${tipPercentage * 100}%
Tip Amount: ${tipAmount}
Total Bill: ${totalBill}
---------------------------------
---------------------------------
`)

// fucking the DOM
totally.innerHTML = totalBill

if (totalBill == 0) {
  totally.innerHTML = `0.00`
}


// returning ${totalBill}
return totalBill
}

function reset() {
// grabbing some shit ...
let ppl = document.getElementById('ppl')
const fakas = document.querySelectorAll('.faka')
const remover = document.getElementById('resetButton')
remover.onclick = () => {
   fakas.forEach(faka => {
      faka.value = ""
      faka.innerText = "0.00"
      ppl.innerText = '1'
   })
}

/*console.log(`reset successful`)*/
}

function addPeople(){
let ppl = document.getElementById('ppl')
let atPresent = ppl.innerText ++

let afterAdding = calculateTip() / atPresent

let totally = document.getElementById('totally')
totally.innerText = afterAdding
}

function removePeople(){
let ppl = document.getElementById('ppl')
alert(JSON.stringify(ppl))
if (ppl <= 1) {
  return 
}

let atPresent = ppl.innerText --

let afterRemoving = calculateTip() / atPresent

let totally = document.getElementById('totally')
totally.innerText = afterRemoving
}
