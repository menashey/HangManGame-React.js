import React from 'react'

const Notificacao = ({ mostrarNotificacao }) => {
    return (
        <div className={`notificacao-container ${mostrarNotificacao ? 'mostrar' : ''}`}>
            <p>Você já digitou essa letra ...</p>
        </div>
    )
}

export default Notificacao;
