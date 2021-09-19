import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { logout } from '../Redux/Actions/authActions';


export const Navbar = () => {

    const dispatch = useDispatch()

    /*Este histori lo traemos del reac router dom ya que el navbar no tiene el histori debido a su ubicación en el archivo RoutersChild que esta por arriba del swith*/
    const history = useHistory()

    const handleLogout = () => {
        dispatch( logout() )
        history.replace('/')
    }

    return (
        <>
            <header>
                    <nav>
                        <ul>
                            <li><Link to="/home" className="link">Home</Link></li>
                            <li><Link to="/contacts" className="link">Contacts</Link></li>

                            <div className="containerLogOut">

                                <p className="user">Hola Vinci</p>

                                <button
                                    className="btn-logout"
                                    onClick={ handleLogout }
                                >
                                    Log Out
                                </button>

                            </div>
                        </ul>
                    </nav>
            </header>
        </>
    )
}
