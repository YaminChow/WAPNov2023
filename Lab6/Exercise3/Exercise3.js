function printNumber(from, to){
    let cur = from;

    const timer = setInterval(function (){
        console.log(cur);
        if(cur === to){
            clearInterval(timer);
        }
        cur++;
    },1000);
}

printNumber(1,10);