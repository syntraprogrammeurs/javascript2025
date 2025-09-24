let leeftijd = parseInt(window.prompt("Geef uw leeftijd in:"));

if(leeftijd >= 18){
    alert("volwassene");
}else if(leeftijd > 12 && leeftijd <18){
    alert("tiener");
}else{
    alert("kind");
}