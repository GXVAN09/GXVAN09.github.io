function add_tovar_fb(){
let tovar = {
    name: document.getElementById('tovar_name').value,
    price: document.getElementById('tovar_price').value,
    mass: document.getElementById('tovar_weight').value,
    img: document.getElementById('image_url').value,
    nayavnist: document.getElementById('availability').checked,
    opis: document.getElementById('description').value,
    type: document.getElementById('type').value,
    developer: document.getElementById('Developer').value,
    benchmark_rating: document.getElementById('bench_rating').value
    
}
db.collection('tovars').doc().set(tovar).then(res=>{
    console.log('не успіх')
})
}
function show(id_block){
    let block = document.getElementById(id_block)
    block.style.display = 'block'
}

function hide(id_block){
    let block = document.getElementById(id_block)
    block.style.display = 'none'
}

function drawTowar(object,nomer){
let tbody = document.getElementById('output_tovar')
tbody.innerHTML +=`
<tr>
                    <td>${nomer}</td>
                    <td>${object.name}</td>
                    <td>${object.opis}</td>
                    <td>${object.type}</td>
                    <td>${object.developer}</td>
                    <td>${object.mass}</td>
                    <td>${object.price}</td>
                    <td>${object.nayavnist}</td>
                    <td>${object.benchmark_rating}</td>
                    <td>${object.img}</td>
                    <th><button onclick="get_one_tovar('${object.id}')">Редагувати товар</button></th>
                    <th><button onclick="delTovar('${object.id}')">X</button></th>
                </tr>

`
} 
function getTovar_from_fb(){
    let tbody = document.getElementById('output_tovar')
    tbody.innerHTML = '';
    let index = 1;
    db.collection('tovars').get().then(res=>{
res.forEach(doc=>{
    let one_tovar = doc.data()
    one_tovar.id=doc.id
    drawTowar(one_tovar,index);
    index++
})
    })
}
getTovar_from_fb()
function delTovar(dbid){
db.collection('tovars').doc(dbid).delete().then(res=>{
    getTovar_from_fb()
})
}

function get_one_tovar(id_tovara){
    db.collection('tovars').doc(id_tovara).get().then(res=>{
        let object_tovar = res.data();
        object_tovar.id = res.id
        console.log(object_tovar.id)
document.getElementById('tovar_name_edit').value = object_tovar.name;
document.getElementById('tovar_price_edit').value = object_tovar.price;
document.getElementById('tovar_weight_edit').value = object_tovar.mass;
document.getElementById('image_url_edit').value = object_tovar.img;
document.getElementById('availability_edit').checked = object_tovar.nayavnist;
document.getElementById('description_edit').value = object_tovar.opis;
document.getElementById('Developer_edit').value = object_tovar.developer;
document.getElementById('type_edit').value = object_tovar.type;
document.getElementById('bench_rating_edit').value = object_tovar.benchmark_rating;
document.getElementById('saving').addEventListener('click',function(){
    let tovar = {
        name: document.getElementById('tovar_name_edit').value,
        price: document.getElementById('tovar_price_edit').value,
        mass: document.getElementById('tovar_weight_edit').value,
        img: document.getElementById('image_url_edit').value,
        nayavnist: document.getElementById('availability_edit').checked,
        opis: document.getElementById('description_edit').value,
        type: document.getElementById('type_edit').value,
        developer: document.getElementById('Developer_edit').value,
        benchmark_rating: document.getElementById('bench_rating_edit').value
    }
    save_changes(object_tovar.id,tovar)})
        show('edit_tovar')
    })

}

function save_changes(argument,object){
    db.collection('tovars').doc(argument).set(object).then(res=>(
        console.log('збережено')
    ))
}