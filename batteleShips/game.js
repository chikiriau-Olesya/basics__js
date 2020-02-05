//Задаем координаты корабля
let location1 = 5
let location2 = 6
let location3 = 7

//Переменная чтобы хранить координату выстрела
let currentShot
//сколько было сделано ввысттелов
let shots = 0
//Сколько раз попал игрок
let hits = 0
//Утонул ли корв=абь
let isSunk = false

//Пишем цикл, работающий пока корабль не утонул
while (isSunk === false) {
  //Спрашиваем координату выстрела у игрока
  currentShot  = Number(prompt('ввведите число от 0 до 9:'))

  //Пишем условия введения чисел
  if(currentShot < 0) {
    alert("Воу, слишком мало")
  }
  if (currentShot > 9) {
    alert("Ту мач")
  }
  //увеличиваю кол-во выстрелов
  //shots++
  console.log(currentShot);
  shots += 1
  //Проверяю попал ли человек по корабл
  //Если координата совпадает с какой-либо координатой корабля , то это значит, что игрок попал
  //Поэтому то увеличиваю кол-во попаданий
  if (currentShot === location1 || currentShot === location2 || currentShot === location3 ){
    hits += 1
    alert('Вы попали');
  } else if (сurrentShot > 9 || currentShot < 0 || currentShot === NaN) {
    alert('Введите число правильно');
  }
  else {
    alert('Вы промахнулись');
  }

  console.log(hits);
  //Если игрок попал 3 раза,топим корабль
  if (hits === 3) {
    isSunk = true
    alert('Вы убиты')
  }

}
