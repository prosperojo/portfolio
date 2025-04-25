const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    themeToggle.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
});
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
});

  emailjs.init("ExTPUJGL0bFVZiR4v");

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_4z9rixo', 'template_s3i7n3i', '#contact-form')
      .then(() => {
        alert('Message sent!');
        document.getElementById('contact-form').reset();
      }, (error) => {
        alert('Error sending message');
        console.error(error);
      });
  }

  document.getElementById("year").textContent = new Date().getFullYear();


