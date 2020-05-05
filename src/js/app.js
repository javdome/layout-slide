let sections = document.getElementsByTagName('section');

let nextButton = document.getElementById('nextButton');
nextButton.addEventListener("click", nextPage);

let previousButton = document.getElementById('previousButton');
previousButton.addEventListener("click", previousPage)

//Inicializacion
// for (section of sections) {
//     section.classList.add("hidden");
// }

for (let i=0; i < sections.length ; i++) {
    sections[0].classList.add("h-screen");
    if (i>0) sections[i].classList.add("h-0");
}

let activeSection = 0;
// sections[0].classList.remove("hidden");
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
    sections[activeSection].classList.remove("h-screen");
    sections[activeSection].classList.add("h-0");
    activeSection++;
    sections[activeSection].classList.remove("h-0");
    sections[activeSection].classList.add("h-screen");
    visibilityButtons();
}

function previousPage(){
    sections[activeSection].classList.remove("h-screen");
    sections[activeSection].classList.add("h-0");
    activeSection--;
    sections[activeSection].classList.remove("h-0");
    sections[activeSection].classList.add("h-screen");
    visibilityButtons();
}

function visibilityButtons(){
    if (activeSection == 0) {
        previousButton.classList.add("invisible");
    } else {
        previousButton.classList.remove("invisible");
    }

    if (activeSection == (sections.length -1)) {
        nextButton.classList.add("invisible");
    } else {
        nextButton.classList.remove("invisible");
    }
}