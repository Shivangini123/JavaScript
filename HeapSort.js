
function heapify(m, i) {
    let right, left, largest = i;
    right = 2 * i + 1;
    left = right+ 1;
    let temp;
    if (right < m && a[right] > a[largest]) {
        largest = right;
    }
    if (left < m && a[left] > a[largest]) {
        largest = left;
    }
    if (largest != i) {
        temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;
        heapify(m, largest);
    }
}

function BuildHeap(m) {
    let i, temp;
    for (i = Math.floor(m / 2 - 1); i >= 0; i--)
        heapify(m, i);
}

function HeapSort(m) {
    BuildHeap(m);
    for (let i = m - 1; i > 0; i--) {
        let temp;
        temp = a[0];
        a[0] = a[i];
        a[i] = temp;
        heapify(i, 0);
    }
}

a = [1, 6, 4, 16, 2, 9, 0, 595, 99];
console.log("Array is :" + a);
HeapSort(a.length);
console.log("Sorted array is :" + a);
