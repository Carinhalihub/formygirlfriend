// CONFIGURAÇÃO DAS DATAS
const dataInsta = new Date(2026, 2, 31, 21, 30, 0); // 31 de Março
const dataNamoro = new Date(2026, 4, 2, 19, 34, 0); // 02 de Maio

function calcularTempo(dataAlvo, prefixoId) {
    const agora = new Date();
    const diferenca = agora - dataAlvo;

    if (diferenca < 0) {
        document.getElementById(`${prefixoId}-days`).innerText = '00';
        document.getElementById(`${prefixoId}-hours`).innerText = '00';
        document.getElementById(`${prefixoId}-minutes`).innerText = '00';
        document.getElementById(`${prefixoId}-seconds`).innerText = '00';
        return;
    }

    const qDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const qHoras = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const qMinutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const qSegundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById(`${prefixoId}-days`).innerText = qDias < 10 ? '0' + qDias : qDias;
    document.getElementById(`${prefixoId}-hours`).innerText = qHoras < 10 ? '0' + qHoras : qHoras;
    document.getElementById(`${prefixoId}-minutes`).innerText = qMinutos < 10 ? '0' + qMinutos : qMinutos;
    document.getElementById(`${prefixoId}-seconds`).innerText = qSegundos < 10 ? '0' + qSegundos : qSegundos;
}

function atualizarTodosOsContadores() {
    calcularTempo(dataInsta, 'insta');
    
    const agora = new Date();
    const difNamoro = agora - dataNamoro;
    
    if (difNamoro < 0) {
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return;
    }

    const nDias = Math.floor(difNamoro / (1000 * 60 * 60 * 24));
    const nHoras = Math.floor((difNamoro % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const nMinutos = Math.floor((difNamoro % (1000 * 60 * 60)) / (1000 * 60));
    const nSegundos = Math.floor((difNamoro % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = nDias < 10 ? '0' + nDias : nDias;
    document.getElementById('hours').innerText = nHoras < 10 ? '0' + nHoras : nHoras;
    document.getElementById('minutes').innerText = nMinutos < 10 ? '0' + nMinutos : nMinutos;
    document.getElementById('seconds').innerText = nSegundos < 10 ? '0' + nSegundos : nSegundos;
}

atualizarTodosOsContadores();
setInterval(atualizarTodosOsContadores, 1000);