let name = 'Дырявый петух'
let predmet_name = 'Профільна математика'
let ocinki = []
let ocinki_skilki = prompt('Якав кілткісит вагмщ рціерк?')
let suma = 0

for(i=0;i<ocinki_skilki;i++){
    ocinki[i] = Number(prompt('Введіть оцінку'))
    suma = suma + ocinki[i]
}






console.log(`Вітаю ${name}! У вас ${ocinki.lenght} оцінки з предмету ${predmet_name}. Остання оцінка - ${ocinki[ocinki.length-1]} Ваш середній бал з данного предмету - ${suma/ocinki.length}` )