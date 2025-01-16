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


frontNameInput.addEventListener('input', (event) => {
  const newValue = event.target.value;  
  imageFrontText.textContent = newValue || "YOUR REG";  
});

// back
const backNameInput = document.querySelector('#backName');
const imageBack = document.querySelector('.imageBack');
const imageBackText = imageBack.querySelector('.imageText');


backNameInput.addEventListener('input', (event) => {
  const newValue = event.target.value;  
  imageBackText.textContent = newValue || "YOUR REG";  
});

// bgImageFrame 
const swiperImages = document.querySelectorAll('.mySwiper .imageChoise img');
 
const bgImage = document.getElementById('imageBgFrame');
 
swiperImages.forEach(image => {
  image.addEventListener('click', () => { 
    bgImage.src = image.src;

  });
});


// front image 
const radioButtons = document.querySelectorAll('input[name="front-style"]');
const previewImageFront = document.getElementById('previewImageFront');
const previewImageFrontContainer = document.querySelector('.imageFront .imageFrontBackContainer');
 

radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    previewImageFront.classList.add('active');
    const selectedValue = radio.value;
    const selectedColor = radio.classList[0];  
    
    // Update the image
    const newImageSrc = `./static/images/${selectedValue}.svg`;
    previewImageFront.src = newImageSrc;
 
    if (selectedColor === 'yellow') {
      previewImageFrontContainer.style.backgroundColor = '#FFD700';  
    } else if (selectedColor === 'white') {
      previewImageFrontContainer.style.backgroundColor = '#FFFFFF';  
    } else if (selectedColor === 'black') {
      previewImageFrontContainer.style.backgroundColor = '#000000';  
    } else {
      previewImageFrontContainer.style.backgroundColor = '';  
    }

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



// backside option
const dropdownBtns = document.querySelectorAll('.dropdown-container label'); 
const targetDivs = document.querySelectorAll('.backsideoption');
console.log(dropdownBtns);
console.log(radioButtons);

dropdownBtns.forEach((dropdown) => { 
    dropdown.addEventListener('click', () => {
        const valueOnput = dropdown.querySelector('input');
        const selectedValue = valueOnput.value;
      
        targetDivs.forEach((div) => {
            div.classList.remove('active');
        });
         
        document.querySelectorAll(`.${selectedValue}, .${selectedValue}.backsideoption`).forEach((element) => {
            element.classList.add('active');
        });
    });
});
 