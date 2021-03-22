function genarateMatrix(size,min,max){
    let matrix = [];
    for (let i=0;i<size;i++){
        let arr =[];
        for (let j=0;j<size;j++){
            arr[j]=Math.floor(Math.random()*(max-min+1)+min);
        }
        matrix.push(arr);
    }
    return matrix;
}
function totalEvenInMatrix(matrix) {
    let total = 0;
    for (let i =0; i<matrix.length; i++) {
        for(let j =0; j<matrix[i].length; j++) {
            if(isEven(matrix[i][j])) {
                total+= matrix[i][j];
            }
        }
    }
    return total;
}
function isEven(number){
    return number %2 ==0;
    // return (number%2 ==0)? true : false;
    // if(number%2==0){
    //     return true;
    // } else {
    //     return false;
    // }
}

function totalMainCross(matrix) {
    let total = 0;
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix.length; j++) {
            if (i == j) {
                total = total + matrix[i][j]; 
            }
        }
    }
    return total;
}
function totalMainCross (matrix){
    let total =0
    for( let i = 0; i < matrix.length;i++){
        total += matrix[i][i];
    }
    return total;
}
function totalSecondCross (matrix){
    let total =0
    for (let i=matrix.length-1;i>=0;i--){
        total+=matrix[i][matrix.length-i-1];
    }
    return total;
}
