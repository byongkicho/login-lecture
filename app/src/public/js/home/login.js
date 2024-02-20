'use strict';
//  DOM ==> document Object Models

const id = document.querySelector('#id');
const psword = document.querySelector('#psword');
const loginBtn = document.querySelector('button');

console.log(id.outerHTML);
console.log(psword.outerHTML);
console.log(loginBtn.outerHTML);

loginBtn.addEventListener('click',login);

function login () {
    const req = {
        id : id.value,
        psword : psword.value,
    };
    console.log('aaa : ',req);
    console.log('bbb :',JSON.stringify(req));
    fetch('/login', {
        method: 'POST',
        header : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(req),
    });
};