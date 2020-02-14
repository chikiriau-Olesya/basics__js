let targsAnimation01 = anime({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false,
})
let targsBtn01 = document.getElementById('targsBtn01')
/*
//First way of adding animation but it is not so comfortable, so lets add variable
targsBtn01.onclick = anime({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false,
}).play
*/
targsBtn01.onclick = targsAnimation01.play

let propsAnimation01 = anime({
  targets: '.props .box',
  translateX: 500,
  rotate: 180,
  backgroundColor: '#00ffff',
  borderRadius: [0, '50%'],
  easing: 'easeInOutQuad',
  autoplay: false,
})
let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnimation01.play
