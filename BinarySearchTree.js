class node{
    constructor(data){
        this.data=data;
        this.left=this.right=null;
    }
}

function Insert(root,data){
    if(root==null)
        return new node(data);
    else if(val<=root.data)
        root.left=Insert(root.left,data);
    else if(data>=root.data){
        root.right=Insert(root.right,data);
    }    
    else
        console.log("Duplicate key");
    return root;    
    }    

function FindMaxad(root){
    while(root.right!=null)
        root=root.right;
    return root;    
}

function Deletion(root,data){
    if(root==null)
        return null;
    else if(data>root.data)
        root.right=Deletion(root.right,data);
    else if(data<root.data)
        root.left=Deletion(root.right,data);
    else{
        if(root.right && root.left){
            let temp=FindMaxad(root.left);
            root.data=temp.data;
            root.left=Deletion(root.left,root.data);
        }
        else if(root.left==null){
            let temp=root;
            root=root.right;
            delete temp;
        }
        else if(root.right==null){
            let temp=root;
            root=root.left;
            delete temp;
        }
        else{
            delete root;
            root=null;
        }
    }   
    return root;         
}

function Search(root,data){
    if(root==null){
        console.log("Not found")
        return null;
    }
    else if(data<root.left.data)
        return Search(root.left,data);
    else if(data>root.right.data)
        return Search(root.right,data);
    else
        return root;    
}

function PreOrder(root){
    if(root==null)
        return;
    console.log(root.data);
    PreOrder(root.left);
    PreOrder(root.right);    
}

function InOrder(root){
    if(root==null)
        return;
    InOrder(root.left);
    console.log(root.data);
    InOrder(root.right);    
}

function PostOrder(root){
    if(root==null)
        return;
    PostOrder(root.left);
    PostOrder(root.right);
    console.log(root.data);    
}
    let root=new node(20);
    root=Insert(root,40);
    root = Insert(root, 78);
    root = Insert(root, 49);
    root = Insert(root, 23);

    root=Deletion(root,60);

    console.log("PreOrder is:");
    PreOrder(root);
    console.log("InOrder is:");
    InOrder(root);
    console.log("PostOrder is:");
    PostOrder(root);
