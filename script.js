const menu = document.querySelector(".menu-toggle"); //store hamburger button

const navLinks = document.querySelector(".nav-links"); // store navigation

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

//Active Navigation while scrolling
const sections = document.querySelectorAll("section");

const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{
    let current="";
    sections.forEach(section=>{
        const top=section.offsetTop-120;
        if(window.scrollY>=top){
            current=section.getAttribute("id");
        }
    });
    links.forEach(link=>{
        link.classList.remove("current");
        if(link.getAttribute("href")==="#" + current){
            link.classList.add("current");
        }
    });
});

//Back to Top Button
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll", ()=>{
    if(window.scrollY>500){
        topBtn.style.display="inline-block";
    }
    else{
        topBtn.style.display="none";
    }
});

//Fade-in Animation
const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", ()=>{
    fades.forEach(item=>{
        const position=item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if(position<screenHeight-100){
            item.classList.add("show");
        }
    });
});