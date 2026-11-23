export const displayReservation = function() {
    console.log("Hey, Reservation works!")

    const content = document.querySelector("#content");

    content.textContent = "";

    const subtitle = document.createElement("p");
    subtitle.classList = "subtitle";
    subtitle.textContent = "Good food tastes even better when shared";
    content.appendChild(subtitle);

    const title = document.createElement("h1");
    title.textContent = "Your Table Is Waiting"
    content.appendChild(title);

    const legend = document.createElement("p");
    legend.textContent = "Book your table and let us take care of the rest. We look forward to welcoming you!";
    content.appendChild(legend);

    const reservationBlock = document.createElement("div");
    reservationBlock.id = "reservation-block";
    content.appendChild(reservationBlock);

        const restaurantInfo = document.createElement("div");
        restaurantInfo.id = "restaurant-info";
        reservationBlock.appendChild(restaurantInfo);

            const restaurantName = document.createElement("h2");
            restaurantName.textContent = "Tideline";
            restaurantInfo.appendChild(restaurantName);

                const taggline = document.createElement("p");
                taggline.classList = "description";
                taggline.textContent = "Fresh from the sea. Made with love."
                restaurantInfo.appendChild(taggline);

                const adress = document.createElement("p");
                adress.classList = "description";
                adress.textContent = "📍 24 Ocean Drive, Seaside, CA";
                restaurantInfo.appendChild(adress);

            const opening = document.createElement("h3");
            opening.textContent = "Opening Hours"
            restaurantInfo.appendChild(opening);

                const weekHours = document.createElement("p");
                weekHours.classList = "description";
                weekHours.textContent = "Monday – Friday: 12 PM – 10 PM";
                restaurantInfo.appendChild(weekHours);

                const weekendHours = document.createElement("p");
                weekendHours.classList = "description";
                weekendHours.textContent = "Saturday – Sunday: 11 AM – 11 PM";
                restaurantInfo.appendChild(weekendHours);

            const contact = document.createElement("h3");
            contact.textContent = "Contact";
            restaurantInfo.appendChild(contact);

                const email = document.createElement("p");
                email.classList = "description";
                email.textContent = "hello@tidelinerestaurant.com"
                restaurantInfo.appendChild(email);

            const form = document.createElement("form");
            form.id = "reservation-info";
            form.classList = "description";
            reservationBlock.appendChild(form);

                const date = document.createElement("input");
                date.type = "date";
                form.appendChild(date);

                const time = document.createElement("input");
                time.type = "time";
                time.min = "12:00";
                time.max = "21:30";
                form.appendChild(time);

                const sideBySide = document.createElement("div");
                sideBySide.classList = "side-by-side";
                form.appendChild(sideBySide);
                
                    const label = document.createElement("label");
                    label.htmlFor = "nb-people";
                    label.textContent = "Number of guests";
                    sideBySide.appendChild(label);

                    const nbPeople  = document.createElement("input");
                    nbPeople.id = "nb-people";
                    nbPeople.type = "number";
                    nbPeople.min = 1;
                    sideBySide.appendChild(nbPeople);
                
                const reservationMail = document.createElement("input");
                reservationMail.type = "email";
                reservationMail.placeholder = "your-email@mail.com";
                form.appendChild(reservationMail);

                const confirm = document.createElement("button");
                confirm.type = "submit";
                confirm.textContent = "Confirm";
                confirm.id = "confirm-reservation";
                confirm.classList = "cta";
                form.appendChild(confirm);

                const confirmLegend = document.createElement("p");
                confirmLegend.classList = "legend final-legend";
                confirmLegend.textContent = "You'll receive a confirmation email shortly after submitting your request.";
                form.appendChild(confirmLegend);
}