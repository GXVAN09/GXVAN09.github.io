function drawDays(){
let calendar = document.getElementById("calendar");
calendar.innerHTML=''
let bg = '';

let x;
let month = document.getElementById('Misac').value;
if(month == 'Лютий'){ 
    x=29;
}else if(month =='Січень'||month == 'Березень' ||month =='Травень'||month =='Липень'||month =='Серпень'||month =='Жовтень'||month =='Грудень'){
    x=32
}else if(month == 'Квітень'||month =='Червень'||month =='Вересень'||month =='Листопад'){
    x=31
}

document.getElementById('monthname').innerHTML = month
for(i=1;i<x;i++){
if(i%7==0 || i%7==6){
    bg='gray'
calendar.innerHTML += `
<div class="day ${bg}">
    <p align="center">
        ${i}<br> 
        ${month}
    </p>
</div>
    `

    }
else{
    bg='green'
    calendar.innerHTML += `
<div class="day ${bg}">
    <p align="center">
        ${i}<br> 
        ${month}
    </p>
</div>
    `
    }
}
}