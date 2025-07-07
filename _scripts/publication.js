
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
    const publications = document.getElementsByClassName("publication");
    const yearTitles = document.getElementsByClassName("paper-year");

    // 显示/隐藏 publication
    for (let i = 0; i < publications.length; i++) {
        const el = publications[i];
        if (tag === "all" || el.classList.contains(tag)) {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    }

    // 遍历年份标题，找对应年份容器，并判断是否含可见 publication
    for (let i = 0; i < yearTitles.length; i++) {
        const yearTitle = yearTitles[i];
        let yearContainer = yearTitle.nextElementSibling;

        if (!yearContainer || !yearContainer.className.startsWith("paper-")) continue;

        const pubItems = yearContainer.getElementsByClassName("publication");
        let hasVisible = false;

        for (let j = 0; j < pubItems.length; j++) {
            const pub = pubItems[j];
            const computedDisplay = window.getComputedStyle(pub).display;
            if (computedDisplay !== "none") {
                hasVisible = true;
                break;
            }
        }

        // 显示或隐藏年份标题和容器
        yearTitle.style.display = hasVisible ? "block" : "none";
        yearContainer.style.display = hasVisible ? "block" : "none";
        yearTitle.style.left = "0";
    }
}

}
