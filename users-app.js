const users=require('./users');

async function showData(){
    let res=await users.all();
    console.log(res.data);
}
showData();
console.log('finished')