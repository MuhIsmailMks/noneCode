document.addEventListener('DOMContentLoaded', () => {
  const dropBtn = document.querySelector('.dropBtn');
  const dropdownContent = document.querySelector('.dropdown-container');
  const dropIcon = document.querySelector('.dropIcon');

  dropBtn.addEventListener('click', () => { 
    dropdownContent.classList.toggle('active');
    dropIcon.classList.toggle('active');
  });

  const dropdownLinks = document.querySelectorAll('.dropdown-container a'); // Semua elemen <a> dalam dropdown
  const textChoise = document.querySelector('.textChoise'); // Elemen tempat teks ditampilkan

  dropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Cegah aksi default link
      textChoise.textContent = link.textContent; // Ganti teks dalam elemen textChoise
    });
  });
});
