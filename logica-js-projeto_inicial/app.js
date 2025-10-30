alert('Boas Vindas ao jogo do Numero Secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um numero entre 1 e 10');

// se chute for igual ao numero secreto
if (chute == numeroSecreto) {
  alert(`Isso aí , Voce descobriu o numero secreto ${numeroSecreto} `);
} else {
  if (chute > numeroSecreto) {
    alert(`O numero secreto é menor que ${chute}`)
  } else {
    alert(`O numero secreto é maior que ${chute}`)
  }
}