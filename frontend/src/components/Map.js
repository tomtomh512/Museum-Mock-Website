import React, {useEffect} from 'react'
import '../styles/Map.css';

export default function Map(props) {
    const {edges} = props;

    useEffect(() => {
        const allEdges = document.querySelectorAll('.path');
        for (const edge of allEdges) {
            edge.style.stroke = 'lightgrey'
        }

        for (const edge of edges) {
            document.getElementById(edge).style.stroke = "black"
        }
    }, [edges]);

    return (
        <main>
            <svg viewBox="0 0 1425 600">

                <line x1="90" y1="300" x2="280" y2="300" className="path" id="children-lobby-path"/>
                <line x1="522.5" y1="300" x2="280" y2="300" className="path" id="lobby-stone-age-path"/>
                <line x1="527.5" y1="300" x2="712.5" y2="300" className="path" id="stone-age-industrial-rev-path"/>
                <line x1="902.5" y1="300" x2="712.5" y2="300" className="path" id="industrial-rev-digital-age-path"/>
                <line x1="1145" y1="300" x2="902.5" y2="300" className="path" id="digital-age-gift-shop-path"/>
                <line x1="1145" y1="300" x2="1335" y2="300" className="path" id="gift-shop-vivarium-path"/>
                <line x1="280" y1="512.5" x2="280" y2="300" className="path" id="lobby-entrance-path"/>
                <line x1="280" y1="300" x2="280" y2="87.5" className="path" id="lobby-cafe-path"/>
                <line x1="1145" y1="300" x2="1145" y2="512.5" className="path" id="gift-shop-exit-path"/>
                <line x1="1145" y1="300" x2="1145" y2="87.5" className="path" id="gift-shop-bathroom-path"/>
                <line x1="852.5" y1="107.5" x2="572.5" y2="107.5" className="path" id="fossils-rocks-path"/>
                <line x1="852.5" y1="492.5" x2="572.5" y2="492.5" className="path" id="ocean-plants-path"/>
                <line x1="712.5" y1="300" x2="572.5" y2="107.5" className="path" id="fossils-industrial-rev-path"/>
                <line x1="712.5" y1="300" x2="852.5" y2="107.5" className="path" id="rocks-industrial-rev-path"/>
                <line x1="712.5" y1="300" x2="572.5" y2="492.5" className="path" id="ocean-industrial-rev-path"/>
                <line x1="712.5" y1="300" x2="852.5" y2="492.5" className="path" id="plants-industrial-rev-path"/>
                <line x1="280" y1="300" x2="457" y2="107.5" className="path" id="lobby-fossils-path"/>
                <line x1="280" y1="300" x2="457" y2="492.5" className="path" id="lobby-ocean-path"/>
                <line x1="969" y1="107.5" x2="1145" y2="300" className="path" id="rocks-gift-shop-path"/>
                <line x1="969" y1="492.5" x2="1145" y2="300" className="path" id="plants-gift-shop-path"/>

                <rect width="150" height="300" x="15" y="150" fill="#ed7d31" className="exhibit-body" id="children-center-body"/>
                <rect width="150" height="170" x="205" y="215" fill="#9522E0" className="exhibit-body" id="lobby-body"/>
                <rect width="175" height="125" x="420" y="237.5" fill="#c00000" className="exhibit-body" id="stone-age-body"/>
                <rect width="175" height="125" x="625" y="237.5" fill="#9522E0" className="exhibit-body" id="industrial-rev-body"/>
                <rect width="175" height="125" x="830" y="237.5" fill="#0070c0" className="exhibit-body" id="digital-age-body"/>
                <rect width="150" height="170" x="1070" y="215" fill="#ed7d31" className="exhibit-body" id="gift-shop-body"/>
                <rect width="150" height="300" x="1260" y="150" fill="#548235" className="exhibit-body" id="vivarium-body"/>
                <rect width="150" height="125" x="205" y="450" fill="#c00000" className="exhibit-body" id="entrance-body"/>
                <rect width="150" height="125" x="1070" y="450" fill="#c00000" className="exhibit-body" id="exit-body"/>
                <rect width="150" height="125" x="205" y="25" fill="#0070c0" className="exhibit-body" id="cafe-body"/>
                <rect width="150" height="125" x="1070" y="25" fill="#0070c0" className="exhibit-body" id="bathroom-body"/>
                <rect width="265" height="125" x="420" y="430" fill="#0070c0" className="exhibit-body" id="ocean-body"/>
                <rect width="265" height="125" x="740" y="430" fill="#548235" className="exhibit-body" id="plants-body"/>
                <rect width="265" height="125" x="420" y="45" fill="#548235" className="exhibit-body" id="fossils-body"/>
                <rect width="265" height="125" x="740" y="45" fill="#c00000" className="exhibit-body" id="rocks-body"/>

                <text x="225" y="520" className="map-text"> Entrance</text>
                <text x="1122.5" y="520" className="map-text"> Exit</text>
                <text x="250" y="93" className="map-text"> Café</text>
                <text x="1085" y="93" className="map-text"> Bathroom</text>
                <text x="28" y="290" className="map-text"> Children's</text>
                <text x="28" y="320" className="map-text"> Center</text>
                <text x="245" y="305" className="map-text"> Lobby</text>
                <text x="445" y="305" className="map-text"> Stone Age</text>
                <text x="645" y="290" className="map-text"> Industrial</text>
                <text x="645" y="320" className="map-text"> Revolution</text>
                <text x="850" y="305" className="map-text"> Digital Age</text>
                <text x="1085" y="305" className="map-text"> Gift Shop</text>
                <text x="1285" y="305" className="map-text"> Vivarium</text>
                <text x="510" y="115" className="map-text"> Fossils</text>
                <text x="830" y="115" className="map-text"> Rocks</text>
                <text x="505" y="505" className="map-text"> Oceans</text>
                <text x="830" y="505" className="map-text"> Plants</text>
            </svg>
        </main>
    )
}