function split(wholeArr) {
    var midpoint = Math.floor((wholeArr.length -1) / 2);
    var firstHalf = wholeArr.slice(0, midpoint);
    var secHalf = wholeArr.slice(midpoint);
    return [firstHalf, secHalf];
}

function merge(arr1, arr2) {
    var merged = [];
   var totalLength = arr1.length + arr2.length;

   while(merged.length < totalLength) {
       if(arr1[0] < arr2[0]) {
           merged.push(arr1.shift());
       } else {
           merged.push(arr2.shift());
       }
   }
   return merged;
}

