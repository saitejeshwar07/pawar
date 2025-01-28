// JavaScript to toggle "More..." and "Less..." for portfolio photos
function toggleMore(photoId) {
    var morePhotos = document.querySelector(`#${photoId} .more-photos`);
    var moreButton = document.querySelector(`#${photoId} .more-btn`);

    if (morePhotos.style.display === "none") {
        morePhotos.style.display = "block";
        moreButton.textContent = "Less...";
    } else {
        morePhotos.style.display = "none";
        moreButton.textContent = "More...";
    }
}
// JavaScript for Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact form");
    const successMessage = document.createElement("p");
    successMessage.className = "success-message";
    successMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
    form.appendChild(successMessage);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Simulate form submission
        setTimeout(() => {
            successMessage.style.display = "block";
            form.reset(); // Clear the form
        }, 500);
    });
});
