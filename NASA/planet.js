// planet.js

// Get elements
const items = document.querySelectorAll('.item');
const descriptions = document.querySelectorAll('.description');
const bgContainer = document.querySelector('#interactive-bg');
// Get the wrapper element
const wrapper = document.querySelector('.wrapper');

// Add an event listener to the wrapper
wrapper.addEventListener('mouseout', (event) => {
  // Check if the mouse is leaving the wrapper to go to one of the items
  if (!event.relatedTarget || !wrapper.contains(event.relatedTarget)) {
    // Hide the text
    descriptions.forEach((description) => {
      description.style.display = 'none';
    });
  }
});




// Function to handle item click
function handleItemClick(index) {
    // Hide all descriptions
    descriptions.forEach((description) => {
        description.style.display = 'none';
    });

    // Show the description for the clicked item
    descriptions[index].style.display = 'block';
}

// Function to handle keyboard navigation
function handleKeyboardNavigation(event) {
    // Get the current index
    const currentIndex = Array.prototype.indexOf.call(items, document.activeElement);

    // Calculate the new index based on the keyboard input
    let newIndex = currentIndex;
    if (event.key === 'ArrowLeft') {
        newIndex = (currentIndex - 1 + items.length) % items.length;
    } else if (event.key === 'ArrowRight') {
        newIndex = (currentIndex + 1) % items.length;
    }

    // Hide all descriptions
    descriptions.forEach((description) => {
        description.style.display = 'none';
    });

    // Show the description for the new index
    descriptions[newIndex].style.display = 'block';

    // Focus the new item
    items[newIndex].focus();
}

// Add event listeners
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        handleItemClick(index);
    });
});

document.addEventListener('keydown', handleKeyboardNavigation);

// Initialize the interactive background
for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize initial position and animation delay
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = 15 + Math.random() * 10 + 's';

    bgContainer.appendChild(particle);
}

// Initialize the scroll-triggered animations
const boxes = document.querySelectorAll('.box');
const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, options);

boxes.forEach(box => {
    observer.observe(box);
});

const menuBtn = document.querySelector('.menu-btn');
const navUl = document.querySelector('.nav ul');

menuBtn.addEventListener('click', () => {
    navUl.classList.toggle('show');
});
