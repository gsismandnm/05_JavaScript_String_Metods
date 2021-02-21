//global (genel) scope. Scope ERİŞEBİLİRLİK demektir.
//local (yerel) scope. 
//function içinde bir değişken tanımlıyorsak yani kendi scope varsa local scope, 
//şayet genel bir şey yayınlanacak ise global scope oluşturulur.

//global scope

var isim ='Mahmut';

function getName (){
    var isim2 ='Mehmet';
 i   console.log(isim);
    
}
    console.log(isim);
    console.log(isim2);

    getName();

//üsteki örnekte local içinde scope yok. Alttaki örnekte bir değişken veriyorum.
z
if (1==1) {
    var isim2 = 'Mehmet';
    let isim3 = 'Hasan';
    const isim4 = 'Ahmet';
}i

console.log(isim);
console.log(isim2);
console.log(isim3);
console.log(isim4);

//yazdırırsak isim ve isim 2 yazdırır yani Mahmut, Mehmet yazılır. Diğerlerinde hata verir.

