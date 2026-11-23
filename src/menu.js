import { displayReservation } from "./reservation.js";

export const displayMenu = function() {
    console.log("Hey Menu works");

    const content = document.querySelector("#content");

    content.textContent = "";

    const subtitle = document.createElement("p");
    subtitle.classList = "subtitle";
    subtitle.textContent = "Tideline Menu";
    content.appendChild(subtitle);

    const title = document.createElement("h1");
    title.textContent = "A Taste of the Ocean";
    content.appendChild(title);

    const legend = document.createElement("p");
    legend.class = "border-bottom";
    legend.textContent = "Carefully selected ingredients, freshly prepared every day.";
    content.appendChild(legend);

    const starters = document.createElement("h2");
    starters.textContent = "Starters";
    content.appendChild(starters);

        const menuItem1 = document.createElement("div");
        menuItem1.classList = "menu-item";
        content.appendChild(menuItem1);

            const oysters = document.createElement("p");
            oysters.classList = "dish";
            oysters.textContent = "Fresh Oysters — $18";
            menuItem1.appendChild(oysters);

            const oystersDescription = document.createElement("p");
            oystersDescription.classList = "description";
            oystersDescription.textContent = "Six freshly shucked oysters, served with lemon and shallot vinegar.";
            menuItem1.appendChild(oystersDescription);
        
        const menuItem2 = document.createElement("div");
        menuItem2.classList = "menu-item";
        content.appendChild(menuItem2);

            const calamari = document.createElement("p");
            calamari.classList = "dish";
            calamari.textContent = "Crispy Calamari — $14";
            menuItem2.appendChild(calamari);

            const calamariDescription = document.createElement("p");
            calamariDescription.classList = "description";
            calamariDescription.textContent = "Golden fried calamari rings with homemade lemon aioli.";
            menuItem2.appendChild(calamariDescription);
        
        const menuItem3 = document.createElement("div");
        menuItem3.classList = "menu-item border-bottom";
        content.appendChild(menuItem3);

            const scallops = document.createElement("p");
            scallops.classList = "dish";
            scallops.textContent = "Seared Scallops — $19";
            menuItem3.appendChild(scallops);

            const scallopsDescription = document.createElement("p");
            scallopsDescription.classList = "description";
            scallopsDescription.textContent = "Pan-seared scallops with creamy cauliflower purée and fresh herbs.";
            menuItem3.appendChild(scallopsDescription);
        
    const mainCourses =document.createElement("h2");
    content.appendChild(mainCourses);

        const menuItem4 = document.createElement("div");
        menuItem4.classList = "menu-item";
        content.appendChild(menuItem4);

            const lobster = document.createElement("p");
            lobster.classList = "dish";
            lobster.textContent = "Grilled Atlantic Lobster — $38";
            menuItem4.appendChild(lobster);

            const lobsterDescription = document.createElement("p");
            lobsterDescription.classList = "description";
            lobsterDescription.textContent = "Half lobster grilled with garlic butter, served with roasted potatoes.";
            menuItem4.appendChild(lobsterDescription);

        const menuItem5 = document.createElement("div");
        menuItem5.classList = "menu-item";
        content.appendChild(menuItem5);

            const linguine = document.createElement("p");
            linguine.classList = "dish";
            linguine.textContent = "Seafood Linguine — $26";
            menuItem5.appendChild(linguine);

            const linguineDescription = document.createElement("p");
            linguineDescription.classList = "description";
            linguineDescription.textContent = "Fresh linguine tossed with prawns, mussels, cherry tomatoes and white wine sauce.";
            menuItem5.appendChild(linguineDescription);

        const menuItem6 = document.createElement("div");
        menuItem6.classList = "menu-item border-bottom";
        content.appendChild(menuItem6);

            const catchOfTheDay = document.createElement("p");
            catchOfTheDay.classList = "dish";
            catchOfTheDay.textContent = "Catch of the Day — $29";
            menuItem6.appendChild(catchOfTheDay);

            const catchOfTheDayDescription = document.createElement("p");
            catchOfTheDayDescription.classList = "description";
            catchOfTheDayDescription.textContent = "Fresh market fish, grilled to perfection with seasonal vegetables.";
            menuItem6.appendChild(catchOfTheDayDescription);

    const dessert = document.createElement("h2");
    content.appendChild(dessert);

        const menuItem7 = document.createElement("div");
        menuItem7.classList = "menu-item";
        content.appendChild(menuItem7);

            const pie = document.createElement("p");
            pie.classList = "dish";
            pie.textContent = "Lemon Meringue pie — $10";
            menuItem7.appendChild(pie);

            const pieDescription = document.createElement("p");
            pieDescription.classList = "description";
            pieDescription.textContent = "Homemade lemon curd tart topped with golden, fluffy toasted meringue.";
            menuItem7.appendChild(pieDescription);

        const menuItem8 = document.createElement("div");
        menuItem8.classList = "menu-item border-bottom";
        content.appendChild(menuItem8);

            const fondant = document.createElement("p");
            fondant.classList = "dish";
            fondant.textContent = "Chocolate Fondant — $12";
            menuItem8.appendChild(fondant);

            const fondantDescription = document.createElement("p");
            fondantDescription.classList = "description";
            fondantDescription.textContent = "Warm chocolate cake with a melting center and vanilla ice cream.";
            menuItem8.appendChild(fondantDescription);

    const menuCta = document.createElement("div");
    menuCta.id = "menu-cta";
    content.appendChild(menuCta);

    menuCta.addEventListener("click", (event) => {
        displayReservation();
    });
    
    const info = document.createElement("p");
    info.textContent = "Please ask our team about today's fresh catch and seasonal specials.";
    menuCta.appendChild(info);

    const secondCta = document.createElement("button");
    secondCta.classList = "cta";
    secondCta.textContent = "Book a table";
    menuCta.appendChild(secondCta);
}