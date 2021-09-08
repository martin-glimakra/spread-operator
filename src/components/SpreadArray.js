import { useState } from 'react'

export default function SpreadArray() {

    const [state, setstate] = useState(['äpple', 'päron'])
    return (
        <div>
            <button onClick={() => setstate([...state, 'citron'])}>Lägg till citron</button>
        </div>
    )
}