// Definitions
    // Get HTML elements
        // Get return to Programming Skills button
const btn_return = document.getElementById("btn_return");
        // Get text elements
const txt_credit = document.getElementById("txt_credit");
const txt_winnings = document.getElementById("txt_winnings");
        // Get slot images
const img_slot1 = document.getElementById("img_slot1");
const img_slot2 = document.getElementById("img_slot2");
const img_slot3 = document.getElementById("img_slot3");
        // Get message
const txt_message = document.getElementById("message");
        // Get slot buttons
const btn_spin = document.getElementById("btn_spin");
const btn_credit = document.getElementById("btn_credit");
const btn_collect = document.getElementById("btn_collect");
    // Add event listeners
        // Return to Programming Skills button event listener
btn_return.addEventListener("click", func_return);
        // Slot machine buttons event listeners
btn_spin.addEventListener("click", func_spin);
btn_credit.addEventListener("click", func_credit);
btn_collect.addEventListener("click", func_collect);
    // Define other variables
let spinAllowed = true;
// Return to Programming Skills page function
function func_return() {
    window.open("../progSkills.html");
}
txt_message.innerText = "Add Credit";
// Set Credits and Winnings to 0
let creditValue = 0;
let winningsValue = 0;
// Display both on page
txt_credit.innerText = creditValue;
txt_winnings.innerText = winningsValue;
// Disable "Spin" and "Collect" buttons
btn_spin.disabled = true;
btn_collect.disabled = true;
// Display 3 random fruit images on page first load
func_randomFruit();
// "Credit" button clicked
function func_credit() {
    event.preventDefault();
    creditValue++;
    txt_credit.innerText = creditValue;
    btn_spin.disabled = false
}
// "Collect" button clicked
function func_collect() {
    event.preventDefault();
    txt_message.innerText = "You collected winnings of " + winningsValue + " points!";
    winningsValue = 0;
    txt_winnings.innerText = winningsValue;
    btn_collect.disabled = true;
}
// "Spin" button clicked
function func_spin() {
    // Clear Message
    txt_message.innerText = "";
    // Decrease Credit by 1
    creditValue--;
    // Display Credit on page
    txt_credit.innerText = creditValue;
    if (creditValue == 0) {
        btn_spin.disabled = true;
        txt_message.innerText = "Add Credit";
    } else {
        txt_message.innerText = "Credit Removed";
    }
    // Display 3 random fruit images
    func_randomFruit();
    if (img_slot1.src == img_slot2.src && img_slot1.src == img_slot3.src) {
        winningsValue += 10;
        txt_winnings.innerText = winningsValue;
        txt_message.innerText = "You won 10 points!";
        } else if (img_slot2.src == img_slot3.src) {
            winningsValue += 5;
            txt_winnings.innerText = winningsValue;
            txt_message.innerText = "You won 5 points!";
        } else {
            txt_message.innerText = "You didn't win anything.";
        }
        if (winningsValue == 0) {
            btn_collect.disabled = true;
        }
        else {
            btn_collect.disabled = false;
        }
}
function func_randomFruit() {
    numGen1 = Math.round(Math.random() * 7);
    img_slot1.src = "images/fruit" + numGen1 + ".png";
    numGen2 = Math.round(Math.random() * 7);
    img_slot2.src = "images/fruit" + numGen2 + ".png";
    numGen3 = Math.round(Math.random() * 7);
    img_slot3.src = "images/fruit" + numGen3 + ".png";
}