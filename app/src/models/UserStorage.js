'use strict'
const fs = require('fs').promises;

class UserStorage {
    static _getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo =  usersKeys.reduce( (newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
    static _getUsers(data, isAll,fields){
        const users = JSON.parse(data)
        if(isAll) return users;
        const newUsers = fields.reduce( (newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    };

    static getUsers(isAll,...fields){
        return fs
        .readFile("./src/databases/users.json")
        .then( (data) => {
            return this._getUsers(data, isAll, fields);
        })
        .catch( console.error); 
    }
    static getUserInfo(id){
        return fs
            .readFile("./src/databases/users.json")
            .then( (data) => {
                return this._getUserInfo(data,id);
            })
            .catch( console.error); 
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        // console.log("users1 : ", users);
        // console.log("users2 : ", JSON.stringify(users));
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        fs.writeFile('./src/databases/users.json',JSON.stringify(users));
        return {success : true };
        
    }
}

module.exports = UserStorage;


    // static getUserInfo(id){
    //     return fs
    //         .readFile("./src/databases/users.json")
    //         .then( (data) => {
    //             const users = JSON.parse(data);
    //             const idx = users.id.indexOf(id);
    //             const usersKeys = Object.keys(users);
    //             const userInfo =  usersKeys.reduce( (newUser, info) => {
    //                 newUser[info] = users[info][idx];
    //                 return newUser;
    //             }, {});
    //             return userInfo;
    //         })
    //         .catch( console.error); 
    // }