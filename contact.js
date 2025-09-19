// Initialize EmailJS with your Public Key
emailjs.init("wMAVrMjTMqPVm5S8D");

// Handle form submit
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const form = this;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;

  const name = form.querySelector('input[name="from_name"]').value.trim();
  const email = form.querySelector('input[name="reply_to"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  // Validate inputs
  if (!name || !email || !message) {
    alert("Please fill out all fields before sending your message.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';

  // Send email using EmailJS
  emailjs
    .sendForm("service_gggh9kw", "template_qx2feln", form)
    .then(
      function (response) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        form.reset();
      },
      function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send your message. Check console for details.");
      }
    )
    .finally(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
    });
});

// Helper function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
