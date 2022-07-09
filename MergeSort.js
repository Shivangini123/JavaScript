function Merge(left,right,mid){
    let left_size=mid-left+1;
    let Left=new Array(left_size+1);

    let right_size=right-mid;
    let Right=new Array(right_size+1);

    for(let i=0;i<left_size;i++){
        Left[i]=arr[i+left];
    }

    for(let i=0;i<right_size;i++){
        Right[i]=arr[i+mid+1];
    }

    Left[left_size]=Right[right_size]=Number.MAX_SAFE_INTEGER;
    left_index=0;
    right_index=0;

    for(let i=left;i<=right;i++)
	{
		if(Left[left_index]<=Right[right_index])
		{
			arr[i]=Left[left_index];
			left_index++;	
		}
		else{
			arr[i]=Right[right_index];
			right_index++;
		}
	}
}

function MergeSort(left,right){
    let mid=Math.floor((left+right)/2);
    if(left==right)
		return;
    MergeSort(left,mid);
    MergeSort(mid+1,right);
    Merge(left,right,mid);
}


let arr=[13,64,78,65,85,97,57,20,3,109];
console.log("Array is :"+arr);
MergeSort(0,arr.length-1);
console.log("Sorted array is :"+arr);
