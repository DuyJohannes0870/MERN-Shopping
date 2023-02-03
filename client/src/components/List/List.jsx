import React from 'react'
import Card from '../Card/Card';
import "./List.scss"

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/4355493/pexels-photo-4355493.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Lua Hong",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2726161/pexels-photo-2726161.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Ao Thun Trang",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Ao Thun Trang",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Ao Thun Trang",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
    ];
    return (
        <div className='list'>{data?.map(item => (
            <Card item={item} key={item.id} />
        ))}</div>
    )
}

export default List