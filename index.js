const form = document.querySelector('#ourForm')
const field = document.querySelector('#ourField')
const list = document.querySelector('#ourList')

form.addEventListener('submit', e => {
  e.preventDefault()
  createItem(field.value)
  field.value = ''
  field.focus()
})

function createItem(txt) {
  const li = `<li>${txt} <button onclick="deleteItem(this)">Delete</button></li>`
  list.insertAdjacentHTML('beforeend', li)
}

function deleteItem(el) {
  el.parentElement.remove()
}