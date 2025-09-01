
{
    function filterElements(tag) {
        const elements = document.getElementsByClassName("publication");
        const years = document.getElementsByClassName("paper-year");
    
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (tag === "all" || element.classList.contains(tag)) {
                element.style.removeProperty("display");
            } else {
                element.style.display = "none";
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
    
        const buttons = document.querySelectorAll(".tag");
        buttons.forEach(btn => {
            btn.style.backgroundColor = "";
            if (btn.getAttribute("onclick") === `filterElements('${tag}')`) {
                btn.style.backgroundColor = "#6495ED";
            }
        });
    }
    
    window.addEventListener("DOMContentLoaded", function () {
        const params = new URLSearchParams(window.location.search);
        const tag = params.get("tag");
        if (tag) {
            filterElements(tag);
        } else {
            filterElements("paperhi");
        }
    });
    
}
