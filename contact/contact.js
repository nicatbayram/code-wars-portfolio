const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Formdaki verileri al
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Verileri işle veya gönder
  // Burada form verilerini bir sunucuya göndermek veya başka bir işlem yapmak için gereken kodu ekleyebilirsiniz.

  // Formu temizle
  contactForm.reset();
});