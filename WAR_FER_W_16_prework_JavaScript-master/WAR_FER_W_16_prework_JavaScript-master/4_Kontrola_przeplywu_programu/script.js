// zadanie 1
console.log(" ");
console.log("zadanie 1");

var num1 = 4;
var num2 = 3;

if (num1 > num2)
    console.log("większa jest liczba "+num1);

else
    console.log("większa jest liczba "+num2);

//zadanie 2
console.log(" ");
console.log("zadanie 2");


var x = 5;
var y = 7;
var z = 7;

if ((x > y) && (x > z))
    console.log("największa liczba to " + x);
else if ((y > x) && (y > z))
    console.log("największa liczba to " + y);
else
    console.log("największa liczba to " + z);

//zadanie 3
console.log(" ");
console.log("zadanie 3");


for(var i = 0; i < 10; i++){
    console.log("Lubię Javascript");
}

//zadanie 4
console.log(" ");
console.log("zadanie 4");


var result = 0;

for(var i =1; i<=10; i++){
    result += i;
}
console.log(result);

//zadanie 5
console.log(" ");
console.log("zadanie 5");


var n = 16;

for(var i = 1; i = n; i++){
    n--;
    if (n%2 == 0)
        console.log(n + " parzysta");
    else
        console.log(n + " nieparzysta")
}

// zadanie 6
console.log(" ");
console.log("zadanie 6");


for (var i=0; i<=5; i++) {
    for (var j=0; j<=5; j++) {
        console.log("i= " + i + "," +"j= " +j);
    }
    
}

// Zadanie 7
console.log(" ");
console.log("zadanie 7");


/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}


// zadanie 8
console.log(" ");
console.log("zadanie 8");


var m = 8;
var line = "";
var liczby;

for (var i=0; i < m; i++) {
    line += "*";
    console.log(" ");
    console.log(line);
}

// zadanie 9
console.log(" ");
console.log("zadanie 9");

var b = 5;
var linia = "";
var gwiazdki = "";

for (var i=b; i > 0; i--) {
    gwiazdki = gwiazdki + "*";
    //console.log(" ");

    for (var j=2; j <= 5; j++){
        linia = linia + j ;
        }
    console.log(gwiazdki + linia);
}


// zadanie 10
console.log(" ");
console.log("zadanie 10");


var mnozenie = 3;
var wyswietl = "";

for (var i = 1; i <= (mnozenie); i++){
     //wyswietl = i +" x "+ mnozenie +" = " + (i*mnozenie) + " | ";   
     //console.log(wyswietl)

for (var j = 1; j <= mnozenie; j++){
    a = i +" x "+ j +" = " + (i*j) + " | ";
    console.log(a)
}
}