<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counting Sort</title>
</head>
<body>
    <h2>Counting Sort</h2>
</body>
<script>
    function countSort(arr){
        var max = Math.max.apply(Math, arr);
        var min = Math.min.apply(Math, arr);
    
        var range = max - min + 1;
        var count = Array.from({length: range}, (_, i) => 0);
        var output = Array.from({length: arr.length}, (_, i) => 0);
        for (i = 0; i < arr.length; i++) {
            count[arr[i] - min]++;
        }
    
        for (i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }
    
        for (i = arr.length - 1; i >= 0; i--) {
            output[count[arr[i] - min] - 1] = arr[i];
            count[arr[i] - min]--;
        }
    
        for (i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    }
    
    function display(arr){
        console.log("Sorted Array using Counting Sort is: ");
        for (i = 0; i < arr.length; i++){
            console.log(arr[i] + " ");
        }
    }
    
    var arr = [ 4, 11, 6, 2, 9, 1, 4 ];
    countSort(arr);
    display(arr);
</script>
</html>
