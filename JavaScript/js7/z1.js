let pass = 1111
let trys = 3
for(i=0;i<3;i++){
   let pas_try = prompt(`Введіть пароль. Залишилось спроб - ${trys}`)
    if(pass != pas_try){
        trys--
    }else{
        break
    }

 if(trys == 1){
    alert('У вас залишилась остання спроба. Пароль 0001')
 }   

}