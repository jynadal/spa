import React from 'react'
import Seo from '../../seo'
import './styles.css'

import products from "../../data/products.json"
import Product from "./Product"

export default function ProductsPage() {
    return (
        <div>
            <Seo title="Here the products page" description="All our shit that we sell to you us ipsum dolor sit amet consectetur adipisicing elit. Corporis,
             architecto explicabo in beatae numquam aspernatur, quos velit consequuntur" />
            <h1>Products we sell to you!</h1>
            <div className="products">
                {products.map(product => (
                    <Product {...product} />
                ))}
            </div>
            
        </div>
    )
}
