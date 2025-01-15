document.addEventListener('DOMContentLoaded', () => {
  const dropBtn = document.querySelector('.dropBtn');
  const dropdownContent = document.querySelector('.dropdown-container');
  const dropIcon = document.querySelector('.dropIcon');

  dropBtn.addEventListener('click', () => { 
    dropdownContent.classList.toggle('active');
    dropIcon.classList.toggle('active');
  });

  const dropdownLinks = document.querySelectorAll('.dropdown-container label');  
  const textChoise = document.querySelector('.textChoise');  

  dropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); 
      textChoise.textContent = link.textContent;  
    });
  });
});
