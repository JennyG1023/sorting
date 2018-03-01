function bubbleSort(arr) {
    var swap = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]) {
            var holdingEle = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = holdingEle;
            swap++;
        }
    }
    if(swap) {
        bubbleSort(arr);
    }
    return arr;
}

// function swapFunc(ele1, ele2) {
//     if(ele1 > ele2) {
//         var holdingEle = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = holdingEle;
//         swap++;
//     }
// }