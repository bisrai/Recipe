import React from 'react'
import "./CardTwo.css"
import aa from "../../assets/dsoa.jpg";
import Button from '@mui/material/Button';

function CardTwo() {
    return (
        <div className='CardContainer' style={{ backgroundImage: `url("${aa}")` }}>
            <section className='CardSection'>
                <h1>Which is the tastiest food?</h1>
                <p>"India has a lot to contribute when it comes to cuisine and dosa is the
                    best dish to represent that. <br /> To put it in simple terms, dosa is a type
                    of pancake made from fermented rice batter."
                </p>
                <button className='btn'>Read More!</button>
            </section>
        </div>
    )
}

export default CardTwo