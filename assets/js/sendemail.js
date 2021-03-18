function sendMail(contactForm) {
    emailjs.send("gmail", "exploresiquijor", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
}