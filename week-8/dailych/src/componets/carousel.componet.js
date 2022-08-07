import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarousalComponent(){
    return(
        <div className="carousel-wrapper">
        <Carousel>
        
            <div>
                < img src="../img1.jpeg" alt="HONG KONG"/>
                <p className="legend">HONG KONG</p>
            </div>
            <div>
                <img src="../img2.webp" alt="MACAO"/>
                <p className="legend">MACAO</p>
            </div>
            <div>
                <img src="../img3.webp" alt="JAPAN"/>
                <p className="legend">JAPAN</p>
            </div>
            <div>
                <img src="../img4.webp" alt="LAS VEGAS"/>
                <p className="legend">LAS VEGAS</p>
            </div>
        </Carousel>
    </div>
    );
}