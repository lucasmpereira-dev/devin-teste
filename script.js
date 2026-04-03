// ===========================
// Anhembi Morumbi - Ciencia da Computacao
// Interactive Scripts
// ===========================

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Menu Toggle ---
  var menuToggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    // Close menu when clicking a nav link
    var navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  // --- Header scroll shadow ---
  var header = document.getElementById('header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Smooth scroll for anchor links (fallback for browsers without CSS smooth scroll) ---
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Simple fade-in animation on scroll ---
  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
        // Remove fade-in class after animation completes so card hover transitions work
        entry.target.addEventListener('transitionend', function handler() {
          entry.target.classList.remove('fade-in');
          entry.target.removeEventListener('transitionend', handler);
        });
      }
    });
  }, observerOptions);

  // Observe cards and sections for animation
  var animatedElements = document.querySelectorAll(
    '.feature-card, .pricing-card, .career-card, .quick-info-item, .campus-card, .stat-item'
  );
  animatedElements.forEach(function (el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // --- Hide scroll indicator on scroll ---
  var scrollIndicator = document.querySelector('.hero-scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
      }
    });
  }

});
