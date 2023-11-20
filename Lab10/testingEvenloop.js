setTimeout(() => {
    console.log('7');
});
setTimeout(() => {
    console.log('8');
    process.nextTick(() => {
        console.log('9');
        new Promise(resolve => resolve(4)).then((data) => {
            console.log('10');
            process.nextTick(() => {
                console.log('11');
            });
        });
    });
});
setTimeout(() => {
    console.log('12');
});

new Promise(resolve => resolve(1)).then((data) => {
    console.log('3');
});

new Promise(resolve => resolve(2)).then((data) => {
    console.log('4');
    process.nextTick(() => {//tricky all promise loop finished then go back to nexttick
        console.log('6');
    });
});

new Promise(resolve => resolve(3)).then((data) => {
    console.log('5');
});

process.nextTick(() => {
    console.log(1);
});

process.nextTick(() => {
    console.log(2);
});