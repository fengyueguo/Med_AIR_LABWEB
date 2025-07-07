
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
    var publications = document.getElementsByClassName("publication");
    var yearTitles = document.getElementsByClassName("paper-year");

    // 1. 显示/隐藏 publication 项
    for (var i = 0; i < publications.length; i++) {
        var el = publications[i];
        if (tag === "all" || el.classList.contains(tag)) {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    }

    // 2. 遍历每个 h5.paper-year，检查其后对应的 div.paper-XXXX 是否有可见 publication
    for (var i = 0; i < yearTitles.length; i++) {
        var yearTitle = yearTitles[i];

        // 获取下一个兄弟元素，期望是 .paper-2025、.paper-2024 等
        var yearContainer = yearTitle.nextElementSibling;

        // 防守式判断：跳过不符合条件的元素
        if (!yearContainer || !yearContainer.className || !yearContainer.className.startsWith("paper-")) {
            continue;
        }

        var pubItems = yearContainer.getElementsByClassName("publication");
        var hasVisible = false;

        for (var j = 0; j < pubItems.length; j++) {
            if (pubItems[j].style.display !== "none") {
                hasVisible = true;
                break;
            }
        }

        // 控制显示状态
        yearTitle.style.display = hasVisible ? "block" : "none";
        yearContainer.style.display = hasVisible ? "block" : "none";
        yearTitle.style.left = "0";
    }
}



}
