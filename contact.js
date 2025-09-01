import emailjs from "emailjs-com";

// Initialize EmailJS (Replace with your actual User ID)
emailjs.init("JADHAVwMAVrMAJAYjTMqPVGULABm5S8D"); // Use your correct EmailJS user ID

// Contact form submission logic
document.getElementById("sendMessage").addEventListener("click", function () {
  const name = document
    .querySelector('.contact-box input[placeholder="Your Full Name"]')
    .value.trim();
  const email = document.querySelector('.contact-box input[placeholder="Your Email"]').value.trim();
  const message = document
    .querySelector('.contact-box input[placeholder="Share Your Thoughts.... "]')
    .value.trim();

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
      name: name,
      email: email,
      message: message,
      time: new Date().toLocaleString(),
    })
    .then(
      function (response) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);

        // Clear the form after successful submission
        document.querySelector('.contact-box input[placeholder="Your Full Name"]').value = "";
        document.querySelector('.contact-box input[placeholder="Your Email"]').value = "";
        document.querySelector('.contact-box input[placeholder="Share Your Thoughts.... "]').value =
          "";
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
