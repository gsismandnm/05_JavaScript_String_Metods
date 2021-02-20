//CONCAT
const isim = "Gökmen";
const yas = 47;
let sonuc;

sonuc = isim + " " + yas

console.log(sonuc)

//bunun yerine şu yazılabilir
sonuc=isim(Concat(" " + yas));

const cumle "Korono \" virüsü yüzünden evden çıkamıyorum.";

//kaçma yöntemi \ sonra yazılır.

//length karekter sayısını verir.
//toLowerCase() küçük harfe çevirir.
//toUperCase () büyük harfe çevirir.
//indexOf (değerin sırasını gösterir. Örnegin Gökan k yazarsanız 2 sonuunu yazar.)
//lastIndexOf (?) sondan kaçıncı olduğunu gösterir.
//charAt indise göre değer döndürür. charAt (3) yazınca Gökan için a getirir.
//["2"]  bu şekilde de yazılabilir charAt yerine kullanılabilir.

//substring () iki parametre arası değeri döndürür.
//slice() iki parametre arası değeri döndürür.
//substring (3) yazarsanız ilk üçü atlar sonrasını getirir. Yani Gökan için an getirir.
//substring (3, 5) yazarsanız denemelerim için emele getirir.
//substring (-3, 5) yazarsanız kelimenin başından başlar 5 harf alır.
//sustring ile slice arasında fark yoktur. Aynı parametreler verilir. Slice'da - değer alamaz. Tek farkı odur. birde slice (-3, -5) gibi alabilir.
//split stringleri diziye döndürür.
//örnek sonuc=cumle.split(" ") yazarsanız cümle içindeki tüm paragrafı string karektere döndürür. cümle artık dizin olur.
// replace stringleri değiştirir.
//örnek sonuc= cumle.replace ("virüsü", "hastalığı") yazarsanız virüsü yerine hastalığı yazar.
//includes string var mı yok mu denetler.
//sonuc=cumle.includes ("örnek") yazarsanız cümle içinde örnek varmı diye bakar yoksa false varsa true döner.


