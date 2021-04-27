import React from 'react'

function Board(props) {
    const drop = e =>{
        e.PreventDefault();
        const card_id = e.DataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card)
    }

    const DragOver = e =>{
        e.PreventDefault()
    }

    return (
        <div id={props.id}
        onDrop={drop}
        onDragOver={DragOver}>
            {props.children}
        </div>
    )
}

export default Board
