import React, { useState } from "react";

export const Card = ({id, image, info, name, price, removeCard}) => {
    const [readMore, setReadmore] = useState(false);
    return (
        <div className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">
                        {price}
                    </h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button
                    onClick={()=>setReadmore(!readMore)}
                    >
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <button
                className="delete-btn"
                onClick={()=>removeCard(id)}
                >
                    not interested
                </button>
            </footer>
        </div>
    )
}