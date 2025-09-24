document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form alert
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
  this.reset();
});