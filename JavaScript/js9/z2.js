let gta3 = [9,1,1,24,24,2,0,0,1]
let gta4 = []

console.log(gta3)

for(i=0; i < gta3.length;i++){
    if(gta4.indexOf(gta3[i]) == -1){
        gta4.push(gta3[i])
    }
}
console.log(gta4)