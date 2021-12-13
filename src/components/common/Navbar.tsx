import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import {links, social} from '../../data/data-menu';

export const Navbar = ()=>{
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef({} as any);
    const linksRef = useRef({} as any);
    const toggleLinks = ()=>{
        setShowLinks(!showLinks);
    }

    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        showLinks ? 
        linksContainerRef.current.style.height = `${linksHeight}px`
        : linksContainerRef.current.style.height = '0px';
    },[showLinks])

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                <button className='nav-toggle' onClick={toggleLinks}>
                    <FaBars />
                </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map(link=>{
                            const {id, url, text} = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {social.map((socialIcon)=>{
                        const { id,url,icon } = socialIcon;
                        return (
                            <li key={id}>
                                 <a href={url}>{icon}</a>   
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}