
//ARRAY'lER

const sayilar = [12, 15, 6, 61, 56, 44, 81, 120, 2, 56, 78];

const students = [
    {id:1, adi:'Murat', cinsiyeti:'e', bolum:'mimarlık', yasi:21, baslamaTarihi:2010, bitirmeTarihi:2014},
    {id:2, adi:'Ahmet', cinsiyeti:'e', bolum:'mühendislik', yasi:32, baslamaTarihi:2000, bitirmeTarihi:2006},
    {id:3, adi:'Mahmut', cinsiyeti:'e', bolum:'mimarlık', yasi:13, baslamaTarihi:1999, bitirmeTarihi:2008},
    {id:4, adi:'Senem', cinsiyeti:'k', bolum:'mühendislik', yasi:45, baslamaTarihi:1993, bitirmeTarihi:1997},
    {id:5, adi:'Osman', cinsiyeti:'e', bolum:'mühendislik', yasi:61, baslamaTarihi:2080, bitirmeTarihi:1998},
    {id:6, adi:'Emine', cinsiyeti:'k', bolum:'iibf', yasi:17, baslamaTarihi:2017, bitirmeTarihi:2021},
];

//forEach
//for (let i =0; i<students.length; i++){
//    console.log(students[i].adi);
//};

//students.forEach(student => {
 //   console.log (student[i].adi);    
//});

//array.find kullanımı
//sonuc = student.find (item => item.adi ==  'Ahmet');
//console.table (sonuc);


///array.findIndex kullanımı
//sonuc =students.findIndex (item =>) {
 //   return item.id==5
//});

//console.table(sonuc)

//array.filter şartları sağlayanları çağırır.

//sonuc = students.filter(item => (item.cinsiyeti) == 'k');  
//erkek olanları getirir. başka parametrelerde verirseniz onları da sorgular

//console.table(sonuc)

//array.map filter yapmaya yarar. Farkı getirdiği sonuc üzerinde manuple yapılabilir. 
//Aşağıda bitirme tarihlerini 1 artırarak getirir.
//sonuc = students.map (item => item.bitirmeTarihi + 1);
//console.table(sonuc);

// sonuc=students.map(item => {
//     return{
//         ...item,
//         yenibitirmeTarihi : item.bitirmeTarihi + 1
// }
// })
// console.table(sonuc);


//önemli note:
// ...item yazdığınızda id:item.id, adi:item.adi, cinsiyeti:item.cinsiyeti .... yerine geçer.

//array.reduce toplama yapar. hepsini toplar.
// sonuc = sayilar.reduce((toplam, item) => toplam = toplam + item);

// console.table(sonuc);

// sonuc = students.reduce (toplam, item) => {
//     // return toplam = toplam + (item.bitirmeTarihi - item.baslamaTarihi), 0
// });

//array.some sadece bazılarını seçmek için kullanılır.
// sonuc = students.some (item => item.cinsiyeti == 'k')
// console.table(sonuc);

//array.every
//sonuc = students.every(item => item.cinsiyeti == 'k")
//console.table(sonuc)

//array.sort   sıralama yapar. .reverse büyükten küçüğe döndürür.
// sonuc=sayilar.sort((a, b)=> a - b);
// console.log(sonuc);

//array.flat  array içinde başka bir array de olsa hepsini alıp getirir. 
//sayilar.flat (2) yazarsanız iç içe 2 arrayı alır. sayilar.flat (Infinity) yazılırsa kaç tane olursa olsun hepsini alır.

sonuc = sayilar.flat(); 
console.log(sonuc);