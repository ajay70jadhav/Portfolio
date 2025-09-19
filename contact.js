// Initialize EmailJS (Replace with your actual User ID)
emailjs.init("JADHAVwMAVrMAJAYjTMqPVGULABm5S8D"); // Use your correct EmailJS user ID

// Contact form submission logic
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector('input[name="from_name"]').value.trim();
  const email = document.querySelector('input[name="reply_to"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before sending your message.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Send email using EmailJS
  emailjs
    .send("service_gggh9kw", "template_qx2feln", {
      from_name: name,
      reply_to: email,
      message: message,
      time: new Date().toLocaleString(),
    })
    .then(
      function (response) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);

        // Clear the form after successful submission
        document.querySelector('input[name="from_name"]').value = "";
        document.querySelector('input[name="reply_to"]').value = "";
        document.querySelector('textarea[name="message"]').value = "";
      },
      function (error) {
        alert("Failed to send your message. Please try again later.");
        console.error("Error:", error);
      }
    );

  // Debugging logs
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
});

// Helper function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
