
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
    var publications = document.getElementsByClassName("publication");
    var yearTitles = document.getElementsByClassName("paper-year");
    var yearSections = document.querySelectorAll("div[class^='paper-']:not(.publication)");

    // 控制 publication 显示（主内容）
    for (var i = 0; i < publications.length; i++) {
        var pub = publications[i];
        if (tag === "all" || pub.classList.contains(tag)) {
            pub.style.display = "flex";
        } else {
            pub.style.display = "none";
        }
    }

    // 控制年份标题和分区是否显示
    var showYears = (tag === "all");

    for (var i = 0; i < yearTitles.length; i++) {
        yearTitles[i].style.display = showYears ? "block" : "none";
    }

    for (var i = 0; i < yearSections.length; i++) {
        yearSections[i].style.display = showYears ? "block" : "none";
    }
}


}
