function focused() {
    const container = document.querySelector('div');
    container.addEventListener('focusin', onFocusIn);
    container.addEventListener('focusout', onFocusOut);

    function onFocusIn(ev){
        ev.target.parentElement.className = 'focused'
    }

    function onFocusOut(ev){
        ev.target.parentElement.className = ''
 
    }
}