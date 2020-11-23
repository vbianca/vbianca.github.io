var activePage = "home";

function hide(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    }
    else {
        console.error("Pagina nu exista!", id)
    }
}



function hidePreviewPage() {
     hide(activePage);
}

function showPage(pageId) {
    // hideAllPages();
    hidePreviewPage();
    document.getElementById(pageId).style.display = "";
    activePage = pageId;
}




function initMenu() {
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (e.target.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }

    })
}
initMenu();

showPage(activePage);

var skills = [
    "HTML",
    "CSS",
    "JS"
];

var skillsLi = skills.map(function (skill) {
    console.info(skill);
    return "<li>" + skill + "</li>";
});

//todo add"favorite"skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join("");

