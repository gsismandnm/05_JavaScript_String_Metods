
//Stringin uzunluğunu bulmak için

var str="Herhangi bir değer text alır. Çift veya tek tırnak alır."; 

console.log (str.length);
//56 

//Sıfırdan başlayarak dokuzuncu indeksini gösterir. ÖRnekte bir 9'da başlıyor demektir.
var sonuc = str.indexOf ('bir');
console.log (sonuc);
//9

var sonuc=str.indexOf  ('bir, 10');
console.log(sonuc);
// Bu şekilde yazılırsa 9 olduğu için sonuc -1 gelir.


//Search arama deemketir.  indexOf'ta başlama parametresi girilir. Search'te buna ihtiyaç yoktur.
var sonuc=str.indexOf  ('bir');
console.log(sonuc);
// Bu şekilde yazılırsa 9 olduğu için sonuc -1 gelir.

//Slice 1 ile 3 arasındaki değeri getirir.
var sonuc=str.slice  ('1, 3');
console.log(sonuc);
// Bu şekilde yazılırsa er gelir.

//replace bir kelime yada harfi değiştirmek için kullanılır.
var sonuc=str.replace  ("bir", "iki");
console.log(sonuc);
// Bu şekilde yazılırsa bir yerine iki getirilir.

//trim bir kelime yada harfi silmek için kullanılır. Metin sonu boşluklar için de kullanılır
var sonuc=str.trim  ("");
console.log(sonuc);
// Text'ni başındaki yada sonundaki boşlukları siler.

//concat stringleri birleştirmeye yarar.
var sonuc=str.concat  ('abcdef', ' ', 'deneme için yazı', str);
console.log(sonuc);
// Text'ni başındaki yada sonundaki boşlukları siler.






