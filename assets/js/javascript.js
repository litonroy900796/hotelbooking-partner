
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("profile");
  const dropdownMenu = document.getElementById("profile_dropdown");
  // Close dropdown on outside click
  document.addEventListener("click", function (event) {
    const isClickInside = dropdownButton.contains(event.target) || dropdownMenu.contains(event.target);
    if (!isClickInside) {
      dropdownMenu.classList.add("hidden");
    }
  });
});

const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    tabLinks.forEach(link => link.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');

    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));

    // Show current tab content
    const targetTab = document.getElementById(link.dataset.tab);
    targetTab.classList.add('active');
  });
});

// change password
function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}