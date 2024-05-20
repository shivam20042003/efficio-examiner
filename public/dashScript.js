document.getElementsByClassName("side-ham")[0].addEventListener("click",()=>{
    if (document.getElementsByClassName("menu")[0].classList.length == 2) {
        document.getElementsByClassName("menu")[0].classList.remove("menu_");
    } else {
        document.getElementsByClassName("menu")[0].classList.add("menu_");
    }
})

