// Function to initialise email & send Mail based off (adjusted to suit my project)- sending Emails Using EmailJS lesson

(function () {
    emailjs.init("user_05b6DcHp56rlXYPEUQP1y");
})();

function sendMail(contactForm) {
    emailjs
        .send("gmail", "exploresiquijor", {
            from_name: contactForm.name.value,
            from_email: contactForm.emailaddress.value,
            message: contactForm.message.value,
        })
        .then(
            function (response) {
                alert("Email Sent!", response);
            },
            function (error) {
                alert("Failed to Send!", error);
            }
        );
    return false;
}

// Function to validate email text box (adjusted to suit my project- https://stackoverflow.com/questions/7635533/validate-email-address-textbox-using-javascript
function validate(email) {
    var emailRequirements = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailRequirements.test(email.value) == false) {
        alert("Invalid Email Address");
        return false;
    }
    return true;
}

// Function to reset value if input name/email & text area of message on submit (code altered to suit my project)- https://stackoverflow.com/questions/35492054/how-to-reset-input-field-jquery
$(document).ready(function () {
    $("form[name=contactForm]").on("submit", function () {
        $("input[name=name]").val("");
        $("input[name=emailaddress]").val("");
        $("textarea[name=message]").val("");
    });
});
