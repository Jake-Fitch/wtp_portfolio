// Set initial prices
    // Set show prices
const showPrice_phantomOfTheOpera = 79;
const showPrice_hamilton = 85;
const showPrice_lionKing = 67;
const showPrice_missSaigon = 83;
    // Set delivery prices
const deliveryCost_eTicket = 0;
const deliveryCost_collect = 1.5;
const deliveryCost_posted = 3.99;
// Get HTML elements
    // Get return button
const btn_return = document.getElementById("btn_return");
    // Get user info
const txt_name = document.getElementById("name");
const txt_address_line1 = document.getElementById("address_line1");
const txt_address_line2 = document.getElementById("address_line2");
const txt_address_line3 = document.getElementById("address_line3");
const txt_address_townCity = document.getElementById("address_townCity");
const txt_address_county = document.getElementById("address_county");
const txt_address_postcode = document.getElementById("address_postcode");
    // Get show choice info
const txt_show = document.getElementById("showSelect");
const txt_seats = document.getElementById("seats");
const txt_delivery = document.getElementById("deliverySelect");
// Get submit button
const btn_submit = document.getElementById("submit");
// Add event listeners to buttons
btn_return.addEventListener("click", returnToPage);
btn_submit.addEventListener("click", submitForm);
// Other definitions
let showCost;
let discountedPrice;
let totalCost;
let discountValue = 0;
let discountPercent = 0;
let calcPrice;
let showName;
let ticketName;
// Functions
    // Return to programming skills page function
function returnToPage() {
    open("../progSkills.html");
}
    // Submit form function
function submitForm() {
    event.preventDefault();
    switch (txt_show.value) {
        case "phantomOfTheOpera":
            showName = "The Phantom of the Opera (£79 each)";
            showCost = showPrice_phantomOfTheOpera * parseInt(txt_seats.value);
            break;
        case "hamilton":
            showName = "Hamilton (£85 each)";
            showCost = showPrice_hamilton * parseInt(txt_seats.value);
            break;
        case "lionKing":
            showName = "The Lion King (£67 each)";
            showCost = showPrice_lionKing * parseInt(txt_seats.value);
            break;
        case "missSaigon":
            showName = "Miss Saigon (£83 each)";
            showCost = showPrice_missSaigon * parseInt(txt_seats.value);
            break;
    }
    if (parseInt(txt_seats.value) < 6) {
        calcPrice = showCost;
    } else if (parseInt(txt_seats.value) < 10 && parseInt(txt_seats.value) >= 6) {
        discountValue = showCost / 10;
        calcPrice = showCost - discountValue;
        discountPercent = 10;
    } else {
        discountValue = (showCost / 100) * 15;
        calcPrice = showCost - discountValue;
        discountPercent = 15;
    }
    switch (txt_delivery.value) {
        case "eTicket":
            ticketName = "eTicket (Free)";
            totalCost = calcPrice;
            break;
        case "collect":
            ticketName = "Collection (£1.50)";
            totalCost = calcPrice + deliveryCost_collect;
            break;
        case "posted":
            ticketName = "Postage (£3.99)";
            totalCost = calcPrice + deliveryCost_posted;
            break;
    }
    const innerContainer = document.getElementById("mainContentContainer");
    // Replace form with digital reciept container
    innerContainer.innerHTML = `<p id="receipt"></p>`;
    // Get output marker
    const txt_receipt = document.getElementById("receipt");
    // Create digital reciept
    txt_receipt.innerText = 
    "Name:\n" + txt_name.value + "\n\n" + 
    "Address:\n" + txt_address_line1.value + "\n" + 
    txt_address_line2.value + "\n" + 
    txt_address_line3.value + "\n" + 
    txt_address_townCity.value + "\n" + 
    txt_address_county.value + "\n" + 
    txt_address_postcode.value + "\n\n" + 
    "Show:\n" + showName + "\n\n" + 
    "No. of seats:\n" + txt_seats.value + "\n\n" + 
    "Cost of tickets:\n£" + showCost.toFixed(2) + "\n\n" + 
    "Discount:\n£" + discountValue.toFixed(2) + " (" + discountPercent + "%)\n\n" +
    "Ticket:\n" + ticketName + "\n\n" + 
    "Total cost:\n£" + totalCost.toFixed(2);
}