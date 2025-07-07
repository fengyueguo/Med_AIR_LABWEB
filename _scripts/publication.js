
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
    //             // year.style.display = "";
    //             year.style.display = "block";
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

    // 控制 publication 显示
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (tag === "all" || element.classList.contains(tag)) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }

    // 控制 h5.year 的显示
    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        if (tag === "all") {
            year.style.display = "block";
        } else {
            year.style.display = "none";
        }
    }
}

}
