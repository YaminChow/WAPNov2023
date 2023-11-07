function printNumber(from, to) {
    let cur = from;

    const timer = setInterval(() => {
        if (cur <= to) {
            document.getElementById("Number").innerHTML = cur++;
        }
        else
            clearTimeout(timer);

        
    }, 1000);
}

//printNumber(1,10);