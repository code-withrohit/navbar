var toggle = document.querySelector(".toggle")
var list = document.querySelector(".dropdown")

toggle.addEventListener('click', function(){
    if(list.style.display == "none" || list.style.display == ""){
        list.style.display == "flex"
    }
    else{
        list.style.display == "none"
    }
})

