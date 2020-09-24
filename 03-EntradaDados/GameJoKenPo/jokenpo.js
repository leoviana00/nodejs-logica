//Crie um game de jo-ken-po. A cada rodada, o jogador vê o menu:

// Escolha sua jogada: 1 - Papel 2 - Pedra 3 - Tesoura

// O jogo lê a opção do jogador e verifica se é válida.
// Se for inválida, o jogador perde a rodada e o jogo acaba. Se for válida, o computador escolhe uma resposta aleatória, que é mostrada ao jogador. 
// Se o jogador ganhar, ele pode jogar mais uma rodada e sua pontuação aumenta. O jogo acaba quando o jogador perde uma rodada. 
// A pontuação total é mostrada no fim do jogo.
var readlineSync = require('readline-sync');
console.log("Game de jo-ken-po ");
var opcoes = ["Papel", "Pedra", "Tesoura"];
var gameover = false;
var pontuacao = 0;
do {
    console.log("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura");
    var opcao = (readlineSync.question());
    if(opcao > 0 && opcao < 4) {
        var resp = Math.ceil(Math.random()*3);
        console.log("O computador jogou " + opcoes[resp-1]);
        if (opcao == resp) {
            console.log("A rodada empatou!");
        }
        else if (
            (opcao == 1 && resp == 2) ||
            (opcao == 2 && resp == 3) ||
            (opcao == 3 && resp == 1)) {
            console.log("Você ganhou!");
            pontuacao++;
        }
        else {
            gameover = true;
        }
    }
    else {
        gameover = true;
    }
} while (gameover === false);
console.log("Você perdeu! A sua pontuação foi de " + pontuacao);