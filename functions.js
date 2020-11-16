function hide(id){
    //document.getElementById(id).style.display = "none";
    var el = document.getElementById(id);
    //console.info("hide:" + id,el);
  
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
        //var pages = pages[i];
        var id = pages[i].id;
         //console.info("i=", i, id, pages[i]);
         hide(id);
    }
}

function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = "";
 }
