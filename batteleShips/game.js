//Задаем координаты корабля
let location1 = Math.floor(Math.random() * 8);
let location2 = location1 + 1;
let location3 = location1 + 2;

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
  /*
  if(currentShot < 0) {
    alert("Воу, слишком мало")
  }
  if (currentShot > 9) {
    alert("Ту мач")
  }
  */
  //увеличиваю кол-во выстрелов
  //shots++
  console.log(currentShot);
  //Проверяю попал ли человек по корабл
  //Если координата совпадает с какой-либо координатой корабля , то это значит, что игрок попал
  //Поэтому то увеличиваю кол-во попаданий
  if (currentShot < 0) {
    alert("Воу, слишком мало")
  } else if (currentShot > 9) {
    alert("Ту мач")
  } else if (currentShot !== Number) {
    alert("What?")
  } else {
      shots += 1
      if (currentShot === location1 || currentShot === location2 || currentShot === location3 ){
      hits += 1
      alert('Вы попали');
      } else {
      alert('Вы промахнулись');
      }
  }


/*
  if (currentShot === location1 || currentShot === location2 || currentShot === location3 ){
  shots += 1
  hits += 1
  alert('Вы попали');
  } else if (currentShot < 0) {
    alert("Воу, слишком мало")
  } else if (currentShot > 9) {
    alert("Ту мач")
  } else if (currentShot !== Number) {
    alert("What?")
  } else {
      shots += 1
      alert('Вы промахнулись');
      }
  }
  */


  console.log(hits);
  //Если игрок попал 3 раза,топим корабль
  if (hits === 3) {
    isSunk = true
    alert('Вы убиты')
  }

}
