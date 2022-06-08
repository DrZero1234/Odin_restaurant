import "./style.css";
import {PageNavbar, PageFooter} from "./sites/template.js";
import {homePage} from "./sites/home.js"
import {menuPage} from "./sites/menu.js"
import {contactPage} from "./sites/contact.js"

document.addEventListener("DOMContentLoaded", () => {

    let CONTENT_ELEM = document.getElementById("content");
    const list_items = document.querySelectorAll("li");
    list_items.forEach((item) => {
        switch(item.textContent) {
            case "Home":
                item.addEventListener("click", () => {
                    const MAIN_ELEM = document.querySelector(".menu") || document.querySelector(".main") || document.querySelector(".contact-wrapper");
                    MAIN_ELEM.innerHTML = ""
                    if (MAIN_ELEM) {
                        CONTENT_ELEM.removeChild(MAIN_ELEM)
                    }
                    homePage();

                })
                break;
            case "Menu":
                item.addEventListener("click", () => {
                    const MAIN_ELEM = document.querySelector(".menu") || document.querySelector(".main")  || document.querySelector(".contact-wrapper");
                    MAIN_ELEM.innerHTML = ""
                    if (MAIN_ELEM) {
                        CONTENT_ELEM.removeChild(MAIN_ELEM)
                    };
                    menuPage();

                })
                break;

            case "Contact":
                item.addEventListener("click", () => {
                    const MAIN_ELEM = document.querySelector(".menu") || document.querySelector(".main")  || document.querySelector(".contact-wrapper");
                    MAIN_ELEM.innerHTML = ""
                    if (MAIN_ELEM) {
                        CONTENT_ELEM.removeChild(MAIN_ELEM)
                    };
                    contactPage(); 
                })
                break;
        }
    })

})


PageNavbar();
homePage();
PageFooter();

