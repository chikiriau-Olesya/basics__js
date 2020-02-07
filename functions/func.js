let secondName = 'Vanyach'
function logUser() {
  let name = 'Vanya'
  console.log(name + ' ' + secondName)
}
logUser()
console.log('secondName: ' + secondName)
console.log('name: ' + name)
//2
function getFullName(name, secondName) {
  return `Полное имя: ${name} ${secondName}`
}

console.log(getFullName('Dasha','Vaser'));
let leoFullName = getFullName('Leonard', 'Leontiev')
console.log(leoFullName);

//3
function sayHello(name = 'stranger') {
  //if (name === undefined) {
  //  name = 'stranger'
  //  }
  //name = name || 'stranger'
//  alert(`Hello ${name}!`)
}
sayHello()

//4
function makeCoffee(cups, withMilk) {
  if (withMilk) {
  return  console.log(`Making ${cups}coffee with milk`);
  }
  return console.log(`Making ${cups} blank coffee`);
}
makeCoffee(22, true)
makeCoffee(222, false)


//1-task
function findMax(a, b) {
  if (a !== b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    return 'Ваши числа равны'
  }
}
findMax(2, 4)
findMax(5, 3)
findMax(5, 5)

//2-task
function addOne(number = 1) {
  let result = number + 1
  return console.log(result);
}
addOne(number = 3)

//3
 function showQuote(text, author = 'Неизвестный автор') {
   if (text !== undefined) {
     return console.log(text + author);
   } else {
     return
   }
 }
 showQuote()


 //4-task
 function nextEvent(num) {
   if (num % 2 !== 0) {
     return num + 1
   } else {
     return num + 2
   }
 }
 nextEvent(3)
 nextEvent(4)

 let resultFirst =  nextEvent(3)
 let resultSecond =  nextEvent(4)
 console.log(resultFirst, resultSecond);
