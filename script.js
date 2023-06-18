// Sayfa yüklendiğinde yapılacak işlemler
window.addEventListener('DOMContentLoaded', (event) => {
  // Daha fazla bilgi butonuna tıklandığında hakkımızda sayfasına yönlendirme
  const dahaFazlaBilgiButton = document.querySelector('#dahaFazlaBilgi');
  dahaFazlaBilgiButton.addEventListener('click', () => {
    window.location.href = 'hakkimizda.html';
  });

  // İletişim formunu kontrol etme
  const contactForm = document.querySelector('#contactForm');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelleme

    // Form verilerini alıp gönderme işlemini burada yapabilirsiniz
    // Örneğin, bir API'ye POST isteği göndermek gibi
    // Bu örnekte formun gönderildiğini simüle ediyoruz
    alert('Mesajınız gönderildi!');
    contactForm.reset(); // Formu sıfırla
  });
});
