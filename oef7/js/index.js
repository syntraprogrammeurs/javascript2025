/*
* som van de eerste 10 getallen met for-loop
* */
var som = 0;
for(let teller=1;teller<=10;teller = teller + 1){
    let getal = parseInt(window.prompt(`Geef een getal ${teller} in:`));
    som = som + getal;
    console.log(som);
}

