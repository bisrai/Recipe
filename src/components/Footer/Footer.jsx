import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div class=" footer">
            <div class=" footer-content"><br />
                <h1>Address</h1>
                <p>Healing Center, 06 Streetname, Moga, Punjab<br />
                    demo@gmail.com</p>
                <a class="socialIcons" href="#">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a class="socialIcons" href="#">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a class="socialIcons" href="#">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a class="socialIcons" href="#">
                    <i class="fa-brands fa-google-play"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer