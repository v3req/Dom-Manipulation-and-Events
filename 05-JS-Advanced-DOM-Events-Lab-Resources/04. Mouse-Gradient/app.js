function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const resultField = document.getElementById('result');
    gradient.addEventListener('mousemove', mouseMove);
    gradient.addEventListener('mouseout', mouseOut)

    function mouseMove(ev){
        const cords = ev.offsetX
        resultField.textContent = Math.round(cords / gradient.offsetWidth * 100) + '%'
    }

    function mouseOut(){
        resultField.textContent = ''
    }
}