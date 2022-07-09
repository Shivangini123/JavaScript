function InsertionSort(a, n) {
    let j, k, temp;
    for (j = 1; j <= n; j++) {
        temp = a[j];
        for (k = j - 1; k >= 0 && temp < a[k]; k--)
            a[k + 1] = a[k];
        a[k + 1] = temp;
    }
}
a = [8, 1, 7, 14, 9, 0, 3, 208];
console.log("Array is :" + a);
InsertionSort(a, a.length - 1);
console.log("Sorted array is :" + a);
