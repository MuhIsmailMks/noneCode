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


// back
const backNameInput = document.querySelector('#backName');
const imageBack = document.querySelector('.imageBack');
const imageBackText = imageBack.querySelector('.imageText');
const previewImageBackContainer = document.querySelector('.imageBack .imageFrontBackContainer .bgImageClr');

backNameInput.addEventListener('input', (event) => {
  const newValue = event.target.value;  
  imageBackText.textContent = newValue || "YOUR REG";  
});


// front
const frontNameInput = document.querySelector('#frontName');
const imageFront = document.querySelector('.imageFront ');
const imageFrontText = imageFront.querySelector('.imageText');


frontNameInput.addEventListener('input', (event) => {
  const newValue = event.target.value;  
  imageFrontText.textContent = newValue || "YOUR REG";

  if (imageBack.className.includes('sameFront')){
    imageBackText.textContent = newValue || "YOUR REG";
  }

});

// bgImageFrame 
const swiperImages = document.querySelectorAll('.mySwiper .imageChoise img');
 
const bgImage = document.getElementById('imageBgFrame');
 
swiperImages.forEach(image => {
  image.addEventListener('click', () => { 
    bgImage.src = image.src;
  });
});

// colors flag
const colorMap = {
  yellow: '#FECF03',
  white: '#FFFFFF',
  black: '#000000',
};


// back image 
const radioButtonsBack = document.querySelectorAll('input[name="back-style"]'); 
const backImgBtns = document.querySelectorAll('input[name="back-img"]'); 
const previewImageBack = document.getElementById('previewImageBack');
 
// flag
radioButtonsBack.forEach((radio) => {
  radio.addEventListener('change', () => {
    previewImageBack.classList.add('active');
    const selectedValue = radio.value;  
    const newImageSrc = `./static/images/${selectedValue}.svg`; 
    previewImageBack.src = newImageSrc; 
  });
});
 
// back image 2
backImgBtns.forEach((radioBtn) => {
  radioBtn.addEventListener('change', () => {
    previewImageBack.classList.add('active');
    const selectedValue = radioBtn.value;  
    const selectedColor = radioBtn.classList[0];  
    console.log(selectedValue);
    
    const newImageSrc = `./static/images/${selectedValue}.svg`; 
    previewImageBack.src = newImageSrc; 

    const newColor = colorMap[selectedColor] || '';
    previewImageBackContainer.style.backgroundColor = newColor;
  });
});

// front image 
const radioButtons = document.querySelectorAll('input[name="front-style"]');
const previewImageFront = document.getElementById('previewImageFront');
const previewImageFrontContainer = document.querySelector('.imageFront .imageFrontBackContainer .bgImageClr');
 

radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    previewImageFront.classList.add('active');
    const selectedValue = radio.value;
    const selectedColor = radio.classList[0];  
    
    // Update the image
    const newImageSrc = `./static/images/${selectedValue}.svg`;
    previewImageFront.src = newImageSrc;

    if (imageBack.className.includes('sameFront')) {
      previewImageBack.classList.add('active');
      previewImageBack.src = newImageSrc;
    } 

    // Update background color
    const newColor = colorMap[selectedColor] || '';
    previewImageFrontContainer.style.backgroundColor = newColor;

    if (imageBack.className.includes('sameFront')) {
      previewImageBackContainer.style.backgroundColor = newColor;
    }

  });
});

// border key
const colorOptions = document.querySelectorAll('input[name="keyring-color"]');
const borderImgFrontContainer = document.querySelector('.imageFront .imageFrontBackContainer'); 
const borderImgBackContainer = document.querySelector('.imageBack .imageFrontBackContainer'); 
 
const colorProperties = {
  Silver: '#c0c0c0',
  Black: 'black',
  Gold: '#ffd700',
  Rose: '#ff007f',
  Gunmetal: '#53565A',
  Rainbow: 'rainbow',  
};

colorOptions.forEach((clrOption) => {
  clrOption.addEventListener('change', () => {
    const selectedColor = clrOption.value; 
    const color = colorProperties[selectedColor];

    if (color === 'rainbow') {
      borderImgFrontContainer.style.border = 'none';
      borderImgBackContainer.style.border = 'none';
      borderImgFrontContainer.classList.add('rainbowBorder');
      borderImgBackContainer.classList.add('rainbowBorder');
    } else {
      borderImgFrontContainer.style.border = `4px solid ${color}`;
      borderImgBackContainer.style.border = `4px solid ${color}`;
      borderImgFrontContainer.classList.remove('rainbowBorder');
      borderImgBackContainer.classList.remove('rainbowBorder');
    }
  });
});


// text
const textarea = document.getElementById('inputText');
const output = document.querySelector('.imageBack #imageText');
const maxFontSize = 56;  
const minFontSize = 1;  
textarea.addEventListener('input', function() {
  const text = textarea.value;
  output.textContent = text;
 
  imageBackText.classList.remove('normalFont')
  let fontSize = maxFontSize;
  output.style.fontSize = fontSize + 'px';

  while (output.scrollWidth > output.clientWidth && fontSize > minFontSize) {
    fontSize -= 1;  
    output.style.fontSize = fontSize + 'px';
  }
});


// backside option
const dropdownBtns = document.querySelectorAll('.dropdown-container label'); 
const targetDivs = document.querySelectorAll('.backsideoption'); 

dropdownBtns.forEach((dropdown) => { 
    dropdown.addEventListener('click', () => {
        const valueOnput = dropdown.querySelector('input');
        imageBackText.classList.add('normalFont')
        const selectedValue = valueOnput.value;
       console.log(selectedValue);
       
        targetDivs.forEach((div) => {
            div.classList.remove('active');
        }); 

        // if click same front
        if(selectedValue === 'sameAsFront'){ 
          imageBack.classList.add('sameFront');

          // follow the front
          previewImageBack.src = previewImageFront.src 
          const bgColor = getComputedStyle(previewImageFrontContainer).backgroundColor;
          const textFront = imageFrontText.textContent
          
          previewImageBackContainer.style.backgroundColor = bgColor;
          imageBackText.innerHTML = textFront;

          document.querySelectorAll(`.${selectedValue}, .${selectedValue}.backsideoption`).forEach((element) => {
            element.classList.remove('active');
           });
        }
        // end same front
         
        
        // numberPlate
        if(selectedValue === 'numberPlate'){ 
          imageBack.classList.add('sameSize'); 
        }

        if(selectedValue !== 'numberPlate'){ 
          imageBack.classList.remove('sameSize'); 
        }

        // all div
        document.querySelectorAll(`.${selectedValue}, .${selectedValue}.backsideoption`).forEach((element) => {
            element.classList.add('active');
            if (selectedValue !== 'sameFront') {
              imageBack.classList.remove('sameFront');
            }

        
        });

    });
});
 


// upload image
const imageInput = document.getElementById('imageInput');
const previewImage2 = document.getElementById('previewImageBack');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];  

  if (file) {
    const reader = new FileReader();
 
    previewImageBack.classList.add('active');
    reader.onload = function(e) {
      previewImage2.src = e.target.result; 
      previewImage2.style.display = 'block'; 
    };

    reader.readAsDataURL(file);  
  }
});




// change background
const colorBackElements = document.querySelectorAll('.colorBack'); 
const bgImageClr = document.querySelector('.imageBack .bgImageClr');
 
colorBackElements.forEach((colorBack) => {
  colorBack.addEventListener('click', () => { 
    const color = colorBack.style.getPropertyValue('--clr');
     
    bgImageClr.style.backgroundColor = color;
  });
});
