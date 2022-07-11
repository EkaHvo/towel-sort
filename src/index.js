
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix==0 || !matrix){
    return [];
  }

  let newArray = matrix[0];

  for(let i = 1; i<matrix.length; i++){
    let totallArr;
    if (i % 2 != 0){
      let reversedArr = matrix[i].reverse();
      totallArr = newArray.concat(reversedArr);
    }else{
      totallArr = newArray.concat(matrix[i]);
    }
    newArray = totallArr;
  }
  return newArray;
}
