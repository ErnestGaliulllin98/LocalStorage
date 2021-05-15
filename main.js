const myNumber = 42

// localStorage.setItem(type: 'string', type: 'string') // Устанавливать данный
// localStorage.getItem(type: 'string', type: 'string') // Получать данный 
// localStorage.removeItem(type: 'string') // Удаление одного элемента
// localStorage.clear() // Полная очистка 

localStorage.removeItem('number')
console.log(localStorage.getItem('number'))
// Перед как записывать данный в storage .toString() || JSON.stringify()
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'))
localStorage.clear()

const object = {
  name: 'Max',
  age: 20
}

localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Ernest'

console.log(person)

// Способ прослушивания данных 
// Прослушивание позволяет обновлять данный, когда открыто несколько вкладок в браузере
window.addEventListener('storage', event => {
  console.log(event)
})
// Иной способ прослушивания данный со LocalStorage
// window.onstorage = () => {}