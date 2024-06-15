const userScroll = () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-bg');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-bg');
    }
  });
};
document.addEventListener('DOMContentLoaded', userScroll);

const year = document.querySelector('.year');
year.textContent = new Date().getFullYear();
