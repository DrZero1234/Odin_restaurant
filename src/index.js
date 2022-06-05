import "./style.css";
import {PageNavbar, PageFooter} from "./sites/template.js";
import {homePage} from "./sites/home.js"
import {menuPage} from "./sites/menu.js"

document.addEventListener("DOMContentLoaded", () => {

    let CONTENT_ELEM = document.getElementById("content");
    const list_items = document.querySelectorAll("li");
    list_items.forEach((item) => {
        switch(item.textContent) {
            case "Home":
                item.addEventListener("click", () => {
                    CONTENT_ELEM.innerHTML = ""
                    PageNavbar();
                    homePage();
                    PageFooter();

                })
                break;
            case "Menu":
                item.addEventListener("click", () => {
                    CONTENT_ELEM.innerHTML = ""
                    PageNavbar();
                    menuPage();
                    PageFooter();

                })
                break;
        }
    })

})


PageNavbar();
homePage();
PageFooter();

