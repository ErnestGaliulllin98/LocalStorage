function helperLocalStorage(key, options){
  if (options) {
    return localStorage.setItem(key, JSON.stringify(options))
  }
  return JSON.parse(localStorage.getItem(key))
}

const smail = document.querySelector('#smail')
const {fontSize} = helperLocalStorage('smail:style')
smail.style.fontSize = fontSize

window.addEventListener('keydown', event => {
  const prevSize = smail.style.fontSize.substring(0, smail.style.fontSize.length-1)
  let currentValue

 if (event.key == 'ArrowUp') {
   event.preventDefault()
   currentValue = (+prevSize + 10) + '%'
 }

 if (event.key == 'ArrowDown') {
   event.preventDefault()
   currentValue = (+prevSize - 10) + '%'
 }

 smail.style.fontSize = currentValue
  helperLocalStorage('smail:style', {
    fontSize: currentValue
  })
})