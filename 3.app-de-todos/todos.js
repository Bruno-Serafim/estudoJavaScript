var listElement = document.querySelector('#App ul')
var inputElement = document.querySelector('#App input')
var buttonElement = document.querySelector('#App button')

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
]

function renderTodos(){
    listElement.innerHTML = ""
    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodos(){
    var todoText = inputElement.value 

    todos.push(todoText)
    inputElement.value = ""
    renderTodos()
}

buttonElement.onclick = addTodos