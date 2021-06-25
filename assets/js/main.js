function meuEscopo() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const results = [];

    function receiveEventForm (event) {
        event.preventDefault();
        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        results.push({
            peso: peso.value,
            altura: altura.value
        });

        const imc = (peso / altura**2).toFixed(2);

        result.innerHTML = '';

        if(!peso) {
            result.innerHTML += `<p style="background:red; color:white;" > Peso Iválido - Exemplo válido: 1.84 <br>`;    
        } else if(!altura) {
            result.innerHTML += `<p style="background:red; color:white;" > Altura Iválida - Exemplo válido: 104.4 <br>`;    
        } else if (imc <= 18.5 ) {
            result.innerHTML += `<p style="background:red; color:white;" > Peso: ${peso} <br> IMC = ${imc} <br> Menos do que 18,5 Abaixo do peso </p>`;    
        } else if (imc >= 18.51 && imc <= 24.9 ) {
            result.innerHTML += `<p style="background:lightgreen;"> Peso: ${peso} <br> IMC = ${imc} <br> Entre 18,5 e 24,9	Peso Normal </p>`;    
        } else if (imc >= 24.91 && imc <= 29.9 ) {
            result.innerHTML += `<p style="background:orangered;"> Peso: ${peso} <br> IMC = ${imc} <br> Entre 25 e 29,9 Sobrepeso </p>`;    
        } else if (imc >= 29.91 && imc <= 34.9) {
            result.innerHTML += `<p style="background:lightcoral;"> Peso: ${peso} <br> IMC = ${imc} <br> Entre 30 e 34,9 Obsidade grau 1</p>`;    
        } else if ( imc >= 34.91 && imc <= 39.9) {
            result.innerHTML += `<p style="background:red; color:white;"> Peso: ${peso} <br> IMC = ${imc} <br> Entre 35 e 39,9 Obesidade grau 2</p>`;    
        } else {
            result.innerHTML += `<p style="background:darkred; color:white;"> Peso: ${peso} <br> IMC = ${imc} <br> Mais do que 40	Obesidade grau 3</p>`;    
        }
        
    }
    form.addEventListener('submit', receiveEventForm);
}
meuEscopo();