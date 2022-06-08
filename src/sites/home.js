
const content = document.getElementById("content")

const homePage = () => {

    const main = document.createElement("div");
    main.className = "main"

    const main_icon = document.createElement("img");
    main_icon.setAttribute("alt", "restaurant icon")
    main_icon.setAttribute("src", "../src/icon.png")

    const company_name = document.createElement("h1");
    company_name.id = "main-title";
    company_name.textContent = "The United Stakes";

    const company_slogan = document.createElement("h2");
    company_slogan.textContent = "We not only meat expectations we exceed them"

    main.appendChild(main_icon);
    main.appendChild(company_name);
    main.appendChild(company_slogan);

    content.appendChild(main)


}

export  {homePage}
