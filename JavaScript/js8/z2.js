let price = 0
let tovar = 0

let rusroulette = true
while(rusroulette == true){
price = price + Number(prompt('Яка ціна товару?'))
tovar++;
rusroulette = confirm('Продовжити покупку?')
}
    console.log(`Ви придбали ${tovar} товарів на загальну вартість - ${price} грн`)