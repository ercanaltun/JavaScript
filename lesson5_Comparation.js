//-->  &&  "ve" ile bütün değişkenler aynı değerde ise olumlu döner

x=false;
y=true;
z=true;
m=false;

const comparation1= true && null;   
console.log(comparation1);    //null döndürür

const comparation2= y && z && 5;
console.log(comparation2);   // 5 döndürür

const comparation3= y && m && z && 5;
console.log(comparation3);   // false  döndürür.Çünkü true dışında gördüğü ilk değeri verir

// || "veya" ile bi rdeğişkeni bulması yeterli

const comparation4= y || m || x || 5;
console.log(comparation4);   //true döner.Çünkü ilk true yu görünce diğerlerine hiç bakmaz