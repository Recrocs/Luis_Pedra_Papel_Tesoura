var regras = document.getElementsByClassName("regras")[0];

function mostraregras() {
    regras.style.display = "flex";
}

function fecharegras() {
    regras.style.display = "none";
}

var jogo = document.getElementsByClassName("jogo")[0];
var selecao = document.getElementsByClassName("gameplay")[0];
var teste = document.getElementsByClassName("teste")[0];
var opcao = document.getElementsByClassName("opcao")[0];
var pedra = document.getElementsByClassName("pedra")[0];
var tesoura = document.getElementsByClassName("tesoura")[0];
var papel = document.getElementsByClassName("papel")[0];
var lagarto = document.getElementsByClassName("lagarto")[0];
var spock = document.getElementsByClassName("spock")[0];
var teste1 = document.getElementsByClassName("teste1")[0];
var resultado = document.getElementsByClassName("result")[0];

var refs = [pedra, papel, tesoura, lagarto, spock];

var pontuacao = document.getElementsByClassName("pontuacao")[0];
var playAgain = document.getElementsByClassName("fim")[0];
var score = 0;
var buttonRegras = document.getElementsByClassName("regras-button")[0];

function jogar(num) {
    jogo.style.cssText = "animation: opacidade 0.5s linear; animation-direction:reverse;"

    setTimeout(() => {
        jogo.style.display = "none";
    }, 500);

    setTimeout(() => {
        selecao.style.display = "flex";
    }, 500);

    selecao.style.cssText = "animation: opacidade 1.5s linear;"
    buttonRegras.style.display = "none";
    switch (num) {
        case pedra:
            teste.innerHTML = pedra.outerHTML
            teste.value = pedra.value
            break;
        case papel:
            teste.innerHTML = papel.outerHTML
            teste.value = papel.value
            break;
        case tesoura:
            teste.innerHTML = tesoura.outerHTML
            teste.value = tesoura.value
            break;
        case lagarto:
            teste.innerHTML = lagarto.outerHTML
            teste.value = lagarto.value
            break;
        case spock:
            teste.innerHTML = spock.outerHTML
            teste.value = spock.value
            break;
        default:
        break;
    }

    var random = Math.floor(Math.random() * 5);
    var house = refs[random];
    teste1.innerHTML = house.outerHTML
    teste1.value = house.value

    setTimeout(() => {
        Resolucao()
    }, 500);
}

function Resolucao() {
    if (teste.value == "pedra" && teste1.value == "tesoura" || teste.value == "pedra" && teste1.value == "lagarto" || teste.value == "tesoura" && teste1.value == "papel" || teste.value == "tesoura" && teste1.value == "lagarto" || teste.value == "papel" && teste1.value == "spock" || teste.value == "papel" && teste1.value == "pedra" || teste.value == "lagarto" && teste1.value == "papel" || teste.value == "lagarto" && teste1.value == "spock" || teste.value == "spock" && teste1.value == "pedra" || teste.value == "spock" && teste1.value == "tesoura") {
        resultado.innerHTML = "Você Ganhou!!";
        score += 1;
        pontuacao.innerHTML = score;
        teste.style.cssText = "animation: luzDeFundo 1.5s ease infinite;";
    } else if (teste.value == "pedra" && teste1.value == "papel" || teste.value == "pedra" && teste1.value == "spock" || teste.value == "tesoura" && teste1.value == "pedra" ||teste.value == "tesoura" && teste1.value == "spock" || teste.value == "papel" && teste1.value == " lagarto" || teste.value == "papel" && teste1.value == "tesoura" || teste.value == "lagarto" && teste1.value == "tesoura" || teste.value == "lagarto" && teste1.value == "pedra" || teste.value == "spock" && teste1.value == "lagarto" || teste.value == "spock" && teste1.value == "papel" ) {
        resultado.innerHTML = "Você Perdeu 😥";
        teste1.style.cssText = "animation: luzDeFundo 1.5s ease infinite";
    } else {
        resultado.innerHTML = "Empate";
        teste.style.cssText = "animation: luzDeFundo 1.5s ease infinite"
        teste1.style.cssText = "animation: luzDeFundo 1.5s ease infinite"
    }

    playAgain.style.display = "flex";
}

function reset() {
    jogo.style.display = "flex";
    selecao.style.display = "none";
    resultado.innerHTML = "";
    playAgain.style.display = "none";
    teste.style.cssText = "animation: '' ";
    teste1.style.cssText = "animation: '' ";
    jogo.style.cssText - "''";
    buttonRegras.style.display = "block";
}
