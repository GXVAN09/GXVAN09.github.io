db.collection('testDB').get().then(res =>{
res.forEach(doc=>{
    let user = doc.data()
    user.dbId = doc.id;
    console.log(user)
})
})