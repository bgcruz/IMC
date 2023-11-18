function calculatePlan() {
    // Obter os valores inseridos pelo usuário
    var age = parseInt(document.getElementById('age').value);
    var weight = parseInt(document.getElementById('weight').value);
    var height = parseInt(document.getElementById('height').value);

    // Calcular o IMC
    var bmi = weight / Math.pow(height / 100, 2);

    // Lógica de cálculo dos planos A e B
    var planA_basic = 100 + (age * 10 * (bmi / 10));
    var planA_standard = (150 + (age * 15)) * (bmi / 10);
    var planA_premium = (200 - (bmi * 10) + (age * 20)) * (bmi / 10);

    var comorbidityFactor;
    if (bmi < 18.5) {
        comorbidityFactor = 10;
    } else if (bmi < 24.9) {
        comorbidityFactor = 1;
    } else if (bmi < 29.9) {
        comorbidityFactor = 6;
    } else if (bmi < 34.9) {
        comorbidityFactor = 10;
    } else if (bmi < 39.9) {
        comorbidityFactor = 20;
    } else {
        comorbidityFactor = 30;
    }

    var planB_basic = 100 + (comorbidityFactor * 10 * (bmi / 10));
    var planB_standard = (150 + (comorbidityFactor * 15)) * (bmi / 10);
    var planB_premium = (200 - (bmi * 10) + (comorbidityFactor * 20)) * (bmi / 10);

    // Exibir o resultado na tabela
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
