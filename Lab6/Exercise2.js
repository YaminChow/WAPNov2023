function foo(x) {
    let m;
    console.log(x, y);
    if (x > 5) {
        var y = 5; m = x + y;
    } else {
        let z = 10; m = z;
        // const i = function bar(){
        //     console.log('baar');
        // }

        function bar(){
            console.log('bar');
        }
        bar();// get bar
    }
    bar();// error undefined
    x = m;
    console.log(x, y);
}
var x = 10;
foo(3);
console.log(x);
