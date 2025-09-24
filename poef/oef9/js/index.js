/*
zelfstandige, arbeider, bediende, ambtenaar
werkt heel veel, werkt veel, werkt, duuuh
* */

//
// let keuze = parseInt(window.prompt("1=zelfstandige, 2=arbeider, 3=bediende,4=ambtenaar"));
//
// if(keuze === 1){
//     alert("werkt heel veel")
// }else if(keuze === 2){
//     alert("werkt veel")
// }else if(keuze === 3){
//     alert("werkt")
// }else if(keuze === 4){
//     alert("duuuh");
// }else{
//     alert("everything else");
// }

let keuze = parseInt(window.prompt("1=zelfstandige, 2=arbeider, 3=bediende,4=ambtenaar"));

switch(keuze){
    case 1:
        alert("werkt heel veel");
        break;
    case 2:
        alert("werkt veel");
        break;
    case 3:
        alert("werkt");
        break;
    default:
        alert("duuh");

}