// navigation
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// video slider
const sliderBtns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var currentSlide = 0;

var sliderNav = (manual) => {
    sliderBtns.forEach((btn) => {
        btn.classList.remove("active")
    })
    
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    
    contents.forEach((content) => {
        content.classList.remove("active")
    })

    contents[manual].classList.add("active")
    slides[manual].classList.add("active")
    sliderBtns[manual].classList.add("active")

    currentSlide = manual;
}

sliderBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })

})

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        // Move to the previous slide
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        sliderNav(currentSlide);
    } else if (event.key === "ArrowRight") {
        // Move to the next slide
        currentSlide = (currentSlide + 1) % slides.length;
        sliderNav(currentSlide);
    }
});