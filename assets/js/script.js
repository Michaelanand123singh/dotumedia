'use strict';

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * toggle navbar
 */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header active
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * project filters
 */
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  const industryFilter = document.getElementById('industry-filter');
  
  // Initialize filter
  let currentCategory = 'all';
  let currentIndustry = 'all';
  
  function updateFilters() {
    projectItems.forEach(item => {
      const categories = item.dataset.category.split(' ');
      const showByCategory = currentCategory === 'all' || categories.includes(currentCategory);
      const showByIndustry = currentIndustry === 'all' || categories.includes(currentIndustry);
      
      if (showByCategory && showByIndustry) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentCategory = button.getAttribute('data-filter');
      updateFilters();
    });
  });
  
  if (industryFilter) {
    industryFilter.addEventListener('change', function() {
      currentIndustry = this.value;
      updateFilters();
    });
  }
  
  // Load more functionality
  const loadMoreBtn = document.querySelector('.load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // In a real implementation, this would load additional projects from a backend
      this.textContent = 'Loading...';
      
      setTimeout(() => {
        this.textContent = 'No More Projects';
        this.disabled = true;
        this.style.opacity = '0.5';
      }, 1500);
    });
  }

  /**
   * project card animations
   */
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.overlay').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.overlay').style.opacity = '0';
    });
  });
});