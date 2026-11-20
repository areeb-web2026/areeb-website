console.log("Business website loaded successfully!");

function showMessage() {
    alert("Welcome to Areeb Business! Thank you for visiting.");
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website is ready!");
});
function sendMessage(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    event.target.reset();
}
