function LinkedList(val){
    this.value = val;
    this.next = null;
    
}
LinkedList.prototype.Add= function(num){
    //console.log('family','next',this.next,num);
    if(this.next === undefined || this.next ===null){
       // console.log('num',num);
        this.next = new LinkedList(num);
    }
    else{       
        //console.log('add',num); 
        this.next.Add(num);
    }    
}

LinkedList.prototype.print = function(){
    console.log(this.value);
    if(this.next)
        this.next.print();
}

LinkedList.prototype.remove = function(val,arr){
    if(this.value===val){
        arr.next = this.next;
    }else{
        if(this.next)
            this.next.remove(val,this);
    }   
}

let linkList =new LinkedList();
linkList.Add(1);
linkList.Add(2);
linkList.Add(3);

linkList.print();

linkList.remove(2);
linkList.print();