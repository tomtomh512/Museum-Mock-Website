import React, {useEffect, useState} from 'react'
import Login from "./Login"
import '../styles/Shop.css';

export default function Shop(props) {

    const [items, setItems] = useState([])

    const [loginState, setLoginState] = useState({
        isLoggingIn: false,
        isLoggedIn: false,
        username: "",
        user_id: "",
    })

    const [filters, setFilters] = useState({
        clothing: false,
        home_decor: false,
        accessories: false,
        sortMethod: "",
    })

    const itemElements = items.map((item) => (
        <div key={item.name} className="card">
            <img src={'/images/' + item.image_name} alt={item.name}/>
            <h1> {item.name} </h1>
            <p> ${item.price} </p>
        </div>
    ))

    useEffect(() => {

        const queryParams = new URLSearchParams(filters).toString();

        fetch(`/get_items?${queryParams}`)
            .then(res => res.json())
            .then(output => {
                setItems(output.items)
            })
    }, [filters]);

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFilters(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <main className="shop">

            {loginState.isLoggingIn ?
                <Login /> : ''
            }

            <h1> Shop Merchandise </h1>
            <hr/>
            <section>
                <div className="filters">

                    <h3> Sort by: </h3>

                    <input
                        type="radio"
                        name="sortMethod"
                        value="Name (A to Z)"
                        checked={filters.sortMethod === "Name (A to Z)"}
                        onChange={handleChange}
                    />
                    <label> Name (A to Z) </label>
                    <br/>

                    <input
                        type="radio"
                        name="sortMethod"
                        value="Name (Z to A)"
                        checked={filters.sortMethod === "Name (Z to A)"}
                        onChange={handleChange}
                    />
                    <label> Name (Z to A) </label>
                    <br/>

                    <input
                        type="radio"
                        name="sortMethod"
                        value="Price (Low to High)"
                        checked={filters.sortMethod === "Price (Low to High)"}
                        onChange={handleChange}
                    />
                    <label> Price (Low to High) </label>
                    <br/>

                    <input
                        type="radio"
                        name="sortMethod"
                        value="Price (High to Low)"
                        checked={filters.sortMethod === "Price (High to Low)"}
                        onChange={handleChange}
                    />
                    <label> Price (High to Low) </label>

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
                        name="accessories"
                        checked={filters.accessories}
                        onChange={handleChange}
                    />
                    <label> Accessories </label>

                </div>
                <div className="listings">
                    <section className="listings-header">
                        <div>
                            {loginState.isLoggedIn ? (
                                <>
                                    <input
                                        type="button"
                                        className="login-button"
                                        value="Log Out"
                                    />
                                    {loginState.username}
                                </>
                            ) : (
                                <input
                                    type="button"
                                    className="login-button"
                                    value="Log In"
                                />
                            )}
                        </div>
                        <div className="cart-button-container">
                            <input
                                type="button"
                                className="cart-button"
                                value="View Cart"
                            />
                        </div>

                    </section>

                    <section className="listings-body">
                        {itemElements}
                    </section>

                </div>
            </section>
        </main>
    )
}