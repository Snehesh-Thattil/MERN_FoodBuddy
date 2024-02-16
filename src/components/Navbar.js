import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <nav>
                <a href="/"><img src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1708069914~exp=1708070514~hmac=72878e423057afd425ac58838077f8a63a3f2d3d251abf76ba948668e5b5fb3d" alt="err" /></a>
                <input type="text" placeholder='Food Item, Resturant, Location, etc' />

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Wishlist">Wishlist</a></li>
                    <li><a href="/Orders">Orders</a></li>
                    <li><a href="/Resturants">Resturants</a></li>
                </ul>
                <div className="dropdown">
                    <button className='profile-dp'>Profile</button>
                    <div className="dp-items">
                        <a href="/orders">Orders</a>
                        <a href="/Location">Location</a>
                        <a href="/Address">Address</a>
                        <a href="/Payment">Payment</a>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
