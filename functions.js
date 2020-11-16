function hide(id){
    var el = document.getElementById(id);
    if (el){
        el.style.display = "none";
    }
    else {
        console.error("Pagina nu exista!",id)
    }
}

function hideAllPages(){
    var pages = document.querySelectorAll(".page");
    //for(initializare; conditie; post exectutie( i = i + 1))
    for (var i = 0; i < pages.length; i++){
        var id = pages[i].id;
         hide(id);
    }
}

function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = "";
 }

function initMenu() {
    document.addEventListener("click", function(e){
        var link = e.target;
        if(e.target.matches("#top-menu-bar a")){
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
       
    })
}
initMenu();

showPage("skills");

var skills = ["HTML", "CSS","JS"];

//todo add"favorite"skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = "<li>" +skills[0] + "</li>" + 
               "<li>"+ skills[1] +"</li>"  + 
               "<li>"+ skills[2] +"</li>";
