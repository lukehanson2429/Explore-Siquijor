(function () {
emailjs.init("user_05b6DcHp56rlXYPEUQP1y");
})();


function sendMail(contactForm) {
    emailjs.send("gmail", "exploresiquijor", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("SUCCESS", response);
        },
        function(error) {
            alert("FAILED", error);
        });
        return false;
}