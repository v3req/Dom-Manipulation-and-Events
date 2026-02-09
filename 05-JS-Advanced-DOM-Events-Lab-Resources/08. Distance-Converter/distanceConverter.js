function attachEventsListeners() {


    const inputField = document.getElementById('inputDistance');
    const outputField = document.getElementById('outputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const button = document.getElementById('convert');

    button.addEventListener('click', onClick);

    

    function onClick(ev){
        let value = Number(inputField.value);
        const startUnit = inputUnits.value;
        const endUnit = outputUnits.value;

        if(startUnit == 'km'){
            value *= 1000;
        }else if (startUnit === 'cm') value *= 0.01;
        else if (startUnit === 'mm') value *= 0.001;
        else if (startUnit === 'mi') value *= 1609.34;
        else if (startUnit === 'yrd') value *= 0.9144;
        else if (startUnit === 'ft') value *= 0.3048;
        else if (startUnit === 'in') value *= 0.0254;

        if(endUnit == 'km') value /= 1000;
        else if (endUnit === 'cm') value /= 0.01;
        else if (endUnit === 'mm') value /= 0.001;
        else if (endUnit === 'mi') value /= 1609.34;
        else if (endUnit === 'yrd') value /= 0.9144;
        else if (endUnit === 'ft') value /= 0.3048;
        else if (endUnit === 'in') value /= 0.0254;

        outputField.value = value
    }



}