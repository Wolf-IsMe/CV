document.getElementById("hireMeBtn").addEventListener("click", function () {
  // Define the email details
  var recipient = "kaos11ang@gmail.com";
  var subject = "Hiring Inquiry";
  var body =
    `Dear Niel Bert Fabale,\n\n` +
    `My name is [Your Name], and I am writing to express my interest in hiring you for a potential opportunity at [Your Company]. After reviewing your profile and expertise, I believe that your skills align perfectly with our needs.\n\n` +
    `At [Your Company], we are currently looking for a talented individual who can contribute to our [specific project or team]. Your experience in [relevant field or skill] makes you an excellent candidate for this role.\n\n` +
    `We would be delighted to discuss this opportunity with you in more detail. Please let us know your availability for a meeting or phone call, or feel free to reach out to me directly at [Your Contact Information].\n\n` +
    `Thank you for considering this opportunity. I look forward to the possibility of working together.\n\n` +
    `Best regards,\n\n` +
    `[Your Name]\n` +
    `[Your Position]\n` +
    `[Your Company]\n` +
    `[Your Contact Information]`;

  // Encode the body text
  var encodedBody = encodeURIComponent(body)
    .replace(/%20/g, "+")
    .replace(/%0A/g, "%0D%0A");

  // Construct the mailto URL
  var mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodedBody}`;

  // Open the mailto link in the default email client
  window.location.href = mailtoLink;
});

document.addEventListener("DOMContentLoaded", () => {
  // Get modal elements
  const modal = document.getElementById("certificateModal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.querySelector(".close");

  // Add event listener to certificate thumbnails
  document.querySelectorAll(".certificate-thumbnail").forEach((item) => {
    item.addEventListener("click", function () {
      const fullsizeSrc = this.getAttribute("data-fullsize");
      if (fullsizeSrc) {
        modalImage.src = fullsizeSrc;
        modal.style.display = "flex";
      }
    });
  });

  // Close the modal
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal if the user clicks outside the image
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
