
{
//     const prevButton = document.querySelector('.prev-button');
//     const nextButton = document.querySelector('.next-button');
//     const galleryImage = document.getElementById('gallery-image');
//     const captionElement = document.querySelector('.caption');
//     const previewImagesContainer = document.querySelector('.preview-images');
//     const imageBox = document.querySelector('.image-box');

//     galleryImage.addEventListener("click", function () {
//     window.open(this.src, "_blank");
//     });

//     const photos = [
//     {
//         src: './images/gallery/gallery1.png',
//         caption: 'Gallery 1'
//     },
//     {
//         src: './images/gallery/gallery2.png',
//         caption: 'Gallery 2'
//     },
//     {
//         src: './images/gallery/gallery3.png',
//         caption: 'Gallery 3'
//     },
//     {
//         src: './images/gallery/gallery4.png',
//         caption: 'Gallery 4'
//     },
//     {
//         src: './images/gallery/gallery5.png',
//         caption: 'Gallery 5'
//     },
//     {
//         src: './images/gallery/gallery6.png',
//         caption: 'Gallery 6'
//     },
//     {
//         src: './images/gallery/gallery7.png',
//         caption: 'Gallery 7'
//     },
//     {
//         src: './images/gallery/gallery8.png',
//         caption: 'Gallery 8'
//     },
//     {
//         src: './images/gallery/gallery9.png',
//         caption: 'Gallery 9'
//     },
//     {
//         src: './images/gallery/gallery10.png',
//         caption: 'Gallery 10'
//     },
//     {
//         src: './images/gallery/gallery11.png',
//         caption: 'Gallery 11'
//     },
//     {
//         src: './images/gallery/gallery12.png',
//         caption: 'Gallery 12'
//     },
//     {
//         src: './images/gallery/gallery13.png',
//         caption: 'Gallery 13'
//     },
//     {
//         src: './images/gallery/gallery14.png',
//         caption: 'Gallery 14'
//     },
//     {
//         src: './images/gallery/gallery15.png',
//         caption: 'Gallery 15'
//     },
//     {
//         src: './images/gallery/gallery16.png',
//         caption: 'Gallery 16'
//     },
//     {
//         src: './images/gallery/gallery17.png',
//         caption: 'Gallery 17'
//     }
//     ];
//     let currentIndex = 0;

//     function showCurrentPhoto() {
//     const currentPhoto = photos[currentIndex];
//     galleryImage.src = currentPhoto.src;
//     captionElement.textContent = currentPhoto.caption;
//     }

//     function updatePreviewBar() {
//         previewImagesContainer.innerHTML = '';
    
//         const startIndex = (currentIndex - 4 + photos.length) % photos.length;
//         const endIndex = (currentIndex + 5) % photos.length;
    
//         for (let i = startIndex; i !== endIndex; i = (i + 1) % photos.length) {
//             const previewImage = document.createElement('img');
//             previewImage.src = photos[i].src;
//             previewImage.classList.add('preview-image');
//             if (i === currentIndex) {
//                 previewImage.classList.add('active');
//             }
//             previewImage.addEventListener('click', () => {
//                 currentIndex = i;
//                 showCurrentPhoto();
//                 updatePreviewBar();
//             });
//             previewImagesContainer.appendChild(previewImage);
//         }
//         const activePreviewImage = document.querySelector('.preview-image.active');
//         if (activePreviewImage) {
//             previewImagesContainer.scrollTo({
//                 left: activePreviewImage.offsetLeft - previewImagesContainer.offsetWidth / 2 + activePreviewImage.offsetWidth / 2,
//                 behavior: 'smooth'
//             });
//         }
//     }

//     function startSlideshow() {
//         slideshowInterval = setInterval(() => {
//             currentIndex = (currentIndex + 1) % photos.length;
//             showCurrentPhoto();
//             updatePreviewBar();
//         }, 5000);
//     }

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + photos.length) % photos.length;
//         showCurrentPhoto();
//         updatePreviewBar();
//     });
    
//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % photos.length;
//         showCurrentPhoto();
//         updatePreviewBar();
//     });

//     showCurrentPhoto();
//     updatePreviewBar();
//     startSlideshow();
    

// var $carousel = $('.carousel').flickity();

// var $carouselNav = $('.carousel-nav');
// var $carouselNavCells = $carouselNav.find('.carousel-cell');

// $carouselNav.on( 'click', '.carousel-cell', function( event ) {
//   var index = $( event.currentTarget ).index();
//   $carousel.flickity( 'select', index );
// });

// var flkty = $carousel.data('flickity');
// var navTop  = $carouselNav.position().top;
// var navCellHeight = $carouselNavCells.height();
// var navHeight = $carouselNav.height();

// $carousel.on( 'select.flickity', function() {
//   // set selected nav cell
//   $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
//   var $selected = $carouselNavCells.eq( flkty.selectedIndex )
//     .addClass('is-nav-selected');
//   // scroll nav
//   var scrollY = $selected.position().top +
//     $carouselNav.scrollTop() - ( navHeight + navCellHeight ) / 2;
//   $carouselNav.animate({
//     scrollTop: scrollY
//   });
// });

}