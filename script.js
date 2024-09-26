const scrollArrow = document.querySelector('.scroll'); // Select the scroll arrow
const header = document.querySelector('header'); // Select the header
const menuIcon = document.querySelector('#menu-icon'); // Select the menu icon
const navlist = document.querySelector('.navlist'); // Select the nav list

// Show/hide the scroll arrow and apply sticky header
window.addEventListener('scroll', function () {
  // Sticky header logic
  header.classList.toggle('sticky', window.scrollY > 60);

  // Show scroll arrow when scrolled 100px or more
  if (window.scrollY > 900) {
    scrollArrow.style.display = 'block'; // Show the arrow
  } else {
    scrollArrow.style.display = 'none'; // Hide the arrow
  }
});

// Scroll to top when arrow is clicked
scrollArrow.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Smooth scrolling
  });
});

// Mobile menu toggle logic
menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggle('bx-x'); // Change the menu icon to an 'X'
  navlist.classList.toggle('open'); // Toggle the visibility of the navigation menu
});

// Close the mobile menu when scrolling
window.addEventListener('scroll', function () {
  menuIcon.classList.remove('bx-x'); // Reset the menu icon
  navlist.classList.remove('open'); // Hide the navigation menu
});
