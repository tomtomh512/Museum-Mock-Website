import React from 'react'
import fossils from '../images/fossils_1.png'
import computers from '../images/computers.png'
import ocean from '../images/ocean.png'
import vivarium from '../images/vivarium.png'
import '../styles/Exhibits.css';

export default function Exhibits(props) {

    return (
        <main className="exhibit">
            <h1> Exhibits </h1>
            <hr/>

            <section>
                <div>
                    <img src={fossils} alt="fossils"/>
                </div>
                <div>
                    <h2> Fossil Collection </h2>
                    <hr/>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </section>

            <br/>

            <section>
                <div>
                    <h2> Underwater World </h2>
                    <hr/>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div>
                <img src={ocean} alt="computers"/>
                </div>

            </section>

            <br/>

            <section>
                <div>
                    <img src={vivarium} alt="ocean"/>
                </div>
                <div>
                    <h2> Butterfly Vivarium </h2>
                    <hr/>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </section>

            <br/>

            <section>
                <div>
                    <h2> Digital World </h2>
                    <hr/>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div>
                <img src={computers} alt="fossils"/>
                </div>

            </section>

        </main>
    )
}