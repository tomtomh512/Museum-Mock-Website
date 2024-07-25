import React from 'react'
import '../styles/Map.css';

export default function Map(props) {
    const {edges} = props;

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

                {/*temporary*/}
                {edges.includes(1) ? document.getElementById("children-lobby-path").style.stroke = "black" : ''}
                {edges.includes(2) ? document.getElementById("lobby-cafe-path").style.stroke = "black" : ''}
                {edges.includes(3) ? document.getElementById("lobby-entrance-path").style.stroke = "black" : ''}
                {edges.includes(4) ? document.getElementById("lobby-fossils-path").style.stroke = "black" : ''}
                {edges.includes(5) ? document.getElementById("lobby-stone-age-path").style.stroke = "black" : ''}
                {edges.includes(6) ? document.getElementById("lobby-ocean-path").style.stroke = "black" : ''}
                {edges.includes(7) ? document.getElementById("fossils-industrial-rev-path").style.stroke = "black" : ''}
                {edges.includes(8) ? document.getElementById("stone-age-industrial-rev-path").style.stroke = "black" : ''}
                {edges.includes(9) ? document.getElementById("ocean-industrial-rev-path").style.stroke = "black" : ''}
                {edges.includes(10) ? document.getElementById("fossils-rocks-path").style.stroke = "black" : ''}
                {edges.includes(11) ? document.getElementById("ocean-plants-path").style.stroke = "black" : ''}
                {edges.includes(12) ? document.getElementById("rocks-industrial-rev-path").style.stroke = "black" : ''}
                {edges.includes(13) ? document.getElementById("industrial-rev-digital-age-path").style.stroke = "black" : ''}
                {edges.includes(14) ? document.getElementById("plants-industrial-rev-path").style.stroke = "black" : ''}
                {edges.includes(15) ? document.getElementById("rocks-gift-shop-path").style.stroke = "black" : ''}
                {edges.includes(16) ? document.getElementById("digital-age-gift-shop-path").style.stroke = "black" : ''}
                {edges.includes(17) ? document.getElementById("plants-gift-shop-path").style.stroke = "black" : ''}
                {edges.includes(18) ? document.getElementById("gift-shop-bathroom-path").style.stroke = "black" : ''}
                {edges.includes(19) ? document.getElementById("gift-shop-exit-path").style.stroke = "black" : ''}
                {edges.includes(20) ? document.getElementById("gift-shop-vivarium-path").style.stroke = "black" : ''}

                <rect width="150" height="300" x="15" y="150" fill="#ed7d31" className="exhibit-body" id="children-center-body"/>
                <rect width="150" height="170" x="205" y="215" fill="#9522E0" className="exhibit-body" id="lobby-body"/>
                <rect width="175" height="125" x="435" y="237.5" fill="#c00000" className="exhibit-body" id="stone-age-body"/>
                <rect width="175" height="125" x="625" y="237.5" fill="#9522E0" className="exhibit-body" id="industrial-rev-body"/>
                <rect width="175" height="125" x="815" y="237.5" fill="#0070c0" className="exhibit-body" id="digital-age-body"/>
                <rect width="150" height="170" x="1070" y="215" fill="#ed7d31" className="exhibit-body" id="gift-shop-body"/>
                <rect width="150" height="300" x="1260" y="150" fill="#548235" className="exhibit-body" id="vivarium-body"/>
                <rect width="150" height="125" x="205" y="450" fill="#c00000" className="exhibit-body" id="entrance-body"/>
                <rect width="150" height="125" x="1070" y="450" fill="#c00000" className="exhibit-body" id="exit-body"/>
                <rect width="150" height="125" x="205" y="25" fill="#0070c0" className="exhibit-body" id="cafe-body"/>
                <rect width="150" height="125" x="1070" y="25" fill="#0070c0" className="exhibit-body" id="bathroom-body"/>
                <rect width="265" height="125" x="440" y="430" fill="#0070c0" className="exhibit-body" id="ocean-body"/>
                <rect width="265" height="125" x="720" y="430" fill="#548235" className="exhibit-body" id="plants-body"/>
                <rect width="265" height="125" x="440" y="45" fill="#548235" className="exhibit-body" id="fossils-body"/>
                <rect width="265" height="125" x="720" y="45" fill="#c00000" className="exhibit-body" id="rocks-body"/>

                <text x="225" y="520" className="map-text"> Entrance</text>
                <text x="1122.5" y="520" className="map-text"> Exit</text>
                <text x="250" y="93" className="map-text"> Café</text>
                <text x="1085" y="93" className="map-text"> Bathroom</text>
                <text x="28" y="290" className="map-text"> Children's</text>
                <text x="28" y="320" className="map-text"> Center</text>
                <text x="245" y="305" className="map-text"> Lobby</text>
                <text x="460" y="305" className="map-text"> Stone Age</text>
                <text x="645" y="290" className="map-text"> Industrial</text>
                <text x="645" y="320" className="map-text"> Revolution</text>
                <text x="835" y="305" className="map-text"> Digital Age</text>
                <text x="1085" y="305" className="map-text"> Gift Shop</text>
                <text x="1285" y="305" className="map-text"> Vivarium</text>
                <text x="530" y="115" className="map-text"> Fossils</text>
                <text x="810" y="115" className="map-text"> Rocks</text>
                <text x="530" y="505" className="map-text"> Ocean</text>
                <text x="810" y="505" className="map-text"> Plants</text>
            </svg>
        </main>
    )
}