
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

   function filterElements(tag) {
    var elements = document.getElementsByClassName("publication");
    var years = document.getElementsByClassName("paper-year");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (tag === "all" || element.classList.contains(tag)) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    }

    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        year.style.display = (tag === "all") ? "block" : "none";
    }
}


}
