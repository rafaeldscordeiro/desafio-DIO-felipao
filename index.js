//declaracao das variaveis
let nomeDoHerio = "Grande Felipao";
let quantidadeDeXP = 10000;
let nivelDoHeroi = "";

if (quantidadeDeXP <= 1000) {
  nivelDoHeroi = "Ferro";
} else if (quantidadeDeXP <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (quantidadeDeXP <= 5000) {
  nivelDoHeroi = "Prata";
} else if (quantidadeDeXP <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (quantidadeDeXP <= 8000) {
  nivelDoHeroi = "Platina";
} else if (quantidadeDeXP <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (quantidadeDeXP <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}

//Ao final deve se exibir uma mensagem
console.log(
  "O Herói de nome " + nomeDoHerio + " está no nível de " + nivelDoHeroi
);
