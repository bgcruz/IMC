function calculatePlan() {
    
    var idade = parseInt(document.getElementById('idade').value);
    var peso = parseInt(document.getElementById('peso').value);
    var altura = parseInt(document.getElementById('altura').value);

    
    var imc = peso / Math.pow(altura / 100, 2);

    
    var planA_basic = 100 + (idade * 10 * (imc / 10));
    var planA_standard = (150 + (idade * 15)) * (imc / 10);
    var planA_premium = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

    var comorbidityFactor;
    if (imc < 18.5) {
        comorbidityFactor = 10;
    } else if (imc < 24.9) {
        comorbidityFactor = 1;
    } else if (imc < 29.9) {
        comorbidityFactor = 6;
    } else if (imc < 34.9) {
        comorbidityFactor = 10;
    } else if (imc < 39.9) {
        comorbidityFactor = 20;
    } else {
        comorbidityFactor = 30;
    }

    var planB_basic = 100 + (comorbidityFactor * 10 * (imc / 10));
    var planB_standard = (150 + (comorbidityFactor * 15)) * (imc / 10);
    var planB_premium = (200 - (imc * 10) + (comorbidityFactor * 20)) * (imc / 10);

    
    var resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Plano</th>
                    <th scope="col">Operadora A</th>
                    <th scope="col">Operadora B</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Básico</th>
                    <td>${planA_basic.toFixed(2)}</td>
                    <td>${planB_basic.toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">Standard</th>
                    <td>${planA_standard.toFixed(2)}</td>
                    <td>${planB_standard.toFixed(2)}</td>
                </tr>
                <tr>
                    <th scope="row">Premium</th>
                    <td>${planA_premium.toFixed(2)}</td>
                    <td>${planB_premium.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    `;
}
