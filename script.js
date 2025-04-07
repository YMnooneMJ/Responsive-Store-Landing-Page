document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const menuLinks = mobileMenu.querySelectorAll("a"); // Select all links in the mobile menu

  if (menuToggle && mobileMenu && closeMenu) {
    // Toggle mobile menu visibility
    menuToggle.addEventListener("click", function () {
      const isHidden = mobileMenu.classList.toggle("hidden");
      menuToggle.setAttribute("aria-expanded", !isHidden); // Accessibility
    });

    // Close mobile menu when clicking the close button
    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });

    // Close menu when clicking outside the menu
    mobileMenu.addEventListener("click", function (e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add("hidden");
      }
    });

    // Close mobile menu when clicking on any link
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});
