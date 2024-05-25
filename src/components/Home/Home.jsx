import React from 'react'
import "./Home.css"
import bgMain from "../../assets/bg-main.jpg";

function Home() {
    return (

        <div className='container' style={{ backgroundImage: `url("${bgMain}")`, objectFit:"cover" }}>
            <section className='homeSection'>
                <h1>Best Asian Recipes</h1>
                <p>"BestRecipes.com" for tons of yummy recipes! It's a great site with <br />
                    recipes for all kinds of dishes. Happy cooking! <br />
                    Simple recipes made for real, actual, everday life
                </p>
                <button className='btn'>Read More!</button>
            </section>
        </div>
    )
}

export default Home