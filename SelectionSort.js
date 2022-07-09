<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selection Sort</title>
</head>
<body>
    <h2>Selection Sort</h2>
</body>
<script>
    function Selection(arr,n){
        for(let i=0;i<n-1;i++){
            let min1 = i;
            for(let j=i+1;j<n;j++){
                if(arr[min1]>arr[j]){
                    min1 = j;
                }
            }
            let temp = arr[min1];
            arr[min1] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    let arr = [8,20,16,1,19,5,8,12,10];
    let n = arr.length;
    console.log("The Selection Sort is ");
    console.log(Selection(arr,n));
</script>
</html>
