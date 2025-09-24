var sterretje= "*";
var aantalLijnen = parseInt(window.prompt("Hoeveel lijnen met sterretjes?"));
for(let i= 1; i<=aantalLijnen; i++){
    console.log(sterretje);
    sterretje = sterretje + "*";
}