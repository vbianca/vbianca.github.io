function hide(id){
    //document.getElementById(id).style.display = "none";
    var el = document.getElementById(id);
    console.info("hide:" + id,el);
  
    if (el){
        el.style.display = "none";
    }else {
        console.error("Pagina nu exista!",id)
    }
}

function showHome() {
    hide("skills");
    hide("projects");
    hide("languages");
    document.getElementById('home').style.display = '';
}


function showSkills() {
    hide("home");
    hide("projects");
    hide("languages");
    document.getElementById('skills').style.display = '';
}

function showProjects(){
    hide("skills");
    hide("skills");
    hide("languages");
    document.getElementById("projects").style.display = '';
}

function showLanguages(){
    hide("skills");
    hide("projects");
    hide("home");
    document.getElementById("languages").style.display = '';
}