window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > hero.offsetHeight) {
        header.classList.add('nav-scroll');
        navLinks.forEach(link => {
          link.style.color = '#000'; // Change nav link color to black when scrolled
        });
      } else {
        header.classList.remove('nav-scroll');
        navLinks.forEach(link => {
          link.style.color = '#fff'; // Reset nav link color
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
  