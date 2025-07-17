
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
    const elements = document.getElementsByClassName("publication");
    const years = document.getElementsByClassName("paper-year");

    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (tag === "all" || el.classList.contains(tag)) {
            el.style.display = "";  // ✅ 恢复默认样式（由CSS控制响应式）
        } else {
            el.style.display = "none";
        }
    }

    for (let i = 0; i < years.length; i++) {
        if (tag === "all") {
            years[i].style.display = "";
        } else {
            years[i].style.display = "none";
        }
    }
}


}
