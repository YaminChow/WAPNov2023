const x = 10;
function b(){
    let x = 1;
    function a(x){
        console.log(x);
        let y =3;
        x =20;
    }
    return a;
}
let a = function (x){
    console.log(x);
}
const g = b(1);
g(2);


const obj ={
    width: 2,
    length: 3,
    calcVolume: function(height){
        console.log(this.width*this.length*height) ;
    }
}
setTimeout(()=>obj.calcVolume(10),1000);
setTimeout(obj.calcVolume.bind(obj,10),1000);
setTimeout(()=>obj.calcVolume.call(obj,10),1000);
setTimeout(()=>obj.calcVolume.apply(obj,[10]),1000);


