'use strict'

const UserStorage = require('../../models/UserStorage');

const output = {
    home : ( req, res ) => {
        res.render('home/index');
    },
    login : (req, res) => {
        res.render('home/login')
    },
}

const process = {
    login : (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        const users = UserStorage.getUsers('id','psword');
        const response = {};
        if( users.id.includes(id)){
            const index = users.id.indexOf(id);
            if( users.psword[index] === psword) {
                console.log("로그인 성공")
                response.success = true;
                return res.json(response);
            }
        }
        console.log("로그인 실패");
        response.success = false,
        response.msg = "로그인에 실패 하셨습니다."
        return res.json(response);
    }
}

module.exports = { 
    output,
    process,
}