
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
    var years = document.getElementsByClassName("paper-year");
    var yearContainers = document.querySelectorAll("div[class^='paper-']:not(.publication)");


    // 控制 publication 显示
    for (var i = 0; i < publications.length; i++) {
        var pub = publications[i];
        if (tag === "all" || pub.classList.contains(tag)) {
            pub.style.display = "flex";
        } else {
            pub.style.display = "none";
        }
    }

    // 显示年份标题
    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        if (tag === "all") {
            year.style.display = "block";
            year.style.position = "relative";
            year.style.left = "0";  // 修复你之前设置的 -45%
        } else {
            year.style.display = "none";
        }
    }

    // 显示每个年份容器（如 paper-2025）
    for (var i = 0; i < yearContainers.length; i++) {
        var container = yearContainers[i];
        if (tag === "all") {
            container.style.display = "block";
        } else {
            container.style.display = ""; // 可设置为 none 也行，看你结构
        }
    }
}

}
