// JavaScript untuk slider dan efek hover
const row = document.querySelector('.row');
const products = document.querySelectorAll('.product-card');
let currentIndex = 0;

// Fungsi untuk menggeser produk
function slideProducts(direction) {
  const productWidth = products[0].offsetWidth + 20; // Width + gap
  
  if(direction === 'next' && currentIndex < products.length - 1) {
    currentIndex++;
  } else if(direction === 'prev' && currentIndex > 0) {
    currentIndex--;
  }
  
  row.style.transform = `translateX(-${currentIndex * productWidth}px)`;
  updateActiveProduct();
}

// Event listeners untuk tombol next/prev
document.querySelector('.next-btn').addEventListener('click', () => slideProducts('next'));
document.querySelector('.prev-btn').addEventListener('click', () => slideProducts('prev'));

// Hover effect
products.forEach(product => {
  product.addEventListener('mouseenter', () => {
    if(!product.style.transform.includes('1.1')) { // Jika cursor di dalam produk
      product.style.transform = 'scale(1.05)';
    }
  });
  
  product.addEventListener('mouseleave', () => {
    if(!product.style.transform.includes('1.1')) { // Jika cursor di luar produk
      product.style.transform = 'scale(1)';
    }
  });
});

// Auto slide setiap 3 detik
setInterval(() => {
  if(currentIndex < products.length - 6) {
    slideProducts('next');
  } else {
    currentIndex = -1;
    slideProducts('next');
  }
}, 3000);