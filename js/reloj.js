const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    let horaActual = `${hr}:${min}:${seg}`;
    document.getElementById('hora').innerHTML = horaActual;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //document.getElementById('hora').classList.toggle('animarHora');
}

const formatoHora = (hora) => {
    if(hora < 10)
        hora = '0' + hora;
    return hora;
}

const relojAnalogo = () => {
    let hor_ = document.getElementById('hor_');
    let min_ = document.getElementById('min_');
    let seg_ = document.getElementById('seg_');

    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();

    let calc_hor = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (seg / 10);
    let calc_seg = seg*6;

    hor_.style.transform = 'rotate(' + calc_hor + 'deg)';
    min_.style.transform = 'rotate(' + calc_min + 'deg)';
    seg_.style.transform = 'rotate(' + calc_seg + 'deg)';
    
}

function cambiar(){
    let relojAnalogo = document.getElementById('clock');
    let relojDigital = document.getElementById('reloj');
    if(relojDigital.style.display === "none"){
        relojAnalogo.style.display = "none";        
        relojDigital.style.display = "block";
    }
    else {
        relojAnalogo.style.display = "block";        
        relojDigital.style.display = "none";
    }
    
}


setInterval(mostrarReloj, 1000);
setInterval(relojAnalogo, 1000);