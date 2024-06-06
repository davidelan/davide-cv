
function sendMail(contactForm) {
    emailjs.send("outlook", "davide", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );

    document.getElementById('test2').style.display = 'none';
    document.getElementById("test").innerHTML = "<h1>Thank you for contacting me!</h1>";
    document.getElementById("test3").innerHTML = "<h3>... and for sharing your project idea!</h3>";
    setTimeout(() => {  window.open('contact.html','_self'); }, 10000); 

    return false;  // To block from loading a new page
}