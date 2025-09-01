{
    document.addEventListener("DOMContentLoaded", function () {
    const galleries = document.querySelectorAll(".publicity-gallery.gallery"); 
//     const modal = document.createElement("div");
//     modal.className = "image-modal";
//     modal.innerHTML = `
//         <span class="close-btn">&times;</span>
//         <img src="" alt="Full-size Image">
//     `;
//     document.body.appendChild(modal);

//     const modalImg = modal.querySelector("img");
//     const closeBtn = modal.querySelector(".close-btn");

//     galleries.forEach(gallery => { 
//         gallery.addEventListener("click", function (e) {
//             if (e.target.tagName === "IMG" && e.target.closest('.gallery-item') && !e.target.classList.contains("report-icon")) {
//                 modalImg.src = e.target.getAttribute("src");
//                 modal.classList.add("visible");
//             }
//         });
//     });
    
//     modal.addEventListener("click", function (e) {
//         if (e.target === modal || e.target === closeBtn) {
//             modal.classList.remove("visible");
//             modalImg.src = "";
//         }
//     });

    });

    document.querySelectorAll('.image-carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const images = carousel.querySelectorAll('.carousel-image');
    const total = images.length;
    let currentIndex = 0;
    const intervalTime = 4000;
    let autoplay;

    const updateSlide = () => {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % total;
        updateSlide();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + total) % total;
        updateSlide();
    };

    const startAutoplay = () => {
        autoplay = setInterval(nextSlide, intervalTime);
    };

    const resetAutoplay = () => {
        clearInterval(autoplay);
        startAutoplay();
    };

    const nextBtn = carousel.querySelector('.carousel-next');
    const prevBtn = carousel.querySelector('.carousel-prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
        });
    }

    updateSlide();
    startAutoplay();
    });

}
