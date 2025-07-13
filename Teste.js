let nome = "Arqueiro Verde";
let QuantXp = 200;

let nivel = "";

if (QuantXp <= 1000) {
  nivel = "Ferro";
} else if (QuantXp <= 2000) {
  nivel = "Bronze";
} else if (QuantXp <= 5000) {
  nivel = "Prata";
} else if (QuantXp <= 7000) {
  nivel = "Ouro";
} else if (QuantXp <= 8000) {
  nivel = "Platina";
} else if (QuantXp <= 9000) {
  nivel = "Ascendente";
} else if (QuantXp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Mensagem de saída 
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);