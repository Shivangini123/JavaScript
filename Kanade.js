<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kadane's algorithm</title>
</head>
<body>
    <h2>Kadane's algorithm</h2>
    <script>
        var maxSubArray = function(nums) {
        if (nums.length == 0) 
            return 0;
        let max = nums[0];
        for (let i=1; i<nums.length; i++) {
            if (nums[i-1] > 0){
                nums[i] += nums[i-1];
            } 
            max = Math.max(nums[i], max);
        }
        return max;
    };

    var array = [-1, -4, 4, -2, 1, 7, -3];
    console.log("Max Sub-Array Sum is: ", maxSubArray(array,))
    </script>
</body>
</html>
