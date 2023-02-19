import React from "react";
import Card from '../Card/Card';
import "./FeaturedProduct.scss"
import useFetch from "../../hooks/useFetch";


const FeaturedProduct = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className='featuredproduct'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : (loading
                    ? "loading"
                    : data?.map((item) => <Card item={item} key={item.id} />))}
            </div>
        </div>
    )
}

export default FeaturedProduct