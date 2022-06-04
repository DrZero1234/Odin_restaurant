import "./style.css"

const CONTENT_ELEM = document.getElementById("content");


const generate_home = () => {

    CONTENT_ELEM.innerHTML =  `<div class="navbar">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>

<div class="main">
    <img src="icon.png" alt="restaurant icon">
    <h1 id="main-title">The United Stakes</h1>
    <h2>We not only meat expectations we exceed them</h2>
</div>

<footer>@The Odin project</footer>`

}




