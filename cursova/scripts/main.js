

window.onload = function(){
    slideOne();
    slideTwo();
}


let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}



function output_tovars(tovar){
    let all_tovars = document.getElementById('all_tovars');
    //all_tovars.innerHTML = "";


            let main_block = document.createElement('div');
            main_block.classList.add('tovar');

            let img_block = document.createElement('div');
            img_block.classList.add('kartinka');

            let img_tovara = document.createElement('img');
            img_tovara.classList.add('foto_tovaru');
            img_tovara.setAttribute('src',tovar.img);
            img_tovara.innerText = tovar.img;

            let availablity_block = document.createElement('div');
            availablity_block.classList.add('availablity');
            availablity_block.innerText = tovar.nayavnist;

            let name_block = document.createElement('div');
            name_block.classList.add('nazva');
            name_block.innerText = tovar.name;
        
            
            let developer_block = document.createElement('div');
            developer_block.classList.add('developer');
            developer_block.innerText = tovar.developer;

            let price_block = document.createElement('div');
            price_block.classList.add('price');
            price_block.innerText = tovar.price;

            let opis_block = document.createElement('div');
            opis_block.classList.add('opis');
            opis_block.innerText = tovar.opis;

            let buy_block = document.createElement('img');
            buy_block.classList.add('buy');
            buy_block.setAttribute("src","buy.svg");

            let pidmenu = document.createElement('div')
            pidmenu.classList.add('pidmenushka')

            img_block.appendChild(img_tovara);
            pidmenu.appendChild(buy_block)
            pidmenu.appendChild(opis_block)

            main_block.appendChild(img_block);
            main_block.appendChild(name_block);
            main_block.appendChild(availablity_block);
            main_block.appendChild(developer_block);
            main_block.appendChild(price_block);
            main_block.appendChild(pidmenu)

            all_tovars.appendChild(main_block);

}



function prosto_vuvid(){
    let all_tovars = document.getElementById('all_tovars');
let filter = JSON.parse(localStorage.getItem("filter"))
    db.collection('tovars').get().then(res=>{
        const masivny = [];
        res.forEach(doc =>{
            let tovar = doc.data();
            tovar.id = doc.id;
            masivny.push(tovar);
        })
        let masivny_filtrat = masivny.slice();
    if(filter != null){
    if(filter.name != ""){
    masivny_filtrat = masivny_filtrat.filter(tovar=>{
        return tovar.name.toLowerCase().includes(filter.name.toLowerCase())
    })
}
if(filter.type != ""){
    masivny_filtrat = masivny_filtrat.filter(tovar=>{
        return tovar.type == filter.type
    })
}
if(filter.maxprice != ""){
    masivny_filtrat = masivny_filtrat.filter(tovar=>{
        return tovar.price <= filter.maxprice
    })
}
if(filter.maxprice != ""){
    masivny_filtrat = masivny_filtrat.filter(tovar=>{
        return tovar.price >= filter.minprice
    })
}
    all_tovars.innerHTML = "";
    masivny_filtrat.forEach(tovar =>{
    output_tovars(tovar)
})    
}else{
    all_tovars.innerHTML = "";
    masivny.forEach(tovar =>{
        output_tovars(tovar)
})
}

})

}
prosto_vuvid()

function saveFilter(){
    let filter = {
        name: document.getElementById('filter_name').value,
        type: document.getElementById('filter_type').value,
        minprice: Number(document.getElementById('slider-1').value),
        maxprice: Number(document.getElementById('slider-2').value)
    }


 localStorage.setItem("filter",JSON.stringify(filter))
 prosto_vuvid()
}


function clearFilter(){
    localStorage.removeItem('filter');
    /*
    document.getElementById('filter_name').value = '';
    document.getElementById('filter_type').value= '';
    document.getElementById('slider-1').value= 0;
    document.getElementById('slider-2').value = 250;*/
    window.location.reload()
}
