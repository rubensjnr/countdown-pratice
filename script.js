import Countdown from "./countdown.js";


const horasParaNatal = timeInf =>{
    const time = new Countdown(timeInf);
    const h1 = document.querySelector('h1');
    setInterval(()=>{
        h1.innerHTML = `Para a data informada, faltam: ${time.total.days} Dias,
        ${time.total.hours}:${time.total.minutes}:${time.total.seconds}`
    }, 1000);
}

horasParaNatal('24 December 2023 23:59:59 GMT-0300');

