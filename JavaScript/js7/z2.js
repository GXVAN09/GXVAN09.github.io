let numbers = [1,4,7]
let numbers_old = numbers.slice()
let vgadani = [];

for(i=0;i<5;i++){
  let chiclo = Number(prompt('Вгадайте числа'))

  if(numbers.indexOf(chiclo) == -1){
    numbers.push(chiclo)
  }
  else{
    numbers[numbers.indexOf(chiclo)] = '*'
    vgadani.push(chiclo)
  }
}
if(numbers.length <= 5){
    alert(`Вітаю! Вгадані числа - ${vgadani}`)
}

console.log(numbers_old)
console.log(numbers)