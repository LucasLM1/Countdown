//Geralmente pega alguns erros comuns de codificação e lança algumas exceções.
'use strict';

//slice percorre um array e retorna um determinado valor sem interferir no array original
// neste caso ele esta sendo utilizado para cortar dois números da direita para a esquerda, fazendo com que apenas dois numeros apareçam no contador 
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    // barra lateral "/" em js significa divisão
    // simbolo de porcentagem "%" atribui valor de resto
    const qtdSeconds = tempo % 60;

    //quantidade de segundos presentes em um minuto
    const qtdMinutes = Math.floor((tempo % (60 * 60)) / 60);

    //quantidade de horas presentes em um dia
    const qtdHours = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));

    //quanridade de minutos presentes em um dia
    const qtdDays = Math.floor(tempo / (60 * 60 * 24));

    //mostrando na tela os valores restantes da contagem
    seconds.textContent = formatarDigito(qtdSeconds);
    minutes.textContent = formatarDigito(qtdMinutes);
    hours.textContent = formatarDigito(qtdHours);
    days.textContent = formatarDigito(qtdDays);
}

//capturando o evento setado como tempo
const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0 ){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    // Colocando a data em que o evento irá acontecer
    const dataEvento = new Date ('2022-01-28 10:00:00');
    //pegando a data atual em que estamos
    const hoje = Date.now();
    //atualiza o tempo restante a cada segundo
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());