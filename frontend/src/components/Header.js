import React from 'react'
import coverImage from '../images/vienna.jpg'
import '../styles/Header.css';

export default function Header(props) {

    const {mode, handleModeChange} = props

    return (
        <main>
            <section className="title"> Natural History museum </section>

            <section className="select-page">
                <div onClick={() => handleModeChange("Exhibits")}>Exhibits</div>
                <div onClick={() => handleModeChange("Directory")}>Directory</div>
                <div onClick={() => handleModeChange("Shop")}>Shop</div>
            </section>

            <section className="cover-image">
                <img src={coverImage} alt="vienna"/>
                <div> {mode} </div>
            </section>

        </main>
    )
}