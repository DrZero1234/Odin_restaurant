import location from "../location.jpg"

const content = document.getElementById("content")

const contactPage = () => {

    const contact_wrapper = document.createElement("div");
    contact_wrapper.className = "contact-wrapper"

    const contact_details_div = document.createElement("div");
    contact_details_div.className = "contact-details";

    const contact_title_div = document.createElement("div");
    contact_title_div.id = "contact-title";

    const contact_text_elem = document.createElement("h1");
    contact_text_elem.textContent = "Contact Us!"
    contact_title_div.appendChild(contact_text_elem);


    const contact_address_div = document.createElement("div");
    contact_address_div.id="contact-address";
    const contact_address_text = document.createElement("h3");
    contact_address_text.textContent = "Address: "
    const contact_address_number = document.createElement("span");
    contact_address_number.textContent = "37°14′0″N 115°48′30″W"

    contact_address_div.appendChild(contact_address_text)
    contact_address_div.appendChild(contact_address_number)

    const contact_phone_div = document.createElement("div");
    contact_phone_div.id="contact-phone";
    const contact_phone_text = document.createElement("h3");
    contact_phone_text.textContent = "Phone: "
    const contact_phone_number = document.createElement("span");
    contact_phone_number.textContent = "+1-202-555-0116";
    contact_phone_div.appendChild(contact_phone_text);
    contact_phone_div.appendChild(contact_phone_number); 

    const contact_email_div = document.createElement("div");
    contact_email_div.id="contact-email";
    const contact_email_text = document.createElement("h3");
    contact_email_text.textContent = "Email: "
    const contact_email_address = document.createElement("span");
    contact_email_address.textContent = "theunitedstakes@notfake.us";
    contact_email_div.appendChild(contact_email_text);
    contact_email_div.appendChild(contact_email_address); 

    const contact_fax_div = document.createElement("div");
    contact_email_div.id="contact-fax";
    const contact_fax_text = document.createElement("h3");
    contact_fax_text.textContent = "Fax: "
    const contact_fax_address = document.createElement("span");
    contact_fax_address.textContent = "+1-212-9876543";
    contact_fax_div.appendChild(contact_fax_text);
    contact_fax_div.appendChild(contact_fax_address); 

    // Contact Details
    contact_details_div.appendChild(contact_title_div);
    contact_details_div.appendChild(contact_address_div);
    contact_details_div.appendChild(contact_phone_div)
    contact_details_div.appendChild(contact_email_div);
    contact_details_div.appendChild(contact_fax_div);

    const contact_image_div = document.createElement("div");
    contact_image_div.className = "contact-image";

    const contact_image = document.createElement("img");
    contact_image.id = "location-img"
    contact_image.setAttribute("src", location)
    contact_image.setAttribute("alt", "Location Image")

    contact_image_div.appendChild(contact_image);


    contact_wrapper.appendChild(contact_details_div)
    contact_wrapper.appendChild(contact_image_div);
    content.appendChild(contact_wrapper);

}

export  {contactPage}
