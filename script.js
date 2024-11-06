// script.js

document.getElementById("switchRegimeBtn").addEventListener("click", () => {
    alert("Switching tax regime...");
    // Add logic to toggle between tax regimes
});

document.getElementById("confirmSelectionBtn").addEventListener("click", () => {
    alert("Selection confirmed. Your choice will be saved.");
    // Add logic to save regime selection
});

// Placeholder function for Edit links
document.querySelectorAll(".edit-link").forEach(link => {
    link.addEventListener("click", () => {
        alert("Edit option clicked.");
        // Add logic to allow editing
    });
});
