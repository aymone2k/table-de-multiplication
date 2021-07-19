// récuperer les données de l'input
var nombre = document.getElementById("nombre");
var error =  document.getElementById("error");
var result = document.getElementById("result");

calcul=()=>{
    var nbre = nombre.value;
    nbre.innerHTML = " "; 
    nbreInt = parseInt(nbre);
    // verification du nombre
        if(isNaN(nbreInt)){
        error.innerHTML = "Merci de saisir un nombre ";// gestion error 
        result.style.display = "none"; 
        return;
        }
    // reset de l'affichage de result
    //result.innerHTML= "";
    result.innerHTML= `<h3>Multiplication par ${nbreInt}</h3>`;
    //affichage du result
    for(let i=0 ; i<11; i++){
        result.innerHTML += `<div class="${i%2 ? 'impair' : 'pair'} result">${nbreInt} x ${i} = ${nbreInt*i} </div>`
        }
    result.style.display = "block";
    }


