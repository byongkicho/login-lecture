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
    static getUsers(...fields){
        const newUsers = fields.reduce( (newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    static getUserInfo(id){
        return fs
            .readFile("./src/databases/users.json")
            .then( (data) => {
                return this._getUserInfo(data,id);
            })
            .catch( console.error); 
    }
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

    static save(userInfo) {
        users.id.push(userInfo.id);
        users.names.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true};
    }
}

module.exports = UserStorage;
