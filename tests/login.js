const fetch = require('node-fetch');

const login = async ()=>{
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
    method: 'POST',
    body:JSON.stringify({
        userName: "fakeacccount@fake.com",
        password:"byu1stuDent!"
        })
    })
};
export {login};