AOS.init();
const tempoAtual = new Date();
const ano = tempoAtual.getFullYear();
const dataDoEvento = new Date(`Nov 28, ${ano} 19:00:00`);

const timeStampDoEvento = dataDoEvento.getTime();

const contador = setInterval(function(){
    const dataAagora = new Date();
    const timeStampAgora = dataAagora.getTime();

    const distanciaParaOEvento = timeStampDoEvento - timeStampAgora;

    const diasemMS = 1000 * 60 * 60 * 24;
    const horasemMS = 1000 * 60 * 60;
    const minemMS = 1000 * 60;
    const segemMS = 1000

    const diasParaOEvento = Math.floor(distanciaParaOEvento / diasemMS);
    const horasParaOEvento = Math.floor((distanciaParaOEvento % diasemMS) / horasemMS);
    const minutosParaOEvento = Math.floor((distanciaParaOEvento % horasemMS) / minemMS);
    const segundosParaOEvento = Math.floor((distanciaParaOEvento % minemMS) / segemMS)


    document.getElementById('contador').innerHTML = `${diasParaOEvento}d ${horasParaOEvento}h ${minutosParaOEvento}m ${segundosParaOEvento}s`;
console.log(distanciaParaOEvento)
    if(distanciaParaOEvento < 0){
        clearInterval(contador);
        document.getElementById('contador').innerHTML = "Já aconteceu!"
    }
}, 1000)