/* ============================================= */
/* FILE: script.js
Description: Main javascript Functionality
Author: Asadu Anselem Toochukwu */
/* ==================================================== */

/* =================================================  */
/* TYPING TEXT EFFECT START */
/* ==================================================== */

/* Array containing typing texts */
const typingTexts = [
    "Cybersecurity Analyst",
    "Web Developer",
    "Frontend Developer",
    "Security Researcher",
];

/* Target elemrnt for typing effect */
const typingElement = document.querySelector(".hero-content h2");

/* Current text index */
let textIndex = 0;

/* Current Character index */
let charIndex = 0;

/* Stores weather deleting is active */
let isDeleting = false;

/* Typing speed */
let typingSpeed = 100;

/* Main typing function */
function typeEffect() {
    /* Current text being typed */
    let currentText = typingTexts[textIndex];

    /* If deleting text */
    if (isDeleting) {
        /* Remove characters one by one */
        typingElement.textContent = currentText.substring(0,charIndex);
    }

    /* If typing text */
    else {
        /* Add characters one by one */
        typingElement.textContent = currentText.substring(0,charIndex++);
    }

    /* If completed typing */
    if (!isDeleting && charIndex === currentText.length) {
        /* Pause before deleting */
        isDeleting = true;

        /* Delay */
        typingSpeed = 1500;
    }
    /* If finished deleting */
    else if (isDeleting && charIndex === 0) {
        /* Stop deleting */
        isDeleting = false;

        /* Move to next text */
        textIndex = (textIndex + 1) % typingTexts.length;
        
        /* Typing speed */
        typingSpeed = 150;
    }

    /* Normal typing speed */
    else {
        /* Speed adjustment */
        typingSpeed = isDeleting? 50 : 100;
    }

    /* Re-run typing function */
    setTimeout(typeEffect, typingSpeed);

}
/* Start typing animation */
typeEffect();

/* ============================================= */
/* TYPING TEXT EFFECT END */
/* ============================================== */

/* =============================================  */
/* SCROLL REVEAL ANIMATION START */
/* ============================================= */

/* SELECT ALL SECTIONS  */
const hiddenElements = document.querySelectorAll(".skill-card, .project-card, .certificate-card, .tool-item");
/* create intersection observer */
const observer = newIntersectionObserver(
    /* callback function */
    (entries) => {
        /* Loop through entries */
        entries.forEach((entry) => {
            /* If element is visible */
            if (entry.isIntersecting) {
                /* Add animation class */
                entry.target.classList.add("show");
            }
        });
    },
    
    /* Observer settings */
    {
        threshold: 0.2
    }
);

/* Observe all hidden elements */
hiddenElements.forEach((element) => {
    observer.observer(element);
});

/* ========================================= */
/* SCROLL REVEAL ANIMATION END */
/* ========================================= */

// =========================================
// ACTIVE NAVIGATION LINK START
// =========================================

// Select all sections
const sections = document.querySelectorAll("Sections");

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Detect page scroll
window.addEventListener("scroll", () => {
    // Current Scroll Position
    let current = "";
    // loop through sections
    sections.forEach((section) => {
        // section height
        const sectionHeight = section.offsetHeight;
        // Sectiontop position
        const sectionTop = section.offsetTop - 150;

        // Section id
        const sectionId = section.getAttribute("id");

        // Check if Section is active
        if (pageXOffset >= sectionTop) {
            current = sectionId
        }
    });

    // loop through nav links
    navLinks.forEach((link) => {
        // Remove active class
        link.classList.remove("active");

        // Add Active class 
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });
    
});

// ===========================================
// Active Navigation Link End End
// ===========================================

// ==========================================
// NAVBAR BACKGROUND CHANGE START
// ==========================================

// Detect scrolling
window.addEventListener("scroll", () => {
    // Select navbar
    const navbar = document.querySelector(".navbar");

    // If user scrolls
    if (window.scrollY > 50) {
        // Add darker background 
        navbar.computedStyleMap.background = "rgba(0, 0, 0, 0.95)";
    }
    // if at top 
    else {
        // Reset background
        navbar.computedStyleMap.background = "rgba(5, 8, 22, 0.9);"
    }
});

// ==========================================================
// NAVBAR SCROLL END
//========================================================

// ======================================================
// Scroll TO TOP Button Start
// ===================================================== 

// Create button element
const scrollButton = document.createElement("button");

// Add button text
scrollButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

// Add button class 
scrollButton.classList.add("scroll-top-btn");

// Add button to body
document.body.appendChild(scrollButton);

// Detect Scrolling
window.addEventListener("scroll", () => {
    // if user scrolls down
    if (window.scrollY > 300) {
        // Show button
        scrollButton.style.display = "flex";
    }
    // If near Top 
    else {
        // Hide button
        scrollButton.style.display = "none";
    }
});

// Smooth Scroll to Top event
scrollButton.addEventListener("click", () => {
    // Smooth scroll to top
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});


// ===========================================================
// SCROLL TO TOP BUTTON END
// ===========================================================



// ==========================================================
// CONSOLE MESSAGE STARTS 
// ==========================================================

// Display console message 
console.log(
    "%Welcome to My Portfolio Website!", "color: cyan; font-size: 20px; font-weight: bold;"
);

// =====================================================================
// CONSOLE MESSAGE END
// =====================================================================



