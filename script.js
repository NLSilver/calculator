const expressionInput = document.getElementById("expression");
const display = document.getElementById("display");

function press(val) {
    const last = expressionInput.value.slice(-1);
    if ("+-*/".includes(last) && "+-*/".includes(val)) return;
    expressionInput.value += val;
}

document.getElementById("btn_clr").onclick = () => {
    expressionInput.value = "";
    display.value = "";
};

document.getElementById("btn_eql").onclick = () => {
    try {
        if (expressionInput.value.trim() === "") return;
        display.value = eval(expressionInput.value);
    } catch {
        display.value = "Error";
    }
};

document.getElementById("btn_0").onclick = () => press("0");
document.getElementById("btn_1").onclick = () => press("1");
document.getElementById("btn_2").onclick = () => press("2");
document.getElementById("btn_3").onclick = () => press("3");
document.getElementById("btn_4").onclick = () => press("4");
document.getElementById("btn_5").onclick = () => press("5");
document.getElementById("btn_6").onclick = () => press("6");
document.getElementById("btn_7").onclick = () => press("7");
document.getElementById("btn_8").onclick = () => press("8");
document.getElementById("btn_9").onclick = () => press("9");

document.getElementById("btn_add").onclick = () => press("+");
document.getElementById("btn_sub").onclick = () => press("-");
document.getElementById("btn_mul").onclick = () => press("*");
document.getElementById("btn_div").onclick = () => press("/");
document.getElementById("btn_dec").onclick = () => press(".");

