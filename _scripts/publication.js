
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

    // 控制每条 publication 显示/隐藏
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (tag === "all" || element.classList.contains(tag)) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }

    // 逐个年份标题检查它后面紧跟的 .paper-xxxx 容器
    for (var i = 0; i < yearTitles.length; i++) {
        var yearTitle = yearTitles[i];

        // 找到下一个真正的 .paper-XXXX 容器（跳过空文本节点等）
        var sibling = yearTitle.nextElementSibling;
        while (sibling && !sibling.className.startsWith("paper-")) {
            sibling = sibling.nextElementSibling;
        }

        // 如果没找到对应年份容器，跳过
        if (!sibling) continue;

        var pubs = sibling.getElementsByClassName("publication");
        var hasVisible = false;

        for (var j = 0; j < pubs.length; j++) {
            if (pubs[j].style.display !== "none") {
                hasVisible = true;
                break;
            }
        }

        // 显示或隐藏标题和容器
        sibling.style.display = hasVisible ? "block" : "none";
        yearTitle.style.display = hasVisible ? "block" : "none";
        yearTitle.style.position = "relative";
        yearTitle.style.left = "0";
    }
}



}
