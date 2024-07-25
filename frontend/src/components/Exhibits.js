import React from 'react'
import exhibitsData from "../exhibitsData";
import '../styles/Exhibits.css';

export default function Exhibits(props) {

    const exhibitElements = exhibitsData.map(item => {
        return (
            <section>
                <div>
                    <img src={item.photo} alt="fossils"/>
                </div>
                <div>
                    <h2> {item.title} </h2>
                    <hr/>
                    <p> {item.description} </p>
                </div>
            </section>
        )
    })

    return (
        <main className="exhibit">
            <h1> Exhibits </h1>
            <hr/>
            {exhibitElements}
        </main>
    )
}