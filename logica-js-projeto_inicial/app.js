alert('Boas Vindas ao jogo do Numero Secreto');
let numeroSecreto = 8;
console.log(numeroSecreto)
let chute = prompt('Escolha um numero entre 1 e 10');

// se chute for igual ao numero secreto
if (chute == numeroSecreto) {
  alert(`Isso aí , Voce descobriu o numero secreto ${numeroSecreto} `);
} else {
  alert('Voce errou :(')
}