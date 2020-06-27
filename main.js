// get buttons
const backBtn = document.querySelector('.back-btn');
const forwardBtn = document.querySelector('.forward-btn');

// get image div
const imageContainer = document.querySelector('.image-container');

// array of images
const imageArr = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6'];

// image url
const imageUrl = `url(images/${imageArr[0]}.jpg)`;

let count = 0;

// back btn envent listener
backBtn.addEventListener('click', () => {

  if (count == 0) {
    imageContainer.style.backgroundImage = `url(images/${imageArr[5]}.jpg)`;
    count = 5;
  } else {
    count--;
    imageContainer.style.backgroundImage = `url(images/${imageArr[count]}.jpg)`;
  }
});


// forward btn event listener
forwardBtn.addEventListener('click', () => {
  if (count == imageArr.length - 1) {
    imageContainer.style.backgroundImage = `url(images/${imageArr[0]}.jpg)`;
    count = 0;
  } else {
    count++;
    imageContainer.style.backgroundImage = `url(images/${imageArr[count]}.jpg)`;
  }
});

// set initial image
imageContainer.style.backgroundImage = imageUrl;