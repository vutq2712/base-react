import React, { useState } from "react";
import Loading from '../common/Loading';
import {dataCard} from '../../data/data-card';
import { Card } from "./Card";

interface CardData{
    id?:string;
    name?:string;
    infor?:string;
    image?:string;
    price?: string;
}

export const CardLists = ()=>{
    const [cards, setCards] = useState(dataCard as CardData);
    return (
        <section>
            <div className="title">
                <h2>Favourites</h2>
                <div className="underline"></div>
            </div>
            <div>
                {dataCard.map((card)=>{
                    return <Card />
                })}
            </div>
        </section>
    )
}