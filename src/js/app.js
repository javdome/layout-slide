let sections = document.getElementsByTagName('section');

let nextButton = document.getElementById('nextButton');
nextButton.addEventListener("click", nextPage);

let previousButton = document.getElementById('previousButton');
previousButton.addEventListener("click", previousPage)

//Inicializacion
for (section of sections) {
    console.log(section);
    section.classList.add("hidden");
}

let activeSection = 0;
sections[0].classList.remove("hidden");
visibilityButtons();



function nextPage(){
    sections[activeSection].classList.add("hidden");
    activeSection++;
    sections[activeSection].classList.remove("hidden");
    visibilityButtons();
}

function previousPage(){
    sections[activeSection].classList.add("hidden");
    activeSection--;
    sections[activeSection].classList.remove("hidden");
    visibilityButtons();
}

function visibilityButtons(){
    if (activeSection == 0) {
        previousButton.classList.add("hidden");
    } else {
        previousButton.classList.remove("hidden");
    }

    if (activeSection == (sections.length -1)) {
        nextButton.classList.add("hidden");
    } else {
        nextButton.classList.remove("hidden");
    }
}