
// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Function to display the selected page
function showPage(pageId) {

    // Get all pages
    const pages = document.querySelectorAll(".page");

    // Hide all pages
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Update the active navigation link
    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });

    const selectedLink = document.querySelector(
        '.nav-link[data-page="' + pageId + '"]'
    );

    if (selectedLink) {
        selectedLink.classList.add("active");
    }

    // Update the URL and scroll to the top
    window.location.hash = pageId;
    window.scrollTo(0, 0);
}

// Add click events to navigation links
navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {
        event.preventDefault();

        const pageId = link.getAttribute("data-page");

        showPage(pageId);
    });

});

// Display the correct page when the website opens
const initialPage = window.location.hash.substring(1);

if (["home", "about", "skills"].includes(initialPage)) {
    showPage(initialPage);
}

// Get the dark mode button
const themeButton = document.getElementById("themeButton");

// Add dark mode functionality
themeButton.addEventListener("click", function() {

    // Toggle the dark class on the body
    document.body.classList.toggle("dark");

    // Change the button text
    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});
