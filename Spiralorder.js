let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
let N = 3; // number of rows
let M = 4; // number of columns

function Spiralorder(N, M, matrix) {
  let top = 0;
  let left = 0;
  let bottom = N - 1;
  let right = M - 1;
  let count = 0;
  let output = [];
  while (count < N * M) {
    for (i = left; i <= right && count < N*M; i++) {
      output.push(matrix[top][i]);
      count++;
    }
    top++;
    for (var i = top; i <= bottom && count < N*M; i++) {
      output.push(matrix[i][right]);
      count++;
    }
    right--;
    for (var i = right; i >= left && count < N*M; i--) {
      output.push(matrix[bottom][i]);
      count++;
    }
    bottom--;
    for (var i = bottom; i >= top && count < N*M; i--) {
      output.push(matrix[i][left]);
      count++;
    }
    left++;
  }
  console.log(output.join(" "));
}

Spiralorder(N, M, matrix);
