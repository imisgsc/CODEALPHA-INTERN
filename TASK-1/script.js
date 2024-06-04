document.addEventListener("DOMContentLoaded", function () {
    // Image Gallery
    const fullImageContainer = document.getElementById('fullImageContainer');
    const fullImage = document.getElementById('fullImage');
    const closeBtn = document.getElementById('closeBtn');

    window.showImage = function (img) {
        fullImage.src = img.src;
        fullImageContainer.style.display = 'block';
    };

    window.closeImage = function () {
        fullImageContainer.style.display = 'none';
    };

    // Slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});
