
/*створити функцію яка обчислює та повертає площу прямокутника висотою*/

function calc(a, b) {
    return a * b;
}
let calc1 = calc(10, 20)
console.log(calc1);

/*створити функцію яка обчислює та повертає площу кола*/

function calcArea(r,pi =3.14)
{return r*r*pi
}
let calcArea1 = calcArea(20,3.14)
console.log(calcArea1);



/*створити функцію яка обчислює та повертає площу циліндру*/

function cylinder (r,h,pi =3.14) {
    return 2*pi*r*h
}
let S = cylinder(5,8,3.14)
console.log(S);


/*створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше */


function numbers(a,b,action) {
    let res;
    if (action === a > b) {
        res = b;
    } else if (action === a < b) {
        res = a;
    }
    return res;

}
let res =(10, 20)
console.log(res);



/*створити функцію яка  створює блок з текстом. Текст задати через аргумент*/



