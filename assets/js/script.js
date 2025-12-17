'use strict';

/* =======================
   Utility
======================= */
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

/* =======================
   Sidebar
======================= */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

/* =======================
   Portfolio Filter
======================= */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const category = item.dataset.category?.toLowerCase();
    if (selectedValue === "all" || selectedValue === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

if (select) {
  select.addEventListener("click", () => elementToggleFunc(select));

  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

/* =======================
   Contact Form
======================= */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      form.checkValidity()
        ? formBtn.removeAttribute("disabled")
        : formBtn.setAttribute("disabled", "");
    });
  });
}

/* =======================
   Page Navigation (CRITICAL)
======================= */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.innerText.toLowerCase();

    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === target);
    });

    navigationLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");

    window.scrollTo(0, 0);
  });
});
