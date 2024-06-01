let name = prompt('Як вас звати?');
let tovar = prompt('Що вам треба купити?');
let garant_date = 1;
let cost = 20000;
let delivery = 3000;
let garant = 5000;
let kilkist = prompt('Скільки вам треба товару?')
let total_price = (cost + garant)*kilkist + delivery;


console.log(`Вітаю ${name}! Ваше замовлення: 
${tovar} За ціною ${cost} у кількості ${kilkist}
Гарантія на ${garant_date} рік вартістю ${garant} у кількості ${kilkist}
Вартість доставки ${delivery} 
принято та буде оброблено протягом 24 години.

Загальна вартість замовленя ${total_price} `)