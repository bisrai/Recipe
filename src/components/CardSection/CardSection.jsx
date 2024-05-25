import React from 'react'
import "./CardSection.css"
import smoothie from "../../assets/smoothie.jpg"

function CardSection() {
  return (
    <div class="cardOne">
      <div class="cardOneImg">
        <img src={smoothie} alt="" />
      </div>
      <div class="cardOneContent">
        <h2 class="cardOneTitle">
          Strawberry Smoothie:
        </h2>
        <p>This Strawberry Smoothie recipe is definitely one of my favorites, especially during the warmer months. Refreshing smoothies with strawberries are rich, creamy and bursting with the bright flavor of fresh strawberries.
          High fiber intake is associated with a reduced risk of heart disease, obesity, type 2 diabetes, and some cancers. So go ahead and eat your fiber! Strawberries are not only delicious, but they're also nutritious!
        </p>

        <div class="btn">
          Read more
        </div>
      </div>
    </div>

  )
}

export default CardSection