import React from 'react'

const Palavra = ({ palavraSelecionada, letrasCorretas }) => {
    return (
        <div className="palavra">
            {palavraSelecionada.split('').map( (letra, index) => {
                return (
                    <span className="letra" key={index}>
                        {letrasCorretas.includes(letra) ? letra : ''}
                    </span>
                )   
            })}
        </div>
    )
}

export default Palavra;
