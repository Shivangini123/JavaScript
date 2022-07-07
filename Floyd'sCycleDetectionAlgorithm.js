class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.start=null;
    }

    ViewList(){
        if(this.start==null)
            console.log("List is Empty");

        else{
            let temp=this.start;
            while(temp!=null){
                console.log(temp.data);
                temp=temp.next;
            }
        }    
    }

    DeleteFirst(){
        if(this.start==null)
            console.log("List is empty");
        else
            this.start=this.start.next;   
    }

    DetectLoop(){
        let SlowPointer=this.start;
        let FastPointer=this.start;

        while(SlowPointer != null
            && FastPointer != null
            && FastPointer.next != null){
                SlowPointer=SlowPointer.next;
                FastPointer=FastPointer.next.next;

                if(SlowPointer==FastPointer)
                    return 1;
            }
            return 0;
    }

    Insert(value){
        let NewNode=new Node(value);
        if(this.start==null){
            this.start=NewNode;
        }
        else{
            let temp=this.start;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=NewNode;
        }
    }
}

    Mylist=new LinkedList();
    Mylist.Insert(1);
    Mylist.Insert(2);
    Mylist.Insert(3);
    Mylist.Insert(4);

    let temp=Mylist.start;

    while(temp.next!=null){
        temp=temp.next;
    }
    temp.next=Mylist.start;
    if(Mylist.DetectLoop()){
        console.log("Loop Exist in the linked list"); 
    }
    else
        console.log("Loop does'nt exist in the linked list");
