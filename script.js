const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");
const factors = [0.0525, 0.1099, 0.1271, 0.1447, 0.1624, 0.1802, 0.1983, 0.2167, 0.2352, 0.2538, 0.2728, 0.2918];

inputElement.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        buttonElement.click();
    }
});

function renderSimulation(value) {
    listElement.innerHTML = '';

    if(value > 0){
        for(factor of factors){
            let installmentAmount = factors.indexOf(factor) + 1;
            let grossPaid = factor * Number(value) + Number(value);
            let installmentValue = grossPaid / installmentAmount;
            let installmentElement = document.createElement("li");
            let installmentText = document.createTextNode(`${installmentAmount}x: ${installmentValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);

            listElement.appendChild(installmentElement);
            installmentElement.appendChild(installmentText);
        }
    }
}

const newValue = function(){
    renderSimulation(inputElement.value);
    inputElement.value = '';
}

buttonElement.onclick = newValue;