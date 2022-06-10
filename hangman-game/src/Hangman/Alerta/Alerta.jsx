import React, { useEffect } from 'react'
import { checaVitoria } from '../../Helpers/Hangman';

const Alerta = ({ letrasCorretas, letrasErradas, palavraSelecionada, setJogavel, jogarNovamente }) => {
    let mensagemFInal = '';
    let RevelarPalavraAoFinal = '';
    let jogavel = true;

    if( checaVitoria(letrasCorretas, letrasErradas, palavraSelecionada) === 'vitoria') {
        mensagemFInal = 'Parabéns! Você venceu! :D';
        jogavel = false;
    } else if( checaVitoria(letrasCorretas, letrasErradas, palavraSelecionada) === 'derrota' ) {
        mensagemFInal = 'Infelizmente você perdeu. :(';
        RevelarPalavraAoFinal =  `... A palavra era: ${palavraSelecionada}`;
        jogavel = false;
    }

    useEffect(() => setJogavel(jogavel));

    return (
        <div className="popup-container" style={mensagemFInal !== '' ? {display:'flex'} : {} }>
            <div className="popup">
                <h2> { mensagemFInal } </h2>
                <h3> { RevelarPalavraAoFinal } </h3>
                <button onClick={jogarNovamente}>Jogar novamente</button>
            </div>
        </div>
    )
}

export default Alerta;
