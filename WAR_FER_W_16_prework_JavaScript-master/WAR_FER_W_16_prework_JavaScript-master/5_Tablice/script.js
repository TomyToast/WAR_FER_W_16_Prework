// zadanie 1
console.log(" ");
console.log("zadnie1");

var liczby = [1,2,3]
console.log(liczby);

// zadanie 2
console.log(" ");
console.log("zadnie2");

var owoce = ["jablko", "gruszka", "ananas"]
console.log("pierwszy owoc: :"+owoce[0]);
console.log("ostatni owoc: "+ owoce[2]); 

var c = "";

for (var i =0; i <= (owoce.length-1); i++){
    c += owoce[i] + " ";
}
console.log(c);

// zadanie 3
console.log(" ");
console.log("zadnie3");

var liczby = [1,2,3,4,5,6,7,8,9,0];
var sum = 0;

for (var i=0; i < liczby.length; i++){
    sum += liczby[i];
}
console.log(sum);

// zadanie 4
console.log(" ");
console.log("zadnie4");

var numbs = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;

for (var i =0; i < numbs.length; i++ ) {
    if (numbs[i]%2 == 0) {
        sum += numbs[i];
        console.log(numbs[i] + " jest parzysta");
    }
}
console.log("suma parzystych: "+ sum)

// zadanie 5
console.log(" ");
console.log("zadnie5");

var Numbers = [1, 9, 101, 54, 38, 99];
var max = 0;
var i;
for (i = 0; i < Numbers.length; i++) {
  if (Numbers[i] > max) {
    max = Numbers[i];
  }
}
console.log(max)

// zadanie 6
console.log(" ");
console.log("zadnie6");

var arrWithNumbers = [2,4,5,2,3,5,1,2,4];
var firstIndex = 0;
  
for(var i=0; i<arrWithNumbers.length; i++){
    for(var j=0; j<arrWithNumbers.length; j++){
    if(arrWithNumbers[i] === arrWithNumbers[j] && i!=j){
        firstIndex = arrWithNumbers[i];
        break;
    }
  }
  if(firstIndex !== 0) break;
}
console.log(firstIndex);


// zadanie 7
console.log(" ");
console.log("zadnie7");

var numArray = [1,2,3,4,5,6,7,8,9,10];
var s = "";

for (var i = (numArray.length-1); i >= 0; i--) {
    s += numArray[i] + ", ";
}
console.log(s);