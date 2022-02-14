import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './image/movielogo.png'

const Header = () => {
    return (
        <>

            <header className='d-flex-1'>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header