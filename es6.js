//var ile aynı değişken isimleri verilebiliyor.
//let ile yazdığınızda hata veriyor. Aynı isim verilemiyor.
//const ile yazdığımızda değişiklik yapılmasına izin verilmez.

let degisken_1=20;
const degisken_2=20;

//şeklinde olsun.
degisken_1 =30;
degisken_2 = 40;
// yazarsanız değişken 2 const olduğu için değişiklik yapmasına izin vermez.


//arrow functionları const ile değer atadıktan sonra arrowFunction atanabiliyor.


function login = function(){
    console.log ('merhaba');
}
    login ()

//const  ile birçok satır tek satırda yazılabilir.
    const topla = (num1, num2) => num1 + num2
const sonuc = topla (3, 5)

//Stringleri birleştirme

const adi='Mahmut';
const soyadi= "KILIÇ";

console.log ('Merhaba. adim:'adi + 'soyadim:'+ soyadi);

//yazıldığında Herhaba adım Mahmut soyadım: KILIÇ getirir.

//BACK TICK

console.log ('Merhaba adim ${adi} soyadım ${soyadi}');

//YAZARSANIZ CONSOLE.LOG İLE AYNI İŞLEMİ YAPAR.


const {adi : names, soyadi:SurName} = Obj;
console.log(names);


//SPREAD OPERATÖR

const arr =['abc', 'def', 'ghi'];
console.log (arr);  // burada arr içindeki değeri alır. 'abc', 'def", 'ghi' gelir.
console.log (...arr);  // burası arr içindeki değerlerin value değerini alır. abc, def, ghi gelir.


const arr =['abc', 'def', 'ghi'];
const arr2 =[...arr, 12, 'wer']; // olursa yeni ir array atar ve içine üstteki üç ile birlikte iki değeride alıp arr yapar.

//functionlarda const kullanımı

const func = (...arg) => {
    console.log(arg);
}
func(12, 'XXX', ['asd']);



