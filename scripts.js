// Scroll to section from dropdown (smooth handled via CSS)
document.querySelectorAll('.dropdown-item').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // Jangan tutup navbar jika yang diklik adalah dropdown toggle
      if (link.classList.contains('dropdown-toggle')) {
        return;
      }

      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

      // Jika navbar dalam kondisi terbuka, tutup
      if (navbarCollapse.classList.contains('show') && bsCollapse) {
        bsCollapse.hide();
      }
    });
  });
});
