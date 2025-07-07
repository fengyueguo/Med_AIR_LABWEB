
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
    var yearTitles = document.getElementsByClassName("paper-year");

    // 显示/隐藏 publication
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (tag === "all" || element.classList.contains(tag)) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }

    // 遍历每个 .paper-year，根据其后一个兄弟（年份容器）是否有可见 publication 来决定是否显示
    for (var i = 0; i < yearTitles.length; i++) {
        var yearTitle = yearTitles[i];
        var yearContainer = yearTitle.nextElementSibling;

        if (!yearContainer) continue; // 防止意外结构

        var pubs = yearContainer.getElementsByClassName("publication");
        var hasVisible = false;

        for (var j = 0; j < pubs.length; j++) {
            if (pubs[j].style.display !== "none") {
                hasVisible = true;
                break;
            }
        }

        // 控制标题和年份容器显示
        yearContainer.style.display = hasVisible ? "block" : "none";
        yearTitle.style.display = hasVisible ? "block" : "none";
        yearTitle.style.position = "relative";
        yearTitle.style.left = "0";
    }
}


}
