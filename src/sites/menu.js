const APPETIZERS = [ {
        name: "STARTER SALAD - CAESAR",
        description: "Romaine lettuce, smoked bacon, croutons, Grana Padano cheese, signature Caesar dressing.",
        price: "9 $"
    },

    {
        name: "CRISPY SHRIMP",
        description: "Hand-battered in Cajun spices, enhanced with General Tao sauce, served on Asian slaw",
        price: "18 $"
    },

    {
        name: "CHEDDAR DIP",
        description: "Warm blend of cheeses, diced tomatoes enhanced with Smoke Show® hot sauce, served with warm tortilla chips.",
        price: "14 $"
    },

    {
        name: "CAULIFLOWER WINGS",
        description: "Crispy cauliflower bites topped with General Tao sauce and sesame seeds",
        price: "12 $"
    }
]

const MAIN_DISHES = [
    {
        name: "CLUB SANDWICH",
        description: "Flame-grilled chicken breast, smoked bacon, Monterey Jack, lettuce, tomato & mayonnaise",
        price: "19 $"
    },
    {
        name: "BIG DEVIL BURGER",
        description: "Premium beef, onion rings, tomatoes, Swiss cheese, smoked bacon with sweet & spicy BBQ sauce",
        price: "20 $"
    },
    {
        name: "CHICKEN TENDERS PLATTER",
        description: "Five hand-battered chicken tenders, served with BBQ & Dijonnaise sauces or French fries",
        price: "21 $"
    },
    {
        name: "BBQ PORK BACK RIBS",
        description: "Our signature fall-off-the-bone pork back ribs, slow-cooked at low heat for 8 hours until they’re mouthwateringly tender and basted with our made-in-house classic Bâton Rouge BBQ sauce.",
        price: "28 $"
    },
    {
        name: "RIBS & JUMBO BLACK TIGER SHRIMP",
        description: "A full rack of ribs served alongside a Black Tiger shrimp skewer, smothered in BBQ sauce",
        price: "45 $"
    },
    {
        name: "FILET MIGNON",
        description: "THE FINEST CUTS. Our Reserve Steaks are certified Canada AAA, hand-selected for superior quality and marbling, aged to tender perfection then seasoned with our own spice blend and served alongside our signature peppercorn sauce.",
        price: "44 $"
    },
    {
        name: "NEW YORK STRIPLOIN",
        description: "The result is a richness of flavour distinct to Bâton Rouge. Dishes are served with seasonal vegetables and one choice among the following: French fries, garlic mashed potatoes, fully loaded baked potato, sweet potato fries, coleslaw, wild rice pilaf or side salad",
        price: "41 $"
    },

]

const CONTENT = document.getElementById("content")

const get_menu = (menu_type) => {
    let m_item_divs = []
    let menu_items;
    if (menu_type === "appetizer") {
        menu_items = APPETIZERS
    } else if (menu_type === "main") {
        menu_items = MAIN_DISHES
    }
    menu_items.forEach((appetizer) => {
        let m_item_div = document.createElement("div");
        m_item_div.className = "menu-item";

        let m_item_name = document.createElement("h3");
        m_item_name.textContent = appetizer.name;

        let m_item_desc = document.createElement("p");
        m_item_desc.textContent = appetizer.description;

        let m_item_price = document.createElement("p")
        m_item_price.className = "price";
        m_item_price.textContent = appetizer.price;

        m_item_div.appendChild(m_item_name);
        m_item_div.appendChild(m_item_desc);
        m_item_div.appendChild(m_item_price)

        m_item_divs.push(m_item_div)
    })

    return m_item_divs;
}

const menuPage = () => {

    // APPETIZERS HTML CODE
    const menu_div = document.createElement("div");
    menu_div.className = "menu";

    const appetizer_wrapper = document.createElement("div");
    appetizer_wrapper.className = "appetizers-wrapper";

    const appetizer_title_div = document.createElement("div");
    appetizer_title_div.id = "appetizers-title";

    const appetizer_title = document.createElement("h2");
    appetizer_title.textContent = "Appetizers"
    
    appetizer_title_div.appendChild(appetizer_title);

    const appetizers_div = document.createElement("div");
    appetizers_div.className = "appetizers";

    get_menu("appetizer").forEach(appetizer => {
        appetizers_div.appendChild(appetizer)
    })

    appetizer_wrapper.appendChild(appetizer_title);
    appetizer_wrapper.appendChild(appetizers_div)

    // MAIN-DISH HTML CODE

    const main_dish_wrapper = document.createElement("div");
    main_dish_wrapper.className = "main-dish-wrapper";

    const main_dish_title_div = document.createElement("div");
    main_dish_title_div.id = "main-dish-title";

    const main_dish_title = document.createElement("h2");
    main_dish_title.textContent = "Main dishes";

    main_dish_title_div.appendChild(main_dish_title);

    const main_dishes_div = document.createElement("div");
    main_dishes_div.className = "main-dishes"

    get_menu("main").forEach(main_dish => {
        main_dishes_div.appendChild(main_dish)
    })

    main_dish_wrapper.appendChild(main_dish_title);
    main_dish_wrapper.appendChild(main_dishes_div)



    menu_div.appendChild(appetizer_wrapper)
    menu_div.appendChild(main_dish_wrapper)

    CONTENT.appendChild(menu_div)
    


}


export {menuPage}