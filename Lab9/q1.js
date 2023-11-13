class LinkedList{
    constructor(val){
        this.value = val;
        this.next = null;
    }
    add(num){
        if(this.next === undefined || this.next ===null){
            this.next = new LinkedList(num);
        }
        else{
            this.next.add(num);
        }
    }

    print(){
        console.log(this.value);
        if(this.next){
            this.next.print();
        }
    }
    remove(val,curr){
        if(this.value === val){
            curr.next = this.next;   
        }
        else{
            if(this.next){
                this.next.remove(val,this);
            }
        }
    }
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(4);
linkedlist.add(5)
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(1);
linkedlist.print(); 