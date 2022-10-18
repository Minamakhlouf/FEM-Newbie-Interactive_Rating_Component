const list = document.querySelectorAll("ul li"); 
const select = document.querySelector(".select");
const preselection = document.querySelector(".preselection") 
const postselection = document.querySelector(".postselection") 
const span = document.querySelector("span"); 


list.forEach((item) => {
    item.addEventListener("click", function(e) {
        list.forEach((item) => {item.classList.remove("picked")}); 
        e.target.classList.add("picked");  
    })
}); 

select.addEventListener("click", function() {
    let picked = document.querySelector(".picked"); 
    try {
        picked.textContent; 
    }
    catch(err) {
        alert("Pick a number before clicking Submit"); 
        return; 
    }
    let number = picked.textContent; 
    if (number) {
        preselection.classList.add("hidden"); 
        postselection.classList.remove("hidden"); 
        span.textContent = number; 
    }
})