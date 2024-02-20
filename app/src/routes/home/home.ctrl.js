'use strict'

const users = {
    id : ["woorimIT", "나개발", "김팀장"],
    psword :["1234", "1234", "123456"],
};

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
        
        if( users.id.includes(id)){
            const index = users.id.indexOf(id);
            if( users.psword[index] === psword) {
                console.log("로그인 성공")
                return res.json({
                    success : true,
                });
            }
        }
        console.log("로그인 실패")
        return res.json({
            success: false,
            msg : "로그인에 실패 하셨습니다."
        })
    }
}

module.exports = { 
    output,
    process,
}