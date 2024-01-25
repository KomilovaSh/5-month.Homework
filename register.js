import { validate, getData } from "./function.js";

const button=document.querySelector('#butt0n');
const firstname=document.querySelector('#firstname');
const lastname=document.querySelector('#lastname');
const year=document.querySelector('#year');
const password=document.querySelector('#password');
const repassword=document.querySelector('#repassword');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const form=document.querySelector('#form');



button && button.addEventListener('click', function(e){
    e.preventDefault();

    if(validate({firstname, lastname, year, password, repassword, username})){
       let user={
        firstname: firstname.value,
        lastname: lastname.value,
        year: year.value,
        username: username.value,
        password: password.value,
        repassword: repassword.value,
        email: email.value
       }
       let data=getData();
       data.push(user);
       localStorage.setItem('users', JSON.stringify(data));
       
       let currentUrl=window.location.href;
let pageIndex=currentUrl.search('pages');
const domain=currentUrl.substring(0, pageIndex);
form.reset();
      
       window.location.assign(`${domain}pages/login.html`);
    }
})