
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
    var yearContainers = document.querySelectorAll("div[class^='paper-']:not(.publication)");

    // 控制 publication 显示
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (tag === "all" || element.classList.contains(tag)) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }

    // 遍历每个年份容器，判断里面是否还有可见 publication，来决定是否显示年份和容器
    for (var i = 0; i < yearContainers.length; i++) {
        var container = yearContainers[i];
        var pubs = container.getElementsByClassName("publication");

        var hasVisible = false;
        for (var j = 0; j < pubs.length; j++) {
            if (pubs[j].style.display !== "none") {
                hasVisible = true;
                break;
            }
        }

        // 根据有无可见内容设置容器和标题是否显示
        container.style.display = hasVisible ? "block" : "none";
        if (years[i]) {
            years[i].style.display = hasVisible ? "block" : "none";
            years[i].style.position = "relative";
            years[i].style.left = "0";
        }
    }
}

}
