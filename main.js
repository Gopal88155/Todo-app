let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let themeBtn = document.querySelector("button")
let navbar = document.querySelector("nav")
let container = document.querySelector("#container")

const saveTodo = (e) => {
  e.preventDefault()
  let li = document.createElement("li")
  li.innerText = input.value
  li.className = "list-group-item rounded-0"
  let btn = document.createElement("button")
  btn.innerText = "Delete"
  btn.className = "btn btn-danger btn-sm float-end rounded-0"
  li.appendChild(btn)
  ul.appendChild(li)
  form.reset()
}

form.addEventListener("submit", saveTodo)

const removeTodo = (e) => {
  if (e.target.className === "btn btn-danger btn-sm float-end rounded-0") {
    let li = e.target.parentElement
    ul.removeChild(li)
  }
}

ul.addEventListener("click", removeTodo)
