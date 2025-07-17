
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

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        // 确保这里只添加/移除类，不直接操作 style.display
        element.classList.remove("show-publication", "hide-publication"); 

        if (tag === "all" || element.classList.contains(tag)) {
            element.classList.add("show-publication"); 
        } else {
            element.classList.add("hide-publication"); 
        }
    }

    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        // 确保这里只添加/移除类，不直接操作 style.display
        year.classList.remove("show-year", "hide-year"); 

        if (tag === "all") {
            year.classList.add("show-year");
        } else {
            year.classList.add("hide-year");
        }
    }
}
}
