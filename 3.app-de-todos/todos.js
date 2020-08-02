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

        var linkElement = document.createElement('a')

        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', `deleteTodo(${pos})`)

        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
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

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
}