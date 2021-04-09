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
            alert("Email Sent!", response);
        },
        function(error) {
            alert("Failed to Send!", error);
        });
        return false;
}

// Function to reset value if input name/email & text area of message on submit (code altered to suit my project)- https://stackoverflow.com/questions/35492054/how-to-reset-input-field-jquery
$(document).ready(function(){
    $('form[name=contactForm]').on('submit', function() {
          $('input[name=name]').val("")
          $('input[name=emailaddress]').val("")
          $('textarea[name=message]').val("")
        });
});