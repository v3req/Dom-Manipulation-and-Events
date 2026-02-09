function addItem() {
    const input = document.getElementById('newItemText')
    const list = document.getElementById('items')
    if(!input.value){
        return;
    }
    const item = document.createElement('li');
    item.textContent = input.value;
    

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    item.appendChild(button);
    button.addEventListener('click', onClick);

    list.appendChild(item);

    function onClick(event){
        const parent = event.target.parentElement;
        parent.remove()
    }


    input.value = '';
}