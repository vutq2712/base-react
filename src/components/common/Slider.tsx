import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import dataSlider from "../../data/data-slider";

export const Slider = ()=>{
    const [people, setPeople] = useState(dataSlider);
    const [index, setIndex] = useState(0);

    const nextSlider = () => {
        setIndex((oldIndex:number) => {
            let index = oldIndex + 1;
            if (index > people.length - 1) {
                index = 0
            }
            return index;
        })
    }

    const prevSlider = () => {
        setIndex((oldIndex:number) => {
            let index = oldIndex - 1;
            if (index < 0) {
                index = people.length - 1
            }
            return index;
        })
    }

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex((oldIndex:number) => {
                let index = oldIndex + 1;
                if (index > people.length - 1) {
                    index = 0
                }
                return index;
            })
        },5000)
        return () => {
            clearInterval(slider)
        }
    },[index])

    return (
        <section className="section">
            <div className="title">
                <h2><span>/</span>reviews</h2>
            </div>
            <div className="section-center">
                {people.map((person,personIndex)=>{
                    const {id, image,name,title,quote} = person;
                    let position = 'nextSlide';
                    if (personIndex === index ) {
                        position = 'activeSlide';
                    }
                    if (personIndex === index - 1 
                        || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide';
                    }
                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <div className="title">{title}</div>
                            <div className="text">{quote}</div>
                            <FaQuoteRight className="icon"/>
                        </article>
                    )
                })
                }
                <button className="prev" onClick={prevSlider}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={nextSlider}>
                    <FiChevronRight/>
                </button>
            </div>
        </section>
    )
}