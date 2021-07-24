/*Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)*/


class User {
    constructor (id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;

    }


}
let users = [new User(1, `Natalia`, `Sereda`, `nat@gmail.com`, `02123464`),
    new User(2, `Olia`, `Mok`, `sdvgsd@gmail.com`, `021564`),
    new User(3, `Kate`, `Dulk`, `nsegfsdt@gmail.com`, `0211164`),
    new User(4, `Sofia`, `long`, `dss@gmail.com`, `021311164`),
    new User(5, `Lilia`, `Short`, `sdvfsd@gmail.com`, `02333564`)

];


let filter2 = users.filter(user => user.id %2===0);

console.log(filter2)

users.sort((a,b) => b.id - a.id)

console.log(users)


console.log()
console.log()
