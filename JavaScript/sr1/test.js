let number = 0;
let name = prompt('Як вас звати?')
alert(`Привіт,${name} Переходь до виконання тесту`)
if (prompt('Коли народився Чехов?') == '1860р'){
number = number + 1
}else{

}
if (prompt('Як помер Гітлер?') == 'Самогубство'){
number = number + 1
}else{
    
}

if (prompt('Скільки років Кім Чен Ину на момент 2013 року?') == '29'){
number = number + 1
}else{
    
}

if (prompt('Коли була заснована Японія?') == '660р до нашої ери'){
    number = number + 1
}else{
    
}
if (prompt('Коли почалась перша світова війна?') == '1914р'){
number = number + 1
}else{
        
}
    
if (prompt('Коли помер Чехов?') == '1904р'){
number = number + 1
}else{
        
}

if (confirm('Сталін помер у 1953 році?') == true){
number = number + 2
}else{

}
if (confirm('Голодомор тривав 2 роки?') == false){
number = number + 2
}else{
    
}
if (prompt('Назвіть усі океани світу через кому') == 'Північно-Льодовитий, Північно-Атлантичний, Південно-Атлантичний, Індійський, Північно-Тихий, Південно-Тихий та Південний океани.'){
number = number + 1
}else{

}
alert('Невеличка перерва')
confirm('Ти готов')
alert('Я тебе не питав чи ти готов')

if (prompt('Що за чоловік 83 роки отримав оскар у 2020 році') == 'Ентоні Гопкінс'){
number = number + 1
}else{
            
}
alert(`${name} Ти отримав ${number} балів`)
alert('Все іди гуляй')