//function bir işlemi toplu olarak yapmak için kullanılır. Toplu işlemler için tanımlanır.
//İki çeşit function var. Birisi herhangi bir değer döndürmez, diğeri bir değer döndürür. Yani işlem yaptırır.

//PAREMETRİSİZ ÖRNEK
function func1 (){
    //Yapılacak işlemle1
    //Yapılacak işlemle2
    //Yapılacak işlemle3
    //Yapılacak işlemle4
    console.log('func1 calıştı, bir değer dönmedi.')
}

func1();


//PARAMETRELİ ÖRNEK-1
function func2 (param1, param2){
    console.log(param1+param2)
}

func2(3, 5);

//işlem yaptı. 3 ve 5'i topladı sonuç 8 geldi.


//PARAMETRELİ ÖRNEK-2
function func2 (param1, param2 = 0){
    console.log(param1+param2)
}

func2(3);

//şayet sadece 3 yazarsak NaN hatası gelir. Bunu düzeltmek için tanımlama 
//esnasında bir değer atanabilir. Bu örnekte 3+0 = 3 gelir.

//PARAMETRELİ ÖRNEK-3
function login (kullaniciAdi="guest"){
    console.log('Hoşgeldiniz: '+ kullaniciAdi)
}

login ();

//Sonuç guest olarak gelir. Şayet kullanıcı adı girilirse guest yerine o gelir.


//Return yapılması. Bir sonuç dönmesi
function topla (num1, num2){
    var sonuc =num1 + num1,
    return sonuc;
}

var res = topla (3, 6);
console.log(res);


//Return yapılması. Başka örnek
function topla (num1, num2){
    var sonuc ={
        islemSonucu:num1 + num2,
        durum:'başarılı'
    }
    return sonuc;
}

var res = topla (3, 6);
console.log(res);