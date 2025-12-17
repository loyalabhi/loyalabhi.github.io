'use strict';

/* =======================
   Utility
======================= */
function toggleActive(elem) {
  if (elem) elem.classList.toggle("active");
}

/* =======================
   Sidebar Toggle
======================= */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => toggleActive(sidebar));
}

/* =======================
   Portfolio Filter
======================= */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

function filterProjects(value) {
  filterItems.forEach(item => {
    const category = item.dataset.category.toLowerCase();
    item.classList.toggle(
      "active",
      value === "all" || value === category
    );
  });
}

if (select) {
  select.addEventListener("click", () => toggleActive(select));

  selectItems.forEach(item => {
    item.addEventListener("click", () => {
      const value = item.innerText.toLowerCase();
      selectValue.innerText = item.innerText;
      toggleActive(select);
      filterProjects(value);
    });
  });
}

let lastBtn = filterBtns[0];

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterProjects(value);

    if (lastBtn) lastBtn.classList.remove("active");
    btn.classList.add("active");
    lastBtn = btn;
  });
});

/* =======================
   Contact Form
======================= */
const form = document.querySelector("[data-form]");
const inputs = document.querySelectorAll("[data-form-input]");
const submitBtn = document.querySelector("[data-form-btn]");

if (form && inputs.length && submitBtn) {
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      form.checkValidity()
        ? submitBtn.removeAttribute("disabled")
        : submitBtn.setAttribute("disabled", "");
    });
  });
}

/* =======================
   Page Navigation
======================= */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.innerText.toLowerCase();

    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === target);
    });

    navLinks.forEach(n => n.classList.remove("active"));
    link.classList.add("active");

    window.scrollTo(0, 0);
  });
});
