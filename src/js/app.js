let sections = document.getElementsByTagName('section');

let nextButton = document.getElementById('nextButton');
nextButton.addEventListener("click", nextPage);

let previousButton = document.getElementById('previousButton');
previousButton.addEventListener("click", previousPage)

//Inicializacion
for (section of sections) {
    section.classList.add("hidden");
}

let activeSection = 0;
sections[0].classList.remove("hidden");
visibilityButtons();



//Desplazamiento tactil
let body = document.getElementsByTagName('body')[0];

var mc = new Hammer(body);

mc.get('swipe').set({
  direction: Hammer.DIRECTION_ALL,
  threshold: 1, 
  velocity:0.1
});

mc.on('swipeup', function(){
        if (activeSection < (sections.length -1)) nextPage();
    });

mc.on('swipedown', function(){
    if (activeSection > 0) previousPage();
    });

// mc.on("swipeup swipedown swipeleft swiperight", function(ev) {
//   console.log(ev.type + " gesture detected.");
// });




//Funciones
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