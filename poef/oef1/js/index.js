/* Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
Schrijf een prompt die de leeftijd vraagt en zorg ervoor dat je een number uitkomt */

var leeftijd = window.prompt("Geef de leeftijd in:");

if(leeftijd >= 18){
    console.log(`u bent ${leeftijd} jaar u mag deelnemen`);
}else{
    console.log(`u bent ${leeftijd} jaar u bent te jong`);
}

