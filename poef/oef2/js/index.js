/*
Je vraagt het geboortejaar van de gebruiker (bijv. 1973).
Je vraagt ook het huidige jaar (bijvoorbeeld 2025)
Je laat de pc uitrekenen hoeveel jaar je bent en doet de onderstaande controle:
Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
 */
var geboorteJaar = window.prompt("Geef je geboortejaar in:");
var huidigeJaar = window.prompt("Geef je huidige jaar in:");
if(huidigeJaar - geboorteJaar >= 18){
    console.log(`u bent ${huidigeJaar - geboorteJaar} jaar u mag deelnemen`);
}else{
    console.log(`u bent ${huidigeJaar - geboorteJaar} jaar u mag NIET deelnemen`);

}




