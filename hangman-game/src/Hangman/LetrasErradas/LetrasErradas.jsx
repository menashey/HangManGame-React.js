import React from 'react'

const LetrasErradas = ({ letrasErradas }) => {
    return (
        <div className="letras-erradas-container">
            <div>
            {letrasErradas.length > 0 && <p>Errado</p>}
            {letrasErradas
                .map((letra, index) => <span key="index">{letra}</span>)
                .reduce((anterior, atual) => anterior === null ? [atual] : [anterior, ', ', atual], null)
            }
            </div>
        </div>
    )
}

export default LetrasErradas;