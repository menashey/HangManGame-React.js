import React, { useEffect, useState } from "react";
import "./Jogo.css"
import Alerta from "../Alerta";
import Figura from "../Figura";
import Header from "../Header";
import LetrasErradas from "../LetrasErradas";
import Notificacao from "../Notificacao";
import Palavra from "../Palavra";
import { exibirNotificacao as exibir } from "../../Helpers/Hangman";



const palavras = ['application', 'programming', 'interface', 'wizard'];

let palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];

//let playable = true;
//const correctLetters = [];
//const wrongLetters = [];

  function Jogo() {

     const [jogavel, setJogavel] = useState(true);
     const [letrasCorretas, setLetrasCorretas] = useState([]);
     const [letrasErradas, setLetrasErradas] = useState([]);
     const [exibirNotificacao, setExibirNotificacao] = useState(false);

     useEffect(() => {
        const eventoClique = (evento) => {
            const { key, keyCode } = evento;

              if (jogavel && keyCode >= 65 && keyCode <= 90) {
                const letra = key.toLowerCase();
          
                if (palavraSelecionada.includes(letra)) {
                  if (!letrasCorretas.includes(letra)) {
                    setLetrasCorretas(letrasAtuais => [...letrasAtuais, letra]);

          
                    //displayWord();
                  } else {
                    exibir(setExibirNotificacao);
                  }
                } else {
                  if (!letrasErradas.includes(letra)) {
                    setLetrasErradas(letrasAtuais => [...letrasAtuais, letra]);

          
                    //updateWrongLettersEl();
                  } else {
                    exibir(setExibirNotificacao);
                  }
                }
              }      
        }
        window.addEventListener('keydown', eventoClique);
        return () => window.removeEventListener('keydown', eventoClique);
     }, [letrasCorretas, letrasErradas, jogavel]);

     function jogarNovamente() {
      setJogavel(true);

       //Empty Arrays:
       setLetrasCorretas([]);
       setLetrasErradas([]);

       const aleatorio = Math.floor(Math.random() * palavras.length);
       palavraSelecionada = palavras[aleatorio];

      
     }

     /*
     window.addEventListener('keydown', e => {
      if (playable) {
        if (e.keyCode >= 65 && e.keyCode <= 90) {
          const letter = e.key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              correctLetters.push(letter);
    
              displayWord();
            } else {
              showNotification();
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              wrongLetters.push(letter);
    
              updateWrongLettersEl();
            } else {
              showNotification();
            }
          }
        }
      }
    });
    */
    
    return (
        <>
            <Header></Header>
            <div className="game-container">
                <Figura letrasErradas={letrasErradas}></Figura>
                <LetrasErradas letrasErradas={letrasErradas}></LetrasErradas>
                <Palavra palavraSelecionada={palavraSelecionada} letrasCorretas={letrasCorretas}></Palavra>
                
            </div>
                <Alerta letrasCorretas={letrasCorretas} letrasErradas={letrasErradas} palavraSelecionada={palavraSelecionada} setJogavel={setJogavel} jogarNovamente={jogarNovamente}></Alerta>
                <Notificacao mostrarNotificacao={exibirNotificacao}></Notificacao>
        </>
      );
  }

  export default Jogo;