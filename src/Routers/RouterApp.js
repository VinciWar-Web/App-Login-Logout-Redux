import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import  Login  from '../View/Login'
import { Home } from '../View/Home'
import { Contacts } from '../View/Contacts'


export const RouterApp = () => {

    const { logget } = useSelector(state => state.auth)

    return (
        <Router>    
            <div>
                <Switch>
                    <PublicRoute 
                        exact
                        path="/"
                        component={ Login }
                        isAuthenticated={ logget }
                    />

                    <PrivateRoute 
                        exact
                        path="/home"
                        component={ Home }
                        isAuthenticated={ logget }
                    />

                    <PrivateRoute 
                        exact
                        path="/contacts"
                        component={ Contacts }
                        isAuthenticated={ logget }
                    />

                </Switch>
            </div>
        </Router>   
    )
}
