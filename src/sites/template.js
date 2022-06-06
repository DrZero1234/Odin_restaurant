


const content = document.getElementById("content")


const PageNavbar = () => {

    const navbar = document.createElement("div")
    navbar.className = "navbar";

    const list_element = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.textContent = "Home"

    const li2 = document.createElement("li");
    li2.textContent = "Menu";

    const li3 = document.createElement("li");
    li3.textContent = "Contact";


    list_element.appendChild(li1)
    list_element.appendChild(li2)
    list_element.appendChild(li3)

    navbar.appendChild(list_element);


    
    content.appendChild(navbar)

}

const PageFooter = () => {
    console.log("Foooter")

    const footer = document.createElement("footer");
    footer.textContent = "@The Odin Project"

    content.append(footer)
}


`<div class="navbar">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>



<footer>@The Odin project</footer>
`

export  {PageNavbar, PageFooter}
