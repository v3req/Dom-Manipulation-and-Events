function deleteByEmail() {
    const inputField = document.querySelector('[name = "email"]');
    const tableRows = Array.from(document.querySelector('tbody').children);
    const resultField = document.getElementById('result')
    
    if(!inputField.value){
        return;
    }

    let found = false

    for(let row of tableRows){
        if(row.children[1].textContent == inputField.value){
            row.remove();
            found = true
        }   
    }

    if(found){
        resultField.textContent = 'Deleted.'
        inputField.value = ''
    } else {
        resultField.textContent = 'Not found.'
       
    }
}