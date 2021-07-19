/*--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

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


/*Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/
let names = [
    [`Olia`],
    [`Orysia`],
    [`Maria`]
];
    for (const name1 of names) {
        console.log(name1)
    }


    /*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/


let animals = [
    {name:`panda`, color: `black`, status: true},
    {name:`monkey`, color: `grey`, status: false}
];
document.write(`<div>`);
for (const animal of animals) {
    document.write(`<div> ${animal.name} - ${animal.color} - ${animal.status}</div>`)
}
document.write(`</div>`)

/*За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/







