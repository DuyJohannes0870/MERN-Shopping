import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from '../Card/Card';
import "./FeaturedProduct.scss"
import axios from "axios"


const FeaturedProduct = ({ type }) => {


    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_API_URL + "/products?populate=*",
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `bearer` + process.env.REACT_APP_API_TOKEN,
                        },
                    }
                );
                setData(res.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);


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
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProduct