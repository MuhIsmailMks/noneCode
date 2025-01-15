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
      dropdownContent.classList.remove('active');
    });
  });
});

// front
const frontNameInput = document.querySelector('#frontName');
const imageFront = document.querySelector('.imageFront ');
const imageFrontText = imageFront.querySelector('.imageText');

const backNameInput = document.querySelector('#backName');
const imageBack = document.querySelector('.imageBack');
const imageBackText = imageBack.querySelector('.imageText');



frontNameInput.addEventListener('input', (event) => {
  const newValue = event.target.value;  
  imageFrontText.textContent = newValue || "YOUR REG";  
});


backNameInput.addEventListener('input', (event) => {
  const newValue = event.target.value;  
  imageBackText.textContent = newValue || "YOUR REG";  
});


// front image 
const radioButtons = document.querySelectorAll('input[name="front-style"]');
const previewImageFront = document.getElementById('previewImageFront');
 
radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    const selectedValue = radio.value;  
    const newImageSrc = `./static/images/${selectedValue}.svg`; 
    previewImageFront.src = newImageSrc;  gambar
  });
});


// back image 
const radioButtonsBack = document.querySelectorAll('input[name="back-style"]');
const previewImageBack = document.getElementById('previewImageBack');
 
radioButtonsBack.forEach((radio) => {
  radio.addEventListener('change', () => {
    const selectedValue = radio.value;  
    const newImageSrc = `./static/images/${selectedValue}.svg`; 
    previewImageBack.src = newImageSrc;  gambar
  });
});
