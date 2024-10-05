

let currentSlide = 0;
const carouselSlide = document.querySelector('.carousel-slide');
let isScrolling = false;
const movingBox = document.querySelector('.moving-box');
const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section = document.querySelector('.content-section');

// List of your own images and corresponding text
const slides = [
    {
        img: 'imgs/bg3.jpg',  // Relative path to the image
        title: 'SIZE',
        description: 'Description for image 1.'
    },
    {
        img: 'imgs/bg2.jpg',  // Relative path to the image
        title: 'LOCATION',
        description: 'Description for image 2.'
    },
    {
        img: 'imgs/bg1.jpg',  // Relative path to the image
        title: 'ATMOSPHERE',
        description: 'Description for image 3.'
    }


];


// Injecting the slides dynamically
slides.forEach((slide) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    carouselItem.innerHTML = `
    <img src="${slide.img}" alt="${slide.title}">
    <div class="carousel-text">
      <h2>${slide.title}</h2>
      <p>${slide.description}</p>
    </div>
  `;
    carouselSlide.appendChild(carouselItem);
});

function moveSlide(direction) {
    const slideWidth = document.querySelector('.carousel-item').clientWidth;

    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    carouselSlide.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

// Auto-slide functionality (moves to the next slide every 3 seconds)
setInterval(() => {
    moveSlide(1);
}, 3000);






/** **/


// Function to handle the box movement based on scroll position
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Calculate the max scroll value
    const scrollPercentage = scrollPosition / maxScroll; // Get scroll as a percentage

    // Get the animated element
    const animationElement = document.querySelector('.animation-element');

    // Set the transform properties based on scroll position
    const translateX = 400 * (0.05 - scrollPercentage); // Keep translation speed the same
    const rotation = 500 * scrollPercentage; // Increase rotation multiplier for faster spin

    // Apply the translation and faster rotation to the element
    animationElement.style.transform = `translate(${translateX}%, 0) rotate(${rotation}deg)`;
});


// Function to move the box based on scroll position
function handleScroll() {
    const section1Top = section1.offsetTop;
    const section2Top = section2.offsetTop;
    const sectionHeight = section1.offsetHeight;
    const scrollPosition = window.scrollY;

    // Calculate the progress of scrolling in the first section (from right to left)
    const scrollProgress1 = (scrollPosition - section1Top) / sectionHeight;

    // Move from right to left in the first section
    if (scrollProgress1 >= 0 && scrollProgress1 <= 1) {
        movingBox.style.right = `${(1 - scrollProgress1) * 100}vw`;
    }

    // Calculate the progress of scrolling in the second section (from top to bottom)
    const scrollProgress2 = (scrollPosition - section2Top) / sectionHeight;

    // When entering the second section, move the box down vertically
    if (scrollProgress2 >= 0 && scrollProgress2 <= 1) {
        movingBox.style.transform = `translateY(${scrollProgress2 * 100}vh) rotate(${scrollProgress2 * 360}deg)`;
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener("scroll", function () {
    const movingBox1 = document.querySelector('.moving-box-1');
    const scrollPosition = window.scrollY;

    // First section movement from right to left
    const section1 = document.querySelector('.section-1');
    const section2 = document.querySelector('.section-2');
    const section1Top = section1.offsetTop;
    const section2Top = section2.offsetTop;
    const section1Height = section1.offsetHeight;

    // Calculate scroll progress within section 1 and section 2
    const scrollProgress1 = (scrollPosition - section1Top) / (section2Top - section1Top);

    // Move the box from right (100vw) to left (0vw) as you scroll down
    if (scrollProgress1 >= 0 && scrollProgress1 <= 1) {
        movingBox1.style.transform = `translate(${(1 - scrollProgress1) * 100}vw, -50%)`;
    }
});



// JavaScript for moving and rotating the second box based on scroll position
const animationElement2 = document.querySelector('.animation-element2');

// Add animation styles based on scroll position
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Calculate the max scroll value
    const scrollPercentage = scrollPosition / maxScroll; // Get scroll as a percentage

    // Set the transform properties based on scroll position for the second box
    const translateX2 = 400 * (scrollPercentage - 0.3); // Adjust translation speed
    const rotation2 = 500 * scrollPercentage; // Adjust rotation multiplier

    // Apply the translation and faster rotation to the second animated element
    animationElement2.style.transform = `translate(${translateX2}%, 0) rotate(${rotation2}deg)`;
});


function handleScroll() {
    const section1Top = section1.offsetTop;
    const section2Top = section2.offsetTop;
    const sectionHeight = section1.offsetHeight;
    const scrollPosition = window.scrollY;

    // Calculate the progress of scrolling in the first section (from right to left)
    const scrollProgress1 = (scrollPosition - section1Top) / sectionHeight;

    // Move from right to left in the first section
    if (scrollProgress1 >= 0 && scrollProgress1 <= 1) {
        movingBox.style.right = `${(1 - scrollProgress1) * 100}vw`;
    }

    // Calculate the progress of scrolling in the second section (from top to bottom)
    const scrollProgress2 = (scrollPosition - section2Top) / sectionHeight;

    // When entering the second section, move the box down vertically
    if (scrollProgress2 >= 0 && scrollProgress2 <= 1) {
        movingBox.style.transform = `translateY(${scrollProgress2 * 100}vh) rotate(${scrollProgress2 * 360}deg)`;
    }
}


