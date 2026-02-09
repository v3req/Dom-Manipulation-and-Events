function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', onChange);

    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gm;

    function onChange(ev){
        if(!ev.target.value.match(pattern)) {
            ev.target.className = 'error';
            return;
        }
        else ev.target.className = ''
    }
}