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

const CONTENT = document.getElementById("content")

const get_appetizers = () => {
    let m_item_divs = []
    APPETIZERS.forEach((appetizer) => {
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

    get_appetizers().forEach(appetizer => {
        appetizers_div.appendChild(appetizer)
    })

    appetizer_wrapper.appendChild(appetizer_title);
    appetizer_wrapper.appendChild(appetizers_div)
    menu_div.appendChild(appetizer_wrapper)

    CONTENT.appendChild(menu_div)
    


}

`
<div class="menu">
<div class="appetizers-wrapper">
    <div id="appetizers-title"><h2>Appetizers</h2></div>
    <div class="appetizers">
        <div class="menu-item">
            <h3>STARTER SALAD - CAESAR</h2>
            <p>Romaine lettuce, smoked bacon, croutons, Grana Padano cheese, signature Caesar dressing.</p>
            <p class="price">9 $</p>
        </div>
        <div class="menu-item">
            <h3>CRISPY SHRIMP</h2>
            <p>Hand-battered in Cajun spices, enhanced with General Tao sauce, served on Asian slaw</p>
            <p class="price">18 $</p>
        </div>
        <div class="menu-item">
            <h3>CHEDDAR DIP</h2>
            <p>Warm blend of cheeses, diced tomatoes enhanced with Smoke Show® hot sauce, served with warm
            tortilla chips.</p>
            <p class="price">14 $</p>
        </div>
        <div class="menu-item">
            <h3>CAULIFLOWER WINGS</h2>
            <p>Crispy cauliflower bites topped with General Tao sauce and sesame seeds</p>
            <p class="price">12 $</p>
        </div>
    </div>

</div>

<div class = "main-dishes-wrapper">
    <div id="main-dishes-title"><h2>Main dishes</h2></div>
    <div class="main-dishes">
        <div class="menu-item">
            <h3>CLUB SANDWICH</h2>
            <p>Flame-grilled chicken breast, smoked bacon, Monterey Jack, lettuce, tomato & mayonnaise</p>
            <p class="price">19 $</p>
        </div>
        <div class="menu-item">
            <h3>BIG DEVIL BURGER</h2>
            <p>Premium beef, onion rings, tomatoes, Swiss cheese, smoked bacon with sweet & spicy BBQ sauce</p>
            <p class="price">20 $</p>
        </div>
        <div class="menu-item">
            <h3>CHICKEN TENDERS PLATTER</h2>
            <p>Five hand-battered chicken tenders, served with BBQ & Dijonnaise sauces or French fries</p>
            <p class="price">21 $</p>
        </div>
        <div class="menu-item">
            <h3>BBQ PORK BACK RIBS</h2>
            <p>Our signature fall-off-the-bone pork back ribs, slow-cooked at low heat for 8 hours until they’re mouthwateringly tender and basted with our made-in-house classic Bâton Rouge BBQ sauce.</p>
            <p class="price">28 $</p>
        </div>
        <div class="menu-item">
            <h3>RIBS & JUMBO BLACK TIGER SHRIMP</h2>
            <p>A full rack of ribs served alongside a Black Tiger shrimp skewer, smothered in BBQ sauce</p>
            <p class="price">45 $</p>
        </div>
        <div class="menu-item">
            <h3>FILET MIGNON</h2>
            <p>THE FINEST CUTS. Our Reserve Steaks are certified Canada AAA, hand-selected for superior quality and marbling, aged to tender perfection then seasoned with our own spice blend and served alongside our signature peppercorn sauce.</p>
            <p class="price">44 $</p>
        </div>
        <div class="menu-item">
            <h3>NEW YORK STRIPLOIN</h2>
            <p>The result is a richness of flavour distinct to Bâton Rouge. Dishes are served with seasonal vegetables and one choice among the following: French fries, garlic mashed potatoes, fully loaded baked potato, sweet potato fries, coleslaw, wild rice pilaf or side salad</p>
            <p class="price">41 $</p>
        </div>
    </div>
</div>
</div>
`

export {menuPage}