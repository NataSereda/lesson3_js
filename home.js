
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


let numbers = [10, 22 , 30, 55,68,98,115];
