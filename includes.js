'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Fetch the bannernav HTML file
  fetch('https://wrmorrison.github.io/les/includes/bannernav.html')
    .then(response => response.text())
    .then(html => {
      // Insert the bannernav HTML into the container
      document.getElementById('bannernavContainer').innerHTML = html;

      // Apply the JavaScript logic to the elements within bannernav.html

      // Dropdowns in navbar
      var $dropdowns = getAll('.navbar-item.has-dropdown:not(.is-hoverable)');
      if ($dropdowns.length > 0) {
        $dropdowns.forEach(function ($el) {
          $el.addEventListener('click', function (event) {
            event.stopPropagation();
            $el.classList.toggle('is-active');
          });
        });

        document.addEventListener('click', function (event) {
          closeDropdowns();
        });
      }

      function closeDropdowns() {
        $dropdowns.forEach(function ($el) {
          $el.classList.remove('is-active');
        });
      }

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeDropdowns();
        }
      });

      // Toggles
      var $burgers = getAll('.burger');
      if ($burgers.length > 0) {
        $burgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });

  // Fetch the hero HTML file
  fetch('https://wrmorrison.github.io/les/includes/hero.html')
    .then(response => response.text())
    .then(html => {
      // Insert the hero HTML into the container
      document.getElementById('heroContainer').innerHTML = html;
    });

  // Fetch the footer HTML file
  fetch('https://wrmorrison.github.io/les/includes/footer.html')
    .then(response => response.text())
    .then(html => {
      // Insert the footer HTML into the container
      document.getElementById('footerContainer').innerHTML = html;
    });
});

// Functions
function getAll(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}