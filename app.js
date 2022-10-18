/* Selecting relevant elements */ 
const list = document.querySelectorAll("ul li"); 
const select = document.querySelector(".select");
const preselection = document.querySelector(".preselection") 
const postselection = document.querySelector(".postselection") 
const span = document.querySelector("span"); 

/*When a user clicks a button the button that is selected gets a special class attached to it*/
list.forEach((item) => {
    item.addEventListener("click", function(e) {
        list.forEach((item) => {item.classList.remove("picked")}); 
        e.target.classList.add("picked");  
    })
}); 

/*When the select button is clicked, we check if one of the numbered buttons has been selected. If not, we prompt the user to click one. If so, we move to the page and tell them what number they selected*/
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