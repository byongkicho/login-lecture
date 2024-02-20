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
    console.log(req);
};