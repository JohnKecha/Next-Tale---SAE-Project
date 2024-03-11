var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideInterval = setInterval(showSlides, 5000);

function showSlides() {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Display the current slide
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");

    // Reset the index to 0 when it exceeds the total number of slides
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

// Add click event listener to each dot
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        // Find the index of the clicked dot
        var dotIndex = Array.from(dots).indexOf(this);

        // Set the slide index to the clicked dot's index
        slideIndex = dotIndex;

        // Show the selected slide immediately
        showSlides();

        // Restart the slideshow interval
        clearInterval(slideInterval);
        slideInterval = setInterval(showSlides, 5000);
    });
}

// Show the first slide immediately when the script starts
showSlides();

var isPlaying = true;  // Flag to track whether the slideshow is currently playing

// Function to toggle Play/Pause
var isPlaying = true;

function togglePlayPause() {
    var playPauseBtn = document.getElementById("playPauseBtn");
    var playPauseIcon = document.getElementById("playPauseIcon");

    if (isPlaying) {
        // Pause the slideshow
        clearInterval(slideInterval);
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
    } else {
        // Resume the slideshow
        slideInterval = setInterval(showSlides, 5000);
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
    }

    // Toggle the flag
    isPlaying = !isPlaying;
}

