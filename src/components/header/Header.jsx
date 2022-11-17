import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; 

/**
 * Component header navigation
 * @returns {ReactElement} Header navigation
 */
const Header = () => {
    return (
        <section className='header-container'>
            <ul>
                <img src={logo} className='logo' alt="Logo" />
                <NavLink end to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink  to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Profil</li>
                </NavLink>
                <NavLink  to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Réglages</li>
                </NavLink>
                <NavLink  to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Communauté</li>
                </NavLink>
            </ul>

        </section>
    );
};

export default Header