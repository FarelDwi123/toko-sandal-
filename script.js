script.js
// Toggle cart and other future interactive features

document.addEventListener('DOMContentLoaded', function () {
  const cartButtons = document.querySelectorAll('.add-to-cart');

  cartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const product = this.getAttribute('data-product');
      alert(`Produk "${product}" ditambahkan ke keranjang!`);
      // Di sini kamu bisa menambahkan logika penyimpanan cart ke localStorage
    });
  });

  // Fungsi sederhana untuk menandai halaman aktif
  const navLinks = document.querySelectorAll('.navbar a');
  const currentUrl = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl) {
      link.classList.add('active');
    }
  });
});