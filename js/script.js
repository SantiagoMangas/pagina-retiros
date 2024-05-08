simplyCountdown('#cuenta', {
    year: 2024, // required
    month: 4, // required
    day: 12, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Dia', plural: 'Dias' },
        hours: { singular: 'Hora', plural: 'Horas' },
        minutes: { singular: 'Minuto', plural: 'Minutos' },
        seconds: { singular: 'Segundo', plural: 'Segundos' }
    },
    plural: true, //Para los plurales
    inline: false, //si queremos que sea en una sola linea o en columna : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false es decir el tiempo de tu computadora o el tiempo de tu servidor es decir tiempo universal coordinado
    onEnd: function() { 
        return; 
    }, //Envia un mensaje a gusto que quieras que se muestre al finalizar el tiempo
    refresh: 1000, // refresca cada segundo el contador
    sectionClass: 'simply-section', //section css class 
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: true, // true para 05 dias 04 horas 02 minutos y false para 5 dias 4 horas 2 minutos
    countUp: false
});