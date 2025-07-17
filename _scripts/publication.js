
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
        // 移除所有可能的显示/隐藏类，确保干净状态
        element.classList.remove("show-flex", "hide"); // 或者根据你的CSS命名来调整

        if (tag === "all" || element.classList.contains(tag)) {
            // 在这里添加一个类，让CSS来控制display属性
            element.classList.add("show-publication"); 
        } else {
            // 添加一个类来隐藏元素
            element.classList.add("hide-publication"); 
        }
    }

    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        // 移除所有可能的显示/隐藏类
        year.classList.remove("show-year", "hide-year");

        if (tag === "all") {
            // 添加类来显示年份
            year.classList.add("show-year");
        } else {
            // 添加类来隐藏年份
            year.classList.add("hide-year");
        }
    }
}

}
