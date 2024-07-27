import React, { useState} from 'react'
import '../styles/Shop.css';

export default function Shop(props) {

    const [loginState, setLoginState] = useState({
        isLoggingIn: false,
        isLoggedIn: false,
        username: "",
        user_id: "",
    })

    const [filters, setFilters] = useState({
        clothing: false,
        home_decor: false,
        assessories: false,
        sortMethod: '',
    })

    const handleClick = () => {
        setLoginState(prevState => ({
            ...prevState,
            isLoggingIn: true
        }))
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFilters(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    console.log(filters)

    return (
        <main className="shop">
            <h1> Shop Merchandise </h1>
            <hr/>
            <section>
                <div className="filters">

                    <h3
                        onClick={handleClick}
                        className="login-button"
                    >
                        Click here to log in
                    </h3>

                    {loginState.isLoggedIn ? 'Logged in' : 'Not logged in'}

                    <br/><br/>

                    <h3> Sort by: </h3>
                    <select
                        value={filters.sortMethod}
                        onChange={handleChange}
                        className="select-sort"
                        name="sortMethod"
                    >
                        <option value="">Options</option>
                        <option value="↑ Name">↑ Name</option>
                        <option value="↓ Name">↓ Name</option>
                        <option value="↑ Price">↑ Price</option>
                        <option value="↓ Price">↓ Price</option>
                    </select>

                    <br/><br/>

                    <h3> Type </h3>

                    <input
                        type="checkbox"
                        name="clothing"
                        checked={filters.clothing}
                        onChange={handleChange}
                    />
                    <label> Clothing </label>

                    <br/>

                    <input
                        type="checkbox"
                        name="home_decor"
                        checked={filters.home_decor}
                        onChange={handleChange}
                    />
                    <label> Home Decor </label>

                    <br/>

                    <input
                        type="checkbox"
                        name="assessories"
                        checked={filters.assessories}
                        onChange={handleChange}
                    />
                    <label> Assessories </label>

                </div>
                <div className="listings">

                </div>
            </section>
        </main>
    )
}