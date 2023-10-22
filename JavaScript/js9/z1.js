let numbers = [9,11,24,22,41]
let max = numbers[0];
let min = numbers[0];
console.log(numbers)

for(i=0; i < numbers.length;i++){
    if(max < numbers[i]){
        max = numbers[i]
    }

}
console.log(max)

for(i=0; i < numbers.length;i++){
    if(min > numbers[i]){
        min = numbers[i]
    }

}
console.log(min)