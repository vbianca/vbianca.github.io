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
     var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`) ;
     link.classList.remove("active");
}

function showPage(pageId) {
    hidePreviewPage();
    document.getElementById(pageId).style.display = "";
     var link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`) ;
     link.classList.add("active");
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (e.target.matches("#top-menu-bar a")) {
            var id = link.getAttribute("data-page");
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

