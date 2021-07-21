for (let s = 0; s < 5; s++) {
    console.log(s)}


/*Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
*/

/*
let user =[{
    name: `Dima`,
    age: 13,
},
{model:`Camry`}
]
for (const userElement of user.keys(${name}))
{ str1 = str + userElement

}
console.log(str1)*/


let users = [{ name: `Dima`,
    age: 13,
    model:`Camry`}];
for (let user of user.key) {
    for (let key in users){

        console.log(user.key)
    }
}




/*

keys = Object.keys(user)

for (let i = 0, l = keys.length; i < l; i++) {
    console.log (keys [i] + user [keys[i]
        ]
    )
}*/




/*створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.*/

let Random = () => {
    let array = [];
}
 for (let i = 0; i < value; i++){
array.push (Math.floor(Math.random()*num));
 }
