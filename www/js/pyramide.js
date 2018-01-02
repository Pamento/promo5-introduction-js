// // sapin de Jean
// function pyramide(){
//   let nbLignes = 5;
//   let nbColonnes = nbLignes*2-1;
//   for(let ligne =1; ligne<=nbLignes; ligne++){
//     let etoiles = ligne*2-1;
//     let espaces = (nbColonnes - etoiles)/2;
//     let texte = '';
//     for(let espace = 1; espace<=espaces; espace++){
//       texte += ' ';
//     }
//     for(let etoile = 1; etoile<=ligne*2-1; etoile++){
//       texte += '*';
//     }
//     console.log(texte);
//   }
// }
// function sapin(nbEtage){
//   for(let etage = 0; etage < nbEtage; etage++){
//     pyramide(5);
//   }
// }
// sapin(3);







// // pyramide geante
// let nbLignes = 40;
// let nbColonnes = nbLignes *2-1;

// for(let ligne =1; ligne<=nbLignes; ligne++){
//   let etoiles = ligne*2-1;
//   let espaces = (nbColonnes - etoiles)/2;
//   let text = '';

//   for(let espace = 1; espace<=espaces; espace++){
//     text += ' ';
//   }
//   for(let etoile = 1; etoile<=ligne*2-1; etoile++){
//     text += '*';
//   }
//   console.log(text);
// }




// // pyramide en 3 lignes du code
// let width = 10;
// for(let stars=1; stars<=width; stars += 2){
//   console.log(' '.repeat((width-stars)/2)+'*'.repeat(stars)+' '.repeat((width-stars)/2));
// }





// let espace = 4;

// for(let ligne =1; ligne<6; ligne++){
//   let texte = '';
//   for(let x = 1; x <= espace; x++){
//     texte += ' ';
//   }
//   for(let etoile=1;etoile<=ligne*2-1;etoile++){
//     texte += '*';
//   }
//   console.log(texte);
//   espace--;
// }






for( let i = 5; i>0; i--){
let tree = '';
  for( let j = i; j>0; j--){
      tree += '* ';
    console.log(tree);
  }
  // for( let k=j; k>0; k--){
  //   tree += ' °';
  // }
}
let star= '';
for(let k=0; k<5; k++){
  star += ' *';
  console.log(star);
}






// // sapin traditionel
// for(let i = 5; i > 0; i--){
//   let star =''; // ++2
  
//   for(let j = i; j>0; j-- ){
//     star += ' ';
//   }
//   for(let k = i; k<6; k++){
//     star+= '* ';      
//   }

//   console.log(star);
// }



// // a garder dans snipets (couriue effet)

// for( let i = 5; i>0; i--){
//   let tree = '';  
//   for( let j = i; j>0; j--){
//     tree += '* ';
//     console.log(tree);
//   }
// }