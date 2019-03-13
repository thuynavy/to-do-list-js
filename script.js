let masterTodoList = [];
let todos;

let addTodo = () => {
    let text = document.getElementById("task").value;
    masterTodoList.push({
        text: text,
        isDone: false
    });

    render();
}

document.getElementById('btn').addEventListener('click', () => {
    let task = document.getElementById('task');
    masterTodoList.push({text: task.value, isDone: false});
    console.log(masterTodoList);
    task.value = '';
    updateTodoList();
});

let updateTodoList = () => {
    let html = '<ul>';
    for (let i = 0; i < masterTodoList.length; i++) {
        if (masterTodoList[i].isDone == false) {
            html += '<li>' + masterTodoList[i].text + ` <button onclick="remove(${i})">Delete</button>` + ` <button onclick="toggleBtn(${i})">Mark done</button>` + '</li>';
            onclick=`toggleButn(${i})` + ' Mark undone'
        }
        if (masterTodoList[i].isDone == true) {
            html += '<li><strike>' + masterTodoList[i].text + '</strike>' + ` <button onclick="remove(${i})">x</button>` + ` <button onclick="toggleBtn(${i})">Mark undone</button>` + '</li>';
            onclick=`toggleButn(${i})` + ' Mark done'
        }
    
};
    html += '</ul>'; 

    document.getElementById('empty').innerHTML = html;

    // let buttons = document.getElementById("remove");
    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', remove);
    //     masterTodoList.splice(i, 1) 
    // };
}

let remove = (i) => {
    masterTodoList.splice(i, 1);
    // document.getElementById('task').innerHTML = html;
    updateTodoList();
}

let toggleBtn = (i) => {
    masterTodoList[i].isDone = !(masterTodoList[i].isDone);
    updateTodoList();
}


