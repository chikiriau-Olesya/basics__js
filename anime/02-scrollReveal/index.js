
//Чтобы подключить библиотеку прокрутки
let controller = new ScrollMagic.Controller()


//ПРИМЕР1
let box1 = document.querySelector('#box-1')
let box1Animation = anime({
  targets: box1, //Ссылаемся на переменную box
  translateX: 500,
  rotate: [0, 360],
  duration: 1500,
  autoplay: false
})

  //Создаем сцену
new ScrollMagic.Scene({
  triggerElement: box1,
  triggerHook: 1 //Когда появится в области видисоти 'onEnter'(1) 'onCenter'(0.5) 'onLeave'(0) или числом от 1 до 0
})
.addTo(controller) //добавляем сцену в контроллер,чтобы библиотека ее помнила
.on('enter', () => box1Animation.play())


//ПРИМЕР 2
let box2 = document.querySelector('#box-2')
let box2Animation = anime({
  targets: box2,
  translateX: '80vw',
  rotate: '+= 10turn',
  easing: 'linear',
  autoplay: false
})

let section3 = document.querySelector('#section-3')
new ScrollMagic.Scene({
  triggerElement: section3,
  duration: section3.getBoundingClientRect().height
})
.addTo(controller)
.setPin(box2)
.on('progress', e => {
  box2Animation.seek(box2Animation.duration * e.progress) //'event' могут называть просто 'e'
})


//ПРИМЕР3
let lastSection = document.getElementById('last-section')
let loader = document.querySelector('.loader')
let circlesWrapper = document.querySelector('.circles-wrapper')

let loadingScene = new ScrollMagic.Scene({
  triggerElement: loader,
  triggerHook: 'onEnter'
})
.addTo(controller)
.on('enter', () => {
  //addCircles(20)
  setTimeout(addCircles, 2000, 20) //встроенная функция в джс 1)функция 2) задержка 3) что передаем когда функция начинает работать
})

function addCircles(amount) {
  let count = 0
  while (amount > count) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('circle')
    newDiv.style.background = getRandomRGBColor()
    circlesWrapper.append(newDiv)
    count +=1
  }
}
//.length


function getRandomRGBColor() {
  return `rgb(${getRGBcode()},${getRGBcode()},${getRGBcode()})`
}

function getRGBcode() {
  return  Math.round(Math.random() * 255)
}
