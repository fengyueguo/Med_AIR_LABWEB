
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

    // 控制每个 publication 是否显示
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (tag === "all" || element.classList.contains(tag)) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    }

    // 遍历年份容器，决定是否显示
    for (var i = 0; i < yearContainers.length; i++) {
        var container = yearContainers[i];
        var pubs = container.getElementsByClassName("publication");

        // 判断该年份容器中是否有任何一个 publication 是可见的
        var hasVisible = false;
        for (var j = 0; j < pubs.length; j++) {
            if (pubs[j].style.display !== "none") {
                hasVisible = true;
                break;
            }
        }

        // 设置年份容器和对应标题显示/隐藏
        container.style.display = hasVisible ? "block" : "none";
        if (years[i]) {
            years[i].style.display = hasVisible ? "block" : "none";
            years[i].style.position = "relative";
            years[i].style.left = "0"; // 修正你之前写的 -45%
        }
    }
}



}
