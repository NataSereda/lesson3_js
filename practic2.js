/*--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/
/*

let num  = [2,4,8,9,10];

console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

let string = [`winter`, `spring`,`summer` ,`autumn`];
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);

let all =[2,6,`apple`,true];
console.log(all[0]);
console.log(all[1]);
console.log(all[2]);
console.log(all[3]);
*/


/*Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/
/*
let names = [
    [`Olia`],
    [`Orusia`],
    [`Maria`]
];
    for (const name1 of names) {
        console.log(name1)
    }
*/

    /*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/


/*let animals = [
    {name:`panda`, color: `black`, status: true},
    {name:`monkey`, color: `grey`, status: false}
];
document.write(`<div>`);
for (const animal of animals) {
    document.write(`<div> ${animal.name} - ${animal.color} - ${animal.status}</div>`)
}
document.write(`</div>`)*/

/*for (let i = 0; i < 10; i++) {
    document.write(`<div>text ${i}
</div>`)

}*/

/*За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/


/*За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
/*

let i = 0;
while (i<20) {
    document.write(`<h1>text ${i}</h1>`)
    i++;
}*/



/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

/*
let numbers = [1,2,3,4,5,6,7,8,9,10];
for (const number of numbers) {
    console.log(number);
}
*/



/*Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/

/*let string = [`1`, `2`,`3`, `4`,`5`, `6`];
for (const string1 of string) {
    console.log(string1)

}*/

/*Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі*/

/*let text = [1,2,3,4, `fefef`,`lsfclsvl`, false];
for (const textElement of text) {
    console.log(textElement)
}*/


/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },*/

/*

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            usersWithCities.push
            (
                {id:user.id, name: user.name, age: user.age, status: user.status,
                    address: {
                    userId: city.user_id,
                        country: city. country,
                        city: city.city
                    }
            }
            )
        }
    }
}
console.log(usersWithId);
console.log(citiesWithId);
console.log(usersWithCities);
*/

/*Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.*/

let text = [`a`,`b`,`c`];
text.push(1,2,3);
console.log(text);

/*Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.*/
 let ex = [1,2,3];
 ex.unshift(4,5,6,);
 console.log(ex);

 /*Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].*/

let numb=[1,2,3,];
numb.reverse();
console.log(numb)


/*Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].*/

let numbers =  [1, 2, 3, 4, 5];
let slice = numbers.slice(3,5)
console.log(slice);

/*Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].*/
let numb1 =  [1, 2, 3, 4, 5];
let slice1 = numb1.slice(0,2)
console.log(slice1);


/*Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
*/
let mas2 = [1, 2, 3, 4, 5];
mas2.splice(3,5, `a`,`b`,`c`);
console.log(mas2)

/*Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.*/

let june = [1,2,3];
june.push(4,5,6,)
console.log(june)

/*Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними*/

let numb6 = [5,9,10,40,66,8,7,3,26,20];

for (let i = 0; i < numb6.length; i++)
{
 if ((numb6[i] % 2) === 0)
 {
  console.log(numb6[i]);
 }
}

/*Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
*/
let numb3 = [22,30,40,50];
let numb4 = [];
numb4.push(numb3);
console.log(numb4);

/*Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/
let mas = [ 'a', 'b', 'c'];
let  str = "";
for (u = 0; u < mas.length; u++){
 str = str + mas[u]
}
console.log(str);
/*
 Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.*/
while (u < mas.length){

 str = str + mas[u];
 u++;
};
console.log(str);

/*Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/
text1 = [ 'a', 'b', 'c'];
str = "";
for (const string of text1){
 str = str + string;
}
console.log(str);


/*створити функцію яка заповнює масив рандомними числами
* (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
*/
/*let gen = [];
for ( i = 0; i < 20; i++ ) {
 gen.push( Math.round( Math.random() * 100 ));
}
console.log(gen)*/
 /*створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  EXAMPLE:
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9]*/

const sumArray = (array1,array2) => {
 let newArray = [];
 for (let i = 0; i < array1.length; i++) {
  newArray.push(array1[i] + array2[i]);
 }
 return newArray;
}
const returnArrayConst = sumArray([1,2,3,4],[2,3,4,5]);
console.log(returnArrayConst);