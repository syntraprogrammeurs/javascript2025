/*
* vraag 2 prompts waar je elk 1 getal opvraagt aan de gebruiker
* in de console toont je de som van deze 2 getallen.
* */

var getal1 = window.prompt("Geef een getal 1 in:");
var getal2 = window.prompt("Geef een getal 2 in:");
var getal1 = parseInt(getal1);
var getal2 = parseInt(getal2);
console.log("optelling:",getal1+getal2);

console.log("de som van " + getal1 + "+" + getal2 + "=" + (getal1+getal2));


console.log(`de som van ${getal1} + ${getal2} = ${getal1+getal2}`);

console.log(getal1-getal2);
console.log(getal1*getal2);
console.log(getal1/getal2);

//rest van een deling
console.log(getal1%getal2);
//machtsverheffing
console.log(getal1**getal2);



// console.log(parseInt(getal1) + parseInt(getal2))


