function findpivot(low,up){
    let i,j,pivot;
	pivot=a[low];
	i=low+1;
	j=up;
	while(i<=j)
	{
		while((pivot>a[i])&&(i<up))
		i++;
		while(a[j]>pivot)
		j--;
		if(i<j)
		{
			let temp=a[i];
			a[i]=a[j];
			a[j]=temp;
			i++;
			j--;
		}
		else
		i++;
	}
	a[low]=a[j];
	a[j]=pivot;
	return j;

}

function QuickSort(low,up){
    let pivloc;
		if(low>=up)
			return;
			pivloc=findpivot(low,up);
			QuickSort(low,pivloc-1);
			QuickSort(pivloc+1,up);

}
let a = [15, 74, 56, 44, 59, 94, 63, 11, 2, 115];
console.log("Array is :" + a);
QuickSort(0, a.length - 1);
console.log("Sorted array is :" + a);
