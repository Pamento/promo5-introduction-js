console.log('1) Ecrire dans la console tous les chiffres de 1 à 10');
for(let i=1; i<=10;i++){
  console.log(i);
}


console.log('2) Ecrire dans la console tous les chiffres pairs de 1 à 10');
for (let index = 1; index <=10; index += 2) {

    console.log(index);
}


console.log('3) Ecrire dans la console tous les chiffres avec choix de l\'incrémentation de x à y');
const step = 5;
for(let count = 1; count <= 30; count += step){
  console.log(count);
}





console.log('4) Ecrire dans la console les 100 premiers membres de la suite de Fibonacci');

let fibo = [0,1];
for(let count = 2; count < 100; count += 1){
  fibo.push(fibo[fibo.length -1] + fibo[fibo.length -2]);
}
console.log(fibo);









// fibonacci function 
// // F(n) = F(n-1) + F(n-2)

function fibonacci(nth = 0){
  let arr = [];
  for(let count = 2; count < nth; count += 1){
    if(arr.length < 2){
      arr.push(count);
    } else {
    arr.push(arr[arr.length -1] + arr[arr.length -2]);
    }
  }

  return arr;
}

console.log(fibonacci(100))







// let increase=0,
//         a = 1,
//         fibo = 0,
//         variable;

// while (increase <= 7){
//   variable = a;
//   a = a + fibo;
//   fibo = variable;
//   console.log(fibo);
//   increase++;
// }


// let fibo = 0, f = 0, n;
// while (f<=10) {
//   n = f;
//   fibo = f*(n-1) + f*(n-2);
//   console.log("fibo "+fibo);
//   f++;
// }
// // F(n) = F(n-1) + F(n-2)


console.log('5) Faire deviner un nombre donné avec des prompt dans lequel \nl\'utilisateur doit entrer le nombre qu\'il suppose, et selon la supposition de l\'utilisateur, \nlui ré-afficher un prompt avec "c\'est plus" ou "c\'est moins" ou \nalors lui afficher une alert "bravo" s\'il tombe juste');

// let numberCache = Math.floor(Math.random() *100),
//     player;

// function play(){
//   player = Number(prompt('En 8 fois max - Indovines le numero caché entre 1 à 100:'));
//   let l = 0;

//   while (l<=8) {
    
//     if(player < numberCache ){
//       player = Number(prompt('Un peu plus :)'));
//     } else if (player > numberCache){
//       player = Number(prompt('Un peu moin :)'));
//     } else {
//       alert('Bravo ! Trouvé ! T\'es génial !')
//       break;
//     }
//     l++;
//   }
// }
// play();