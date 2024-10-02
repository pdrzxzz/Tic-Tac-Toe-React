import { useState } from 'react'

export default function Player({ name, symbol, isActive, onChangeName }) {
    const [ playerName, setPlayerName ] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(wasEditing => !wasEditing)

        if(isEditing){ //if save button is clicked
        onChangeName(symbol, playerName)
        }
    }

    function handleChange(e){
        setPlayerName(e.target.value)
    }

    function handleKeyDown(e){
        if(e.code == 'Enter'){
            handleEditClick()
        }
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className='player'>
                {isEditing ?
                    <input type="text" value={playerName} required onChange={handleChange} onKeyDown={handleKeyDown} />
                    :
                    <span className='player-name'>{playerName}</span>
                }

                <span className='Player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}