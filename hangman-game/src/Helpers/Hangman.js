export function exibirNotificacao(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

export function checaVitoria(letrasCorretas, letrasErradas, palavra) {
    let status = 'vitoria';

    //check for win:
    palavra.split('').forEach(letra => {
        if(!letrasCorretas.includes(letra)) {
            status = '';
        }
    })

    //check for loss:
    //we oly have 6 chances
    if(letrasErradas.length === 6) {
        status = 'derrota';
    }

    return status;
}