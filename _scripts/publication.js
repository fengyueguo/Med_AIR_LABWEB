
{
    // function filterElements(tag) {
    //     var elements = document.getElementsByClassName("publication");
    //     var years = document.getElementsByClassName("paper-year")
    //     for (var i = 0; i < elements.length; i++) {
    //         var element = elements[i];
    //         if (tag === "all" || element.classList.contains(tag)) {
    //             element.style.display = "flex";
    //         } else {
    //             element.style.display = "none";
    //         }
    //     }
    //     for (var i = 0; i < years.length; i++) {
    //         var year = years[i];
    //         if (tag === "all") {
    //             year.style.display = "";
    //             year.style.position = "relative";
    //             year.style.left = "-45%";
    //         }
    //         else {
    //             year.style.display = "none";
    //         }
    //     }
    // }

     // function filterElements(tag) {
     //        var elements = document.getElementsByClassName("publication");
     //        var years = document.getElementsByClassName("paper-year");
     //        for (var i = 0; i < elements.length; i++) {
     //            var element = elements[i];
     //            if (tag === "all" || element.classList.contains(tag)) {
     //                element.style.display = "flex";
     //            } else {
     //                element.style.display = "none";
     //            }
     //        }
        
     //        for (var i = 0; i < years.length; i++) {
     //            var year = years[i];
     //            if (tag === "all") {
     //                year.style.display = "block";
     //            } else {
     //                year.style.display = "none";
     //            }
     //        }
     //    }

    function filterElements(tag) {
        var elements = document.getElementsByClassName("publication");
        var years = document.getElementsByClassName("paper-year");
    
        // Remove active state from all tag buttons
        var tagButtons = document.querySelectorAll('.tags button.tag');
        tagButtons.forEach(button => {
            button.classList.remove('active');
        });
    
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.classList.remove("show-publication", "hide-publication"); 
    
            if (tag === "all" || element.classList.contains(tag)) {
                element.classList.add("show-publication"); 
            } else {
                element.classList.add("hide-publication"); 
            }
        }
    
        for (var i = 0; i < years.length; i++) {
            var year = years[i];
            year.classList.remove("show-year", "hide-year"); 
    
            if (tag === "all") {
                year.classList.add("show-year");
            } else {
                // Check if there are any visible publications under this year before hiding the year
                // This prevents years from showing if all their publications are filtered out
                let yearPublications = year.nextElementSibling; // Assuming the publications are the next sibling div
                let hasVisiblePublications = false;
                if (yearPublications && yearPublications.className.includes('paper-')) { // Check if it's a paper-year container
                    Array.from(yearPublications.children).forEach(pub => {
                        if (pub.classList.contains('publication') && (tag === "all" || pub.classList.contains(tag))) {
                            hasVisiblePublications = true;
                        }
                    });
                }
                
                if (hasVisiblePublications) {
                    year.classList.add("show-year"); // Keep year visible if any publications are visible
                } else {
                    year.classList.add("hide-year");
                }
            }
        }
    
        var currentActiveButton = document.querySelector(`.tags button[onclick="filterElements('${tag}')"]`);
        if (currentActiveButton) {
            currentActiveButton.classList.add('active');
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        filterElements('all'); 
    });
}
