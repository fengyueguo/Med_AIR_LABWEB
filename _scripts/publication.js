
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
//     const elements = document.getElementsByClassName("publication");
//     const years = document.getElementsByClassName("paper-year");

//     for (let i = 0; i < elements.length; i++) {
//         const element = elements[i];
//         if (tag === "all" || element.classList.contains(tag)) {
//             element.style.removeProperty("display");
//         } else {
//             element.style.display = "none";
//         }
//     }

//     for (let i = 0; i < years.length; i++) {
//         const year = years[i];
//         if (tag === "all") {
//             year.style.removeProperty("display");
//         } else {
//             year.style.display = "none";
//         }
//     }
// }

function filterElements(tag) {
    const elements = document.getElementsByClassName("publication");
    const years = document.getElementsByClassName("paper-year");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (tag === "all" || element.classList.contains(tag)) {
            element.style.removeProperty("display");  // ❗️显示
        } else {
            element.style.display = "none";  // ✅ 隐藏
        }
    }

    for (let i = 0; i < years.length; i++) {
        const year = years[i];
        if (tag === "all") {
            year.style.removeProperty("display");
        } else {
            year.style.display = "none";
        }
    }

    // ✅ 高亮当前选中的标签按钮（可选）
    const buttons = document.querySelectorAll(".tag");
    buttons.forEach(btn => {
        btn.style.backgroundColor = ""; // 先清除所有按钮的背景色
        if (btn.getAttribute("onclick") === `filterElements('${tag}')`) {
            btn.style.backgroundColor = "#6495ED"; // 设置选中颜色
        }
    });
}

// ✅ 页面加载后检查 URL 参数，并自动筛选对应标签
window.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get("tag");
    if (tag) {
        filterElements(tag);
    } else {
        filterElements("all"); // 默认展示所有
    }
});
    
}
