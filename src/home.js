import oystersImg from "./images/oysters.png";

export const displayHome  = function() {
    console.log("Home works!");

    const content = document.querySelector("#content");

    const heroSection = document.createElement("div");
    heroSection.id = "hero";

    const heroText = document.createElement("div");
    heroText.id = "hero-text";
    heroSection.appendChild(heroText);

    const heroImg = document.createElement("img");
    heroImg.src = oystersImg;
    heroImg.id = "hero-img"
    heroSection.appendChild(heroImg);

    const subtitle = document.createElement("p");
    subtitle.className = "subtitle";
    subtitle.textContent = "Welcome to Tideline, where the ocean meets the table";
    heroText.appendChild(subtitle);

    const title = document.createElement("h1");
    title.textContent = "Seafood Restaurant";
    heroText.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "We celebrate the finest flavors of the sea with fresh, locally sourced seafood, seasonal ingredients, and a passion for simple, honest cooking.";
    heroText.appendChild(description);

    const firstCta = document.createElement("button");
    firstCta.id = "reservation-cta";
    firstCta.classList = "cta";
    firstCta.textContent = "Book a table";
    heroText.appendChild(firstCta);

    const legend = document.createElement("p");
    legend.classList = "legend";
    legend.textContent = "Fresh catch. Good company. Unforgettable moments."
    heroText.appendChild(legend);

    content.appendChild(heroSection);
}