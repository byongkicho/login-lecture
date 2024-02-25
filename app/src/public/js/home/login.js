'use strict';
//  DOM ==> document Object Models

const id = document.querySelector('#id');
const psword = document.querySelector('#psword');
const loginBtn = document.querySelector('#button');

console.log(id.outerHTML);
console.log(psword.outerHTML);
console.log(loginBtn.outerHTML);

loginBtn.addEventListener('click',login);

function login () {
    if( !id.value) return alert("아이디를 입력해 주세요")
    if(!psword.value) return alert("비밀번호를 입력해 주세요.");
    const req = {
        id : id.value,
        psword : psword.value,
    };
    // console.log(req)
    fetch('/login', {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(req),
    })
    .then( (res) => res.json())
    .then( (res) => {
        if (res.success) {
            location.href = "/";
        } else {
            if(res.err) return alert(res.err)
            alert(res.msg);
        }
    })
    .catch( (err) => {
        console.error( "로그인 중 에러 발생");
    });
};