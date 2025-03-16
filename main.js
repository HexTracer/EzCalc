function appendtodisplay(value) {
    document.getElementById("display").value += value;
}

function clear_display() {
    document.getElementById("display").value = "";
}

function delete_last() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calc_result() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}