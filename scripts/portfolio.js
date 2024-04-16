window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > hero.offsetHeight) {
        header.classList.add('nav-scroll');
        navLinks.forEach(link => {
          link.style.color = '#0028ff'; 
        });

      } else {
        header.classList.remove('nav-scroll');
        navLinks.forEach(link => {
          link.style.color = 'black'; 
        });
      }
    });
  });
  
  const toggleSwitch = document.querySelector('#theme-toggle');
  
  // Check the current theme on load
  if (localStorage.getItem('theme') === 'dark') {
    toggleSwitch.checked = true;
    document.body.classList.add('dark-mode');
  } else {
    toggleSwitch.checked = false;
    document.body.classList.remove('dark-mode');
  }
  
  // Toggle the theme
  function toggleTheme() {
    if (toggleSwitch.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
  
  toggleSwitch.addEventListener('change', toggleTheme);


  // Meno Toggle

  // var menu = document.querySelector(".menu-icon");
  // var navLinks = document.querySelector('.navLinks');

  // var linksVisible = false;

  //  menu.addEventListener("click", menuAction);
  //  function menuAction(){
  //     // Toggle the visibility of the navigation links
  //     if (linksVisible) {
  //       navLinks.style.display = 'none';
  //       linksVisible = false;
  //     } else {
  //       navLinks.style.display = 'block';
  //       linksVisible = true;
  //     }
  //   }
   

  var menu = document.querySelector(".menu-icon");
var navLinks = document.querySelector('.navLinks');
var links = document.querySelectorAll('.navLinks a');


menu.addEventListener('click', menuAction);

links.forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.style.display = 'none'; 
  });
});

function menuAction() {
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
}
