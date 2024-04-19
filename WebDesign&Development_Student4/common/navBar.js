// declaring the variables used in the program

const navBar = document.getElementById('nav-bar');
const navEnd = document.getElementById('nav-end');
const menuBtn = document.getElementById('menuBtn');

// function to show and hide the nav bar on mobile
function resNav() {
  if (navEnd.style.display === 'flex') {
    navEnd.style.display = 'none';
  } else {  
    navEnd.style.display = 'flex';
  }
}

//event listener to add functionality to the menu button in mobile view
menuBtn.addEventListener('click', resNav);
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024){
    navEnd.style.display = 'flex';  
  }
  
  if (window.innerWidth <= 1022){
    navEnd.style.display = 'none';  
  }});
