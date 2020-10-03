
exports.min = function min (array) {

  if (array == undefined) {
    return 0;
  } else if (array.length !== 0){
    return Math.min(...array);
    /*
   let result=0;
    for (i = 0; i < array.length; i++){
        result = result < array[i] ? result : array[i];
    }
    return result;
    */
    } else {
    return 0;
  } 

}

exports.max = function max (array) {
  if (array == undefined) {
    return 0;
  } else if (array.length !== 0){
    return Math.max(...array);
   /* let result=0;
    for (i = 0; i < array.length; i++){
        result = result > array[i] ? result : array[i];
    }
    return result;
    */
  } else {
    return 0;
  }

}

exports.avg = function avg (array) {
  if (array == undefined) {
    return 0;
  } else if (array.length !== 0){
    let result=0;
    for (i = 0; i < array.length; i++){
        result += array[i];
    }
    return result/array.length;

  } else {
  return 0;
}
}
