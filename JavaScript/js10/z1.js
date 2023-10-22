let login = false;
let log = document.getElementById('log')

let text = document.getElementById('text')

if(login){
log.innerHTML = 'Іван'
text.innerHTML = `Вітаю Іван Іванов Іванович! На вашу поштову скриньку
studyLink@gmail.com відправлено лист із підтвердженям.`
}
else{
log.innerHTML = 'Увийти'
text.innerHTML = 'Увийдіть у свій аккаунт або створіть новий'
}

let parol = prompt(`Введіть пароль`)

if(parol == 'Michael Townley'){
    log.innerHTML = 'Іван'
text.innerHTML = `Вітаю Іван Іванов Іванович! На вашу поштову скриньку
studyLink@gmail.com відправлено лист із підтвердженям.`
}else{
    
}