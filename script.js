const display = document.querySelector('#inputPolje');
const buttons = document.querySelectorAll('button');
const specialChar = ["%", "/", "*", "+", "-"]
let output = "";

// F-ja koja obrađuje klikove na dugmicima
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        let result = eval(output.replace("%", "/100"));
        if (result.toString().includes(".")) {
            let decimalPart = result.toString().split(".")[1];
            if (decimalPart.length > 11) {
                // Ograničino na 11 cifara
                result = parseFloat(result).toFixed(11);
            }
        }
        output = result; 
    } 
        else if (btnValue === "AC") {
        output = "";
    } 
        else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } 
        else {
        if (output === "" && specialChar.includes(btnValue)) return;
        output += btnValue; 
    }
    display.value = output;

};

// Kada se dugme klikne, poziva funkciju calculate
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});