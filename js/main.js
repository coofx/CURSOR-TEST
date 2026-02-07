(function () {
  'use strict';

  function init() {
    initDropdowns();
  }

  function initDropdowns() {
    const dropdowns = document.querySelectorAll('[data-dropdown]');
    if (!dropdowns.length) return;

    dropdowns.forEach(function (dropdown) {
      const trigger = dropdown.querySelector('.search-field-trigger');
      const valueEl = dropdown.querySelector('.search-value');
      const list = dropdown.querySelector('.dropdown-list');
      const options = dropdown.querySelectorAll('.dropdown-option');

      if (!trigger || !valueEl || !list) return;

      function close() {
        dropdown.classList.remove('dropdown-open');
      }

      function open() {
        dropdowns.forEach(function (d) {
          d.classList.remove('dropdown-open');
        });
        dropdown.classList.add('dropdown-open');
      }

      function toggle() {
        if (dropdown.classList.contains('dropdown-open')) {
          close();
        } else {
          open();
        }
      }

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggle();
      });

      options.forEach(function (option) {
        option.addEventListener('click', function (e) {
          e.stopPropagation();
          const val = option.getAttribute('data-value');
          if (val !== null) {
            valueEl.textContent = val;
          }
          close();
        });
      });
    });

    document.addEventListener('click', function () {
      dropdowns.forEach(function (d) {
        d.classList.remove('dropdown-open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
