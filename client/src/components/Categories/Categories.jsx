import React from 'react'
import "./Categories.scss"
import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">Men</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">Shoes</Link>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Categories