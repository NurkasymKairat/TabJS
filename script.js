'use strict';

const tabs = document.querySelectorAll('.tabs__nav-btn'),
      tabItem = document.querySelectorAll('.tabs__item'),
      tabParent = document.querySelector('.tabs__nav');

      function hideTab() {
        tabs.forEach(item => {
            item.classList.remove('active');
        });
        tabItem.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
      }

      function showItem(i = 0) {
        tabItem[i].classList.add('show');
        tabItem[i].classList.remove('hide');
        tabs[i].classList.add('active');
      }

      hideTab();
      showItem();

      tabParent.addEventListener('click', (e) => {
        const target = e.target;
        target.classList.contains('.tabs__nav-btn');
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTab();
                showItem(i);
            }
        });
      });
