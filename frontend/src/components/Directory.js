import React, {useState} from 'react'
import '../styles/Directory.css';
import Map from "./Map"

export default function Directory(props) {

    const [mapInfo, setMapInfo] = useState({
        "start": "",
        "end": "",
        "edges": []
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
        setMapInfo(prevState => ({
            ...prevState,
            "edges": []
        }))
    }

    return (
        <main className="directory">
            <h1> Directory </h1>
            <hr/>
            <section className="top-container">

                <div className="map-container">
                    <Map edges={mapInfo.edges}/>
                </div>

                <div className="input-container">
                    <div>
                        From:
                        <select value={mapInfo.start} onChange={handleStartChange}>
                            <option value=""> Select Exhibit</option>
                            <option value="Entrance"> Entrance</option>
                            <option value="Lobby"> Lobby</option>
                            <option value="Children's Center"> Children's Center</option>
                            <option value="Cafe"> Café</option>
                            <option value="Stone Age"> Stone Age</option>
                            <option value="Industrial Revolution"> Industrial Revolution</option>
                            <option value="Digital Age"> Digital Age</option>
                            <option value="Fossils"> Fossils</option>
                            <option value="Rocks"> Rocks</option>
                            <option value="Ocean"> Ocean</option>
                            <option value="Plants"> Plants</option>
                            <option value="Gift Shop"> Gift Shop</option>
                            <option value="Bathroom"> Bathroom</option>
                            <option value="Vivarium"> Vivarium</option>
                            <option value="Exit"> Exit</option>
                        </select>
                    </div>

                    <br/>

                    <div>
                        To:
                        <select value={mapInfo.end} onChange={handleEndChange}>
                            <option value=""> Select Exhibit</option>
                            <option value="Entrance"> Entrance</option>
                            <option value="Lobby"> Lobby</option>
                            <option value="Children's Center"> Children's Center</option>
                            <option value="Cafe"> Café</option>
                            <option value="Stone Age"> Stone Age</option>
                            <option value="Industrial Revolution"> Industrial Revolution</option>
                            <option value="Digital Age"> Digital Age</option>
                            <option value="Fossils"> Fossils</option>
                            <option value="Rocks"> Rocks</option>
                            <option value="Ocean"> Ocean</option>
                            <option value="Plants"> Plants</option>
                            <option value="Gift Shop"> Gift Shop</option>
                            <option value="Bathroom"> Bathroom</option>
                            <option value="Vivarium"> Vivarium</option>
                            <option value="Exit"> Exit</option>
                        </select>
                    </div>

                    <br/>

                    <input
                        type="button"
                        value="Get Directions"
                        onClick={findDirections}
                    />

                </div>

            </section>
            <section className="bottom-container">
                <div className="interest-container">
                    <h2> Places of Interest</h2>

                    <h3> Human Evolution </h3>
                    <hr/>
                    <li> Stone Age</li>
                    <li> Industrial Revolution</li>
                    <li> Digital Age</li>

                    <h3> Animals </h3>
                    <hr/>
                    <li> Fossils</li>
                    <li> Ocean</li>
                    <li> Vivarium</li>

                    <h3> Earth </h3>
                    <hr/>
                    <li> Rocks</li>
                    <li> Plants</li>

                </div>
                <div className="instructions-container">
                    <h2> Directions</h2>
                    {mapInfo.edges.length === 0 ? "Search for directions" : mapInfo.edges}
                </div>
            </section>

        </main>
    )
}