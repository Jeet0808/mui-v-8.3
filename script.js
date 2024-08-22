// scripts.js
let currentIndex = 0;

function showSlide(index) {
    const iframes = document.querySelectorAll('iframe');
    const totalSlides = iframes.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    iframes.forEach((iframe, i) => {
        iframe.classList.remove('active');
        if (i === currentIndex) {
            iframe.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});


// sie br

const cbn = document.getElementById("cbn");
const sidebar = document.getElementById("sidebar");


cbn.addEventListener("click" , Event => {
    if (sidebar.style.visibility === "hidden") {
        sidebar.style.visibility = "visible";
        cbn.textContent = "Hide maineu";

        
    } else {
        sidebar.style.visibility = "hidden";
        cbn.textContent = "Show maineu";
        
    }
});

// iner

const Summary  = document.getElementById("Summary");
const Commnt = document.getElementById("Comment");
const Announcement = document.getElementById("Announcement");


Sump.style.display  = "block";
Summary.addEventListener("click" , Event => {
  
    if (Sump.style.display === "none") {
        Sump.style.display  = "block";
        Comp.style.display = "none";
        Annp.style.display  ="none";

        
    } else {
       Sump.style.display = "none";
       
        
    }
});

Commnt.addEventListener("click" , Event => {
    if (Comp.style.display === "none") {
        Comp.style.display  = "block";
        Sump.style.display = "none";
        Annp.style.display = "none";
        
    } else {
        Comp.style.display = "none";
       
        
    }
});


Announcement.addEventListener("click" , Event => {
    if (Annp.style.display === "none") {
        Annp.style.display  = "block";
        Comp.style.display = "none";
        Sump.style.display = "none";
        
    } else {
        Annp.style.display = "none";
       
        
    }
});
