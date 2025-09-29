const display = document.getElementById("user-input");

// Add number click handlers
document.querySelectorAll(".num").forEach(btn => {
    btn.addEventListener("click", e => {
        const val = e.target.innerText;
        if (display.innerText === "0") {
            display.innerText = val;
        } else {
            display.innerText += val;
        }
    });
});

// Add operation / other (AC, DEL, %, =)
document.querySelectorAll(".operation").forEach(btn => {
    btn.addEventListener("click", e => {
        const op = e.target.innerText;
        const current = display.innerText;
        const lastChar = current.charAt(current.length - 1);

        switch (op) {
            case "AC":
                display.innerText = "0";
                break;
            case "DEL":
                if (current.length <= 1) {
                    display.innerText = "0";
                } else {
                    display.innerText = current.slice(0, -1);
                }
                break;
            case "%":
                // convert to percent
                let num = parseFloat(current);
                if (!isNaN(num)) {
                    display.innerText = (num / 100).toString();
                }
                break;
            case "=":
                // only evaluate if last char is a number
                if (!isNaN(lastChar)) {
                    try {
                        let result = eval(current);
                        display.innerText = result;
                    } catch (err) {
                        display.innerText = "Error";
                    }
                }
                break;
            default:
                // it's +, -, *, /
                if (!isNaN(lastChar)) {
                    display.innerText += op;
                }
                break;
        }
    });
});
