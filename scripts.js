document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('nav ul.menu a[data-section]');
  const contentSections = document.querySelectorAll('.content-section');

  function showSection(sectionId) {
    contentSections.forEach(section => {
      section.classList.remove('active');
    });
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add('active');
    }
  }

  function clearActiveMenu() {
    menuLinks.forEach(link => link.classList.remove('active'));
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      if (!sectionId) return;
      showSection(sectionId);
      clearActiveMenu();
      link.classList.add('active');
    });
  });

  showSection('home');

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('nav ul.menu');
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = dropdown.querySelector('.dropbtn');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  // Toggle sidebar menu
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    console.log("Sidebar Menu");
  });

  // Toggle dropdown submenu di sidebar
  dropbtn.addEventListener('click', (e) => {
    e.preventDefault(); // mencegah link bekerja
    dropdownContent.classList.toggle('active');
    console.log("Dropdown Sidebar");
  });

  // Tutup sidebar jika klik diluar
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('active');
      dropdownContent.classList.remove('active');
      console.log("Remove Active All");
    }
  });
});

// Slider Home Page
const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const totalSlides = images.length;
  let currentIndex = 0;
  let slideWidth = images[0].clientWidth;
  let autoSlideInterval = null;

  function updateSlidePosition() {
    slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 3000); // ganti gambar tiap 3 detik
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    showNextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    showPrevSlide();
    startAutoSlide();
  });

  window.addEventListener('resize', () => {
    slideWidth = images[0].clientWidth;
    updateSlidePosition();
  });

  // Inisialisasi
  updateSlidePosition();
  startAutoSlide();

