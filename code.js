function fib(n) {
    if(n == 0){
        ray = [0];
        return ray;
    }
    arr = [0,1];
    return fibadd(arr, n);
}

function fibadd(arr, n) {
    if(n <= 1){
        return arr;
    }
    arr[arr.length] = arr[arr.length-2]+arr[arr.length-1]
    fibadd(arr, n-1)
    return arr;
}