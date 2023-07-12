import React from 'react'

function Header() {
    return (
        <header className="header">
            This is my header

            <nav>
                <ul>
                    <li><a href="#" class="button">Home</a></li>
                    <li><a href="about.html" class="button">About Me</a></li>
                    <li><a href="resources.html" class="button">Graphic Design</a></li>
                    <li><a href="gallery.html" class="button">Gallery</a></li>
                    <li><a href="gallery.html" class="button">Gallery</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header