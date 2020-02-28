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
let fonts = [
'Caladea',
'Oswald',
'Playfair Display',
'Poppins',
'Raleway',
'Source Sans Pro'
]

/*
for (var i = 0; i < wordNumber; i++) {
  let word = document.createElement('p')
  if (i % 2 == 0) {
    word.style.fontSize = `${anime.random(0, 100)}px`
    word.style.fontFamily = [anime.random(0,5)]
    word.style.fontWeight = anime.random(500,700)
  } else {
    word.style.fontFamily = [anime.random(0,5)]
    word.style.fontWeight = `${anime.random(0,400)}`
  }
  word.style.transform = `translate(${anime.random(0,100)}vw, ${anime.random(0,100)}vh) rotate(${ anime.random(0,360)}deg)`
  word.style.color = `rgb(${anime.random(0, 255)},${anime.random(0, 255)},${anime.random(0, 255)})`
  document.body.append(p)
}
*/

let  wordNumber = 12

for (var i = 0; i < wordNumber; i++) {
  let p = document.createElement('p')
  let word = Math.random().toString(36).slice(-10)

  word.split('').forEach(letter => {
    let span = document.createElement('span')
    span.innerText = letter
    span.style.fontFamily = fonts[anime.random(0,5)]
    span.style.fontSize = `${anime.random(0,10)}vw`
    span.style.color = `rgb(${anime.random(0, 255)},${anime.random(0, 255)},${anime.random(0, 255)})`
    p.append(span)
  })
  // split разбивает слова  на буквы, выбираем, что необходимо убрать

  p.style.fontWeight = anime.random(0,700)
  p.style.transform = `translate(${anime.random(0,100)}vw, ${anime.random(0,100)}vh) rotate(${ anime.random(0,360)}deg)`

  document.body.append(p)
}
