const add = document.getElementById('add');
const ulTag = document.getElementById('ulTag');
const inputName = document.getElementById('inputName');

add.addEventListener('click', addTodo);

function addTodo(e) {
    if(!inputName.value) return;
    if (ulTag.children[0].className == 'list-group-item') {
        ulTag.children[0].remove();
    }

    const currentInputValue = inputName.value;
    if (currentInputValue != '') {
        const liTag = document.createElement('li');
        liTag.className = 'list-group-item d-flex justify-content-between';
        liTag.innerHTML = `<p class="flex-grow-1">${currentInputValue}</p>
                            <button type="submit" class="btn btn-warning mx-2" onclick="edit(this)">Edit</button>
                            <button type="submit" class="btn btn-danger" onclick="remove(this)">Remove</button>`;
        ulTag.appendChild(liTag);
        inputName.value = '';
    }
}

function remove(obj) {
    obj.parentElement.remove();
    if (ulTag.children.length <= 0) {
        const liTag = document.createElement('li');
        liTag.classList.add('list-group-item');
        liTag.innerHTML = `<p class="text-center">No to-dos yet</p>`;
        ulTag.appendChild(liTag);
    }
}

function edit(obj) {
    if (obj.textContent == 'Edit') {
        obj.textContent = 'done';
        const hTag = obj.previousElementSibling;
        const hTagValue = hTag.textContent;
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Enter a task';
        inputField.className = 'form-control';
        inputField.value = hTagValue;
        obj.parentElement.replaceChild(inputField, hTag);
    } else {
        const inputTag = obj.previousElementSibling;
        const inputTagValue = inputTag.value;
        if (inputTagValue != '') {
            obj.textContent = 'Edit';
            const hTag = document.createElement('p');
            hTag.className = 'flex-grow-1';
            hTag.textContent = inputTagValue;
            obj.parentElement.replaceChild(hTag, inputTag);
        } else {
            return;
        }
    }
}