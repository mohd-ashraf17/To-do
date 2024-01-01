const item = document.querySelector('#text');
const todolist = document.querySelector('#to-do-list')

item.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        addtodo(item.value)
        item.value = "";
    }
})

const addtodo = (text) => {
    const todo = document.createElement('li')
    todo.innerHTML = `
        ${text}
        <i class="fa-solid fa-xmark"></i>
    `
    todo.addEventListener('click', () => [
        todo.classList.toggle('done')
    ])
    todo.querySelector('i').addEventListener("click", () => {
        todo.remove()
        savetodo()
    })
    todolist.appendChild(todo)
    savetodo()

}

const savetodo = () => {
    const todo = document.querySelectorAll('li');
    const data = [];
    todo.forEach((todo) => {
        data.push(todo.innerText)
        console.log(todo.innerText)
    })
    localStorage.setItem('todo', JSON.stringify(data));
}
(() => {
    const lstodo = JSON.parse(localStorage.getItem('todo'));
    console.log(lstodo)
    lstodo.forEach((lstodo) => {
        addtodo(lstodo)
    })
})()

