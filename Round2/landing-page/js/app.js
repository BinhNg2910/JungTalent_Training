/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  // Create the navigation bar
  const navbarList = document.getElementById('navbar__list');

  sections.forEach((section, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    // Set the href attribute to the section's ID to create anchors
    link.setAttribute('href', `#${section.id}`);

    // Set the text content of the link to the data-nav attribute of the section
    link.textContent = section.getAttribute('data-nav');

    // Add a click event listener to scroll to the corresponding section when a nav item is clicked
    link.addEventListener('click', function (event) {
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    });

    listItem.appendChild(link);
    navbarList.appendChild(listItem);
  });

  // Add an event listener to highlight the active section in the navigation bar
  document.addEventListener('scroll', function () {
    let currentSectionId = '';
    const navbar = document.querySelector('.navbar__menu');
    const navItems = navbar.querySelectorAll('.navbar__menu li');
    
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentSectionId = section.id;
      }
    });

    // Remove and add the 'your-active-class' to the appropriate section and nav item
    sections.forEach((section) => {
      section.classList.remove('your-active-class');
    });

    const currentSection = document.getElementById(currentSectionId);

    if (currentSection) {
      currentSection.classList.add('your-active-class');
      
      navItems.forEach((item) => {
        item.classList.remove('nav_active_state');
        const link = item.querySelector('a');
        console.log('#' + currentSectionId);
        // console.log(link.getAttribute('href'));
        if( link.getAttribute('href') === ('#' + currentSectionId) ) {
          item.classList.add('nav_active_state');

        }
      });
    }

  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar__menu');
  applyNavbarStyles(navbar);

  const navItems = document.querySelectorAll('.navbar__menu li');

  // Apply styles to each item in the nav bar 
  navItems.forEach((item) => {
    const link = item.querySelector('a');
    applyNavItemStyles(item, link);
  });

  function applyNavbarStyles(navbar) {
    navbar.style.backgroundColor = '#333';
    navbar.style.padding = '15px';
    navbar.style.position = 'fixed';
    navbar.style.width = 'calc(100% - ' + getScrollbarWidth() + 'px)'; // Occupy full width
    navbar.style.top = '0'; // Align to the top of the viewport
  }

  function applyNavItemStyles(item, link) {
    item.style.display = 'inline-block';
    item.style.marginRight = '15px';

    link.style.textDecoration = 'none';
    link.style.color = 'white';
    link.style.fontWeight = 'bold';

    // Change styles on hover
    item.addEventListener('mouseover', function () {
      link.style.borderBottom = '2px solid white';
    });

    item.addEventListener('mouseout', function () {
      link.style.borderBottom = 'none';
    });
  }
});

//get the width of the scrolling bar
function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
  

// Add class 'active' to section when near top of viewport
//on line 94

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//create 4th section
// document.addEventListener('DOMContentLoaded', function () {
//   const sections = document.querySelectorAll('section');
//   const navbarList = document.getElementById('navbar__list');

//   // Function to create a new section
//   function createNewSection(sectionNumber) {
//     const newSection = document.createElement('section');
//     newSection.id = `section${sectionNumber + 1}`;
//     newSection.setAttribute('data-nav', `Section ${sectionNumber + 1}`);
//     newSection.classList.add('landing__container');

//     // Duplicate content from the first section (you can customize this)
//     newSection.innerHTML = sections[0].innerHTML;

//     return newSection;
//   }

//   // Add three more sections
//   for (let i = 3; i < 4; i++) {
//     const newSection = createNewSection(i);
//     document.querySelector('main').appendChild(newSection);

//     // Update the navigation bar with the new sections
//     const listItem = document.createElement('li');
//     const link = document.createElement('a');
//     link.setAttribute('href', `#section${i + 1}`);
//     link.textContent = `Section ${i + 1}`;
//     listItem.appendChild(link);
//     navbarList.appendChild(listItem);
//   }
// });


// Scroll button to the top page
document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scrollToTopButton');

  // Function to check and toggle the visibility of the "scroll to top" button
  function toggleScrollToTopButton() {
    // const scrollY = window.scrollY;

    // Adjust the threshold as needed for when the button should appear
    if (window.scrollY > window.innerHeight) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  }

  // Add scroll event listener to toggle button visibility
  document.addEventListener('scroll', toggleScrollToTopButton);

  // Add click event listener to scroll to the top when the button is clicked
  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

//Hide the nav bar when user stop scrolling
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar__menu');
  const mainContent = document.querySelector('main');
  let isScrolling;

  function hideNavbar() {
    navbar.style.transform = 'translateY(-100%)';
    mainContent.style.marginTop = '0';
    // navbar.style.display = 'none';
  }

  function showNavbar() {
    navbar.style.transform = 'translateY(0)';
    mainContent.style.marginTop = navbar.offsetHeight + 'px';
    // navbar.style.display = 'block';
  }

  function handleScroll() {
    // Clear the timeout while the user is still scrolling
    clearTimeout(isScrolling);

    if( window.scrollY === 0 ) {
      showNavbar();
    } else {
      // if(!isMouseOverElement) {
        isScrolling = setTimeout( function() { hideNavbar() }, 2000);
      // }
    }
    showNavbar();
  }

  function isMouseOverElement(element) {
    const rect = element.getBoundingClientRect();
    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
  }
  document.addEventListener('scroll', handleScroll);

  // Add mouseover and mouseout event listeners to the navbar
  navbar.addEventListener('mouseover', function () {
    clearTimeout(isScrolling);
  });

  navbar.addEventListener('mouseout', function () {
    // Resume normal handling when the mouse leaves the navbar
    handleScroll();
  });
});
