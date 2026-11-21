 
console.log("Business website loaded successfully!");

(function () {
    emailjs.init({
        publicKey: "a99IxwxWxwR5sa9vE"
    });
})();

function showMessage() {
    alert("Welcome to Areeb Business! Thank you for visiting.");
}

function sendMessage(event) {
    event.preventDefault();

    const form = event.target;

    emailjs.sendForm(
        "service_gjqwkox",
        "template_mtdly1b",
        form
    ).then(function () {
        alert("Your message has been sent successfully!");
        form.reset();
    }).catch(function (error) {
        console.log("Email error:", error);
        alert("Message could not be sent. Please try again.");
    });

    return false;
}
