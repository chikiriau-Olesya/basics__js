/*
let div = document.createElement('div')
document.body.append(div) //Передаем созданныый элемнт в боди, тк у каждой странички есть боди, нам не нужно искать элемент через quarySelector
*/
let numberOfRects = 5


for (let i = 0; i < numberOfRects; i++) {
  let div = document.createElement('div')
  if (i % 2 === 0) {
    let width = `${anime.random(0, 500)}px`
    div.style.width = width
    div.style.height = width
    div.style.borderRadius = '50%'
  } else {
    div.style.width = `${anime.random(0,500)}px`
    div.style.height = `${anime.random(0,500)}px`
  }
  div.style.background = `rgb(${anime.random(0, 255)},${anime.random(0, 255)},${anime.random(0, 255)})`
  div.style.transform = `translate(${anime.random(0,100)}vw, ${anime.random(0,100)}vh) rotate(${ anime.random(0,360)}deg)`

  div.onmouseenter = function(e) {
    let elStyle = e.target.style
    let elWidthNum =  Number(elStyle.width.slice(0, -2))
    let elHeightNum =  Number(elStyle.height.slice(0, -2))
    if (elWidthNum === elHeightNum) {
      let width = `${anime.random(0, 500)}px`
      elStyle.width = width
      elStyle.height = width
    }else {
      elStyle.width = `${anime.random(0, 500)}px`
      elStyle.height = `${anime.random(0, 660)}px`
    }//slice отрезает у элементов часть, в данном случае убираем px
  elStyle.background = `rgb(${anime.random(0, 255)},${anime.random(0, 255)},${anime.random(0, 255)})`
  elStyle.transform = `translate(${anime.random(0,100)}vw, ${anime.random(0,100)}vh) rotate(${ anime.random(0,360)}deg)`
  }
  document.body.append(div)
}

let word = Math.random().toString(36).slice(-10)
