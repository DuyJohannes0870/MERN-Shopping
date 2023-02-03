import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/4355493/pexels-photo-4355493.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Lua Hong",
            desc:"Lua Hong",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2726161/pexels-photo-2726161.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Ao Thun Trang Thoai Mai Dao Pho",
            desc: "Ao Thun Trang",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart