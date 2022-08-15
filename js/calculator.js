let history = "";
let display = "";
let previous = null;
let operation = "";
let current = 0;

function RemoveDigit() {
    if (display === "") {
        return;
    };
    display = display.slice(0, -1);
    UpdateDisplay();
}

function Calculate() {
    if (display === "") {
        return;
    };
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
}

function AddDigit(char) {
    if (typeof char !== "string" || char.length !== 1) {
        return;
    };
    switch (char) {
        case "+":
        case "-":
        case "*":
        case "/":
            Calculate();
            UpdateHistory();
            display = "";
            UpdateDisplay();
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
    UpdateDisplay();
}

function UpdateDisplay() {
    let elm = document.getElementById("active");
    elm.innerText = display;
}

function UpdateHistory() {
    let elm = document.getElementById("history");
    elm.innerText = history;
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
    button = document.getElementById("backspace");
    button.addEventListener("click", function () {
        RemoveDigit();
    });
    button = document.getElementById("equals");
    button.addEventListener("click", function () {
        Equals();
    });
    document.addEventListener("keydown", function (event) {
        if (event.isComposing || event.keyCode === 229) {
            return;
        };
        if (event.keyCode >= 96 && event.keyCode <= 105) {
            AddDigit((event.keyCode - 96).toString());
            return;
        };
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            AddDigit((event.keyCode - 48).toString());
            return;
        };
        if (event.keyCode === 106 || (event.shiftKey && event.keyCode === 56)) {
            AddDigit("*");
            return;
        };
        if (event.keyCode === 107 || (event.shiftKey && event.keyCode === 187)) {
            AddDigit("+");
            return;
        };
        if (event.keyCode === 109 || event.keyCode === 189) {
            AddDigit("-");
            return;
        };
        if (event.keyCode === 110) {
            AddDigit(".");
            return;
        };
        if (event.keyCode === 111 || event.keyCode === 191) {
            AddDigit("/");
            return;
        };
        if (event.keyCode === 187) {
            Equals();
            return;
        };
        if (event.keyCode === 8) {
            RemoveDigit();
            return;
        };
        if (event.keyCode === 27) {
            Clear();
            return;
        };
    });
})();