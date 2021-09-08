import { useState } from 'react'

export default function SpreadObject() {

    const [state, setstate] = useState({djur1: 'apa', djur2: 'lejon'})
    return (
        <div>
            <button onClick={() => setstate({...state, djur2: 'gädda', djur3: 'mört'})}>Ändra på djurobjektet</button>
        </div>
    )
}