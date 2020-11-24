import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles.css'


import Layout from './layout'
import Homepage from './pages/homepage'
import AboutUs from './pages/about-us'
import ProductsPage from './pages/products'

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/products">
                        <ProductsPage />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                </Switch>                                  
            </Layout>
        </BrowserRouter>
        
    )
}

