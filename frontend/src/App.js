import React, {useState} from 'react'
import Header from "./components/Header"
import Exhibits from "./components/Exhibits"
import Directory from "./components/Directory"
import Shop from "./components/Shop"

export default function App() {
    const [mode, setMode] = useState("Exhibits")

    const changeMode = (data) => setMode(data)

    return (
        <main>
            <Header mode={mode} handleModeChange={changeMode}/>

            {mode === "Exhibits" && <Exhibits />}
            {mode === "Directory" && <Directory />}
            {mode === "Shop" && <Shop />}

        </main>
    )
}