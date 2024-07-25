import React, {useState} from 'react'
import elephants from '../images/elephants.png'
import Map from "./Map"
import '../styles/Directory.css';

export default function Directory(props) {

    const [mapInfo, setMapInfo] = useState({
        "start": "",
        "end": "",
        "nodePath": [],
        "edgePath": []
    })

    function handleStartChange(event) {
        setMapInfo(prevState => ({
            ...prevState,
            "start": event.target.value
        }))
    }

    function handleEndChange(event) {
        setMapInfo(prevState => ({
            ...prevState,
            "end": event.target.value
        }))
    }

    const findDirections = () => {
        const queryParams = new URLSearchParams({
            start: mapInfo.start,
            end: mapInfo.end
        }).toString()

        fetch(`/get_directions?${queryParams}`)
            .then(res => res.json())
            .then(output => {
                setMapInfo(prevState => ({
                    ...prevState,
                    "nodePath": output.path.nodePath,
                    "edgePath": output.path.edgePath
                }))
            })
    }

    return (
        <main className="directory">
            <h1> Directory </h1>
            <hr/>
            <section className="top-container">

                <div className="map-container">
                    <Map edges={mapInfo.edgePath}/>
                </div>

                <div className="input-container">
                    <div>
                        To:
                        <select value={mapInfo.end} onChange={handleEndChange}>
                            <option value="">Select Exhibit</option>
                            <option value="Bathroom">Bathroom</option>
                            <option value="Cafe">Café</option>
                            <option value="Children's Center">Children's Center</option>
                            <option value="Digital Age">Digital Age</option>
                            <option value="Entrance">Entrance</option>
                            <option value="Exit">Exit</option>
                            <option value="Fossils">Fossils</option>
                            <option value="Gift Shop">Gift Shop</option>
                            <option value="Industrial Revolution">Industrial Revolution</option>
                            <option value="Lobby">Lobby</option>
                            <option value="Ocean">Ocean</option>
                            <option value="Plants">Plants</option>
                            <option value="Rocks">Rocks</option>
                            <option value="Stone Age">Stone Age</option>
                            <option value="Vivarium">Vivarium</option>
                        </select>
                    </div>

                    <br/>

                    <div>
                        From:
                        <select value={mapInfo.start} onChange={handleStartChange}>
                            <option value="">Select Exhibit</option>
                            <option value="Bathroom">Bathroom</option>
                            <option value="Cafe">Café</option>
                            <option value="Children's Center">Children's Center</option>
                            <option value="Digital Age">Digital Age</option>
                            <option value="Entrance">Entrance</option>
                            <option value="Exit">Exit</option>
                            <option value="Fossils">Fossils</option>
                            <option value="Gift Shop">Gift Shop</option>
                            <option value="Industrial Revolution">Industrial Revolution</option>
                            <option value="Lobby">Lobby</option>
                            <option value="Ocean">Ocean</option>
                            <option value="Plants">Plants</option>
                            <option value="Rocks">Rocks</option>
                            <option value="Stone Age">Stone Age</option>
                            <option value="Vivarium">Vivarium</option>
                        </select>
                    </div>

                    <br/>

                    <input
                        type="button"
                        value="Search Directions"
                        onClick={findDirections}
                    />

                </div>

            </section>
            <section className="bottom-container">
                <div className="image-container">
                    <img src={elephants} alt="elephants"/>
                </div>
                <div className="instructions-container">
                    <h2> Directions</h2>
                    {mapInfo.nodePath.length === 0 ? (
                        <>
                            <h3> Search for directions </h3>
                            <hr/>
                        </>
                    ) : (
                        <>
                            <h3> Follow the order specified </h3>
                            <hr/>
                            <ol>
                                {mapInfo.nodePath.map((node, index) => (
                                    <li key={index}>{node}</li>
                                ))}
                            </ol>
                        </>
                    )}
                </div>
            </section>

        </main>
    )
}