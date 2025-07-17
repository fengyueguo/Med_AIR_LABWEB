
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

    // 移除所有按钮的 active 状态
    var tagButtons = document.querySelectorAll('.tags button.tag');
    tagButtons.forEach(button => {
        button.classList.remove('active');
    });

    // 过滤出版物 (这部分逻辑不变)
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.remove("show-publication", "hide-publication"); 

        if (tag === "all" || element.classList.contains(tag)) {
            element.classList.add("show-publication"); 
        } else {
            element.classList.add("hide-publication"); 
        }
    }

    // 过滤年份 (此处是主要修改点)
    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        year.classList.remove("show-year", "hide-year"); 

        if (tag === "all") { // 只有在 "all" 模式下才显示年份
            year.classList.add("show-year");
        } else { // 其他任何模式下都隐藏年份
            year.classList.add("hide-year");
        }
    }

    // 为当前激活的按钮添加 active 状态
    var currentActiveButton = document.querySelector(`.tags button[onclick="filterElements('${tag}')"]`);
    if (currentActiveButton) {
        currentActiveButton.classList.add('active');
    }
}

// 页面加载时默认调用 filterElements('all')
document.addEventListener('DOMContentLoaded', () => {
    filterElements('all'); 
});
}
