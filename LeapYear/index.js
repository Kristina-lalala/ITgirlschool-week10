const check = () => {
    const year = document.getElementById("year").value;
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                alert("Високосный");
            }
            alert("Невисокосный");
        }
        else {
            alert("Високосный");
        }
    }
    else {
        alert("Невисокосный");
    }
}

