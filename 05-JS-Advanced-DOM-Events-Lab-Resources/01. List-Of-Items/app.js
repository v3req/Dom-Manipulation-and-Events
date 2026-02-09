function addItem() {
    const input = document.getElementById('newItemText')
    const listRef = document.getElementById('items')
    if(!input.value){
        return;
    }
    const item = document.createElement('li');
    item.textContent = input.value;
    listRef.appendChild(item);
    input.value = ''
}