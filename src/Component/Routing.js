import React, { Fragment } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
// cssbaseline is kind of css reset of material ui

import Home from './Home/Home'
import Header from './Header'
import Footer from './Footer'


const Routing = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <CssBaseline /> 
                <Header/>
                <Route exact path="/" component = {Home}/>
                <Footer/>
            </Fragment>
        </BrowserRouter>
    )
}

export default Routing
