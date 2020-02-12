//reset window web
function reset() {
  window.location.reload()
}


//work with animations
let box = document.querySelector(".box")

function paintItBlack() {
  box.style.backgroundColor = "black"
}

function makeCurcle() {
  box.style.borderRadius = "50%"
}

function move() {
  box.style.margin = "100px 100px"
}


function makeBlinking() {
  box.classList.add('blinking')
}

function addText() {
  box.before('TITLE', document.createElement('h1'))
  /*
  var title = document.createElement('h1')
  title.innerHTML = "TITLE"
  title.className = 'title'
  div.before(title)
  */
}
