"use strict";
let machinAsk='',arr = [], stopFunction = '', loop = true;



while (loop) {
    machinAsk = prompt('Options: start,show,length,reset,stop\n Enter command :');
    switch (machinAsk) {
      case 'start':
      start();
        break;
      case 'show':
      show();
        break;
      case 'length':
      length();
        break;
      case 'reset':
        reset();
        break;
      case 'stop':
        stopFunction = 'stop';
        loop = false;
      default:
        break;
    }
  }

function start(){
  if(true){
    let num = prompt('Entre la chifre: NOMBRE des nom à rentrer dans le tableau :');
    for( let i=0; i<num; i++){
      arr.push(prompt('Le mot que vous voulez metre en gard ?\nJe suis à l\'ecoute :')); 
    }
  }
}

function show(){
  arr.forEach(nom => {console.log(nom);});      
}

function length(){
  console.log(arr.length);
}

function reset(){
  arr = [];
}




/*
II. Le but est maintenant de rajouter des commande qu'on passera dans le prompt pour dire au script quoi faire :
- start : demande 3 valeurs via des prompts,  comme on a fait avant
- show : itère sur le tableau comme on a fait avant
- length : affiche en console la taille du tableau
- reset : vide le tableau
- stop : arrête le script (edited)

1) A partir de maintenant, le code ne fera des choses 
  qu'à partir du moment où il a reçu l'instruction voulu via un prompt,
  il va donc falloir commencer par faire une boucle infinie qui nous fera 
  un prompt à chaque tour pour nous demander l'instruction voulue (avec un while par exemple) (edited)
2) Avec des conditions, on doit vérifier 
  l'instruction passée au prompt par l'utilisateur 
  et faire quelque chose avec, commencer par faire un console.log différent pour chaque instruction
3) Avec des couper-coller remplacer les console.log bidon de 
  l'étape précédente par les instructions voulues (qu'on a donc déjà faites auparavant, dans le I.)
4) Faire en sorte de pouvoir arrêter a boucle infinie lorsque l'utilisateur dit stop
*/