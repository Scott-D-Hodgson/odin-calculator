let history = "";
let display = "";
let previous = null;
let operation = "";
let current = 0;

function AddDigit(char) {
    if (typeof char !== "string" || char.length !== 1) {
        return;
    };
    switch (char) {
        case "+":
        case "-":
        case "*":
        case "/":
            if (display !== "") {
                let value = parseFloat(display);
                if (!previous) {
                    previous = value;
                    operation = char;
                } else {
                    switch (operation) {
                        case "+":
                            previous = previous + value;
                            operation = char;
                            break;
                        case "-":
                            previous = previous - value;
                            operation = char;
                            break;
                        case "*":
                            previous = previous * value;
                            operation = char;
                            break;
                        case "/":
                            previous = previous / value;
                            operation = char;
                            break;
                    };
                };
                history = previous.toString() + char;
                let elm = document.getElementById("history");
                elm.innerText = history;
                display = "";
            };
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            let value = parseFloat(display);
            if (value === 0) {
                display = value.toString();
                return;
            };
            display += char;
            break;
    };
    let elm = document.getElementById("active");
    elm.innerText = display;
}

(function () {
    let button;
    button = document.getElementById("0");
    button.addEventListener("click", function () {
        AddDigit("0");
    });
    button = document.getElementById("1");
    button.addEventListener("click", function () {
        AddDigit("1");
    });
    button = document.getElementById("2");
    button.addEventListener("click", function () {
        AddDigit("2");
    });
    button = document.getElementById("3");
    button.addEventListener("click", function () {
        AddDigit("3");
    });
    button = document.getElementById("4");
    button.addEventListener("click", function () {
        AddDigit("4");
    });
    button = document.getElementById("5");
    button.addEventListener("click", function () {
        AddDigit("5");
    });
    button = document.getElementById("6");
    button.addEventListener("click", function () {
        AddDigit("6");
    });
    button = document.getElementById("7");
    button.addEventListener("click", function () {
        AddDigit("7");
    });
    button = document.getElementById("8");
    button.addEventListener("click", function () {
        AddDigit("8");
    });
    button = document.getElementById("9");
    button.addEventListener("click", function () {
        AddDigit("9");
    });
    button = document.getElementById("plus");
    button.addEventListener("click", function () {
        AddDigit("+");
    });
    button = document.getElementById("minus");
    button.addEventListener("click", function () {
        AddDigit("-");
    });
    button = document.getElementById("multiply");
    button.addEventListener("click", function () {
        AddDigit("*");
    });
    button = document.getElementById("divide");
    button.addEventListener("click", function () {
        AddDigit("/");
    });
})();