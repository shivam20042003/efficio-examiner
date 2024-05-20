
var count = 1;
document.getElementsByClassName("menu")[0].addEventListener("click", (e)=>{
    count++;
    if(count%2==0){
        document.getElementsByClassName("msdropmenu")[0].style.visibility = "visible";
    }
    else{
        document.getElementsByClassName("msdropmenu")[0].style.visibility = "hidden";
    }
    e.stopPropagation();
});



document.addEventListener("click",()=>{
    if(count%2==0){
        document.getElementsByClassName("msdropmenu")[0].style.visibility = "hidden";
        count++;
    }
})

document.getElementsByClassName("signup")[0].addEventListener("click",displasignup);
document.getElementsByClassName("signup2")[0].addEventListener("click",displasignup);
document.getElementsByClassName("signup2")[1].addEventListener("click",displasignup);
document.getElementsByClassName("signup3")[0].addEventListener("click",displasignup);

function displasignup() {
    document.getElementsByClassName("signlog")[0].style.visibility = "visible";
    document.getElementsByClassName("logsign")[0].style.visibility = "hidden";
    document.getElementsByClassName("logsign-bg")[0].style.visibility = "visible";
    document.body.style.overflow = 'hidden';
}

document.getElementsByClassName("login")[0].addEventListener("click",displalogin);
document.getElementsByClassName("menu-login")[0].addEventListener("click",displalogin);
document.getElementsByClassName("login2")[0].addEventListener("click",displalogin);
function displalogin(){
    document.getElementsByClassName("signlog")[0].style.visibility = "hidden";
    document.getElementsByClassName("logsign")[0].style.visibility = "visible";
    document.getElementsByClassName("logsign-bg")[0].style.visibility = "visible";
    document.body.style.overflow = 'hidden';
}

document.getElementsByClassName("cancel")[0].addEventListener("click", displaoff);
document.getElementsByClassName("cancel")[1].addEventListener("click", displaoff);

function displaoff(){
    document.getElementsByClassName("signlog")[0].style.visibility = "hidden";
    document.getElementsByClassName("logsign")[0].style.visibility = "hidden";
    document.getElementsByClassName("logsign-bg")[0].style.visibility = "hidden";
    document.body.style.overflowY = 'visible';
}

if(window.matchMedia("(max-width:750px)").matches){
    document.getElementsByClassName("hero-contan")[1].setAttribute("style","flex-direction: column");
}
function check() {
    if (document.getElementById("crPass").value != document.getElementById("conPass").value) {
        document.alert("Not Matching");
        this.disable;
    } 
}

