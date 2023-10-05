// https://leetcode.cn/problems/spiral-matrix/solutions/275716/shou-hui-tu-jie-liang-chong-bian-li-de-ce-lue-kan-/?envType=featured-list&envId=ex0k24j?envType=featured-list&envId=ex0k24j
var spiralOrder2 = function (matrix) {
    if (matrix.length == 0) return []
    const res = []
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    const size = matrix.length * matrix[0].length
    while (res.length !== size) { // 仍未遍历结束
      for (let i = left; i <= right; i++) res.push(matrix[top][i])
      top++
      for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
      right--
      if (res.length === size) break // 遍历结束
      for (let i = right; i >= left; i--)  res.push(matrix[bottom][i])
      bottom--
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
      left++
    }
    return res
  };
  

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder3 = function (matrix) {
    const res = [];
    // m行n列
    let m = matrix.length, n = matrix[0].length;
    let [up, low, left, right] = [0, m - 1, 0, n - 1];
    // res.length == m * n 则遍历完整个数组
    while (res.length < m * n) {
        if (up <= low) {
            // 在顶部从左向右遍历
            for (let j = left; j <= right; j++) {
                res.push(matrix[up][j]);
            }
            // 上边界下移
            up++;
        }

        if (left <= right) {
            // 在右侧从上向下遍历
            for (let i = up; i <= low; i++) {
                res.push(matrix[i][right]);
            }
            // 右边界左移
            right--;
        }

        if (up <= low) {
            // 在底部从右向左遍历
            for (let j = right; j >= left; j--) {
                res.push(matrix[low][j]);
            }
            // 下边界上移
            low--;
        }

        if (left <= right) {
            // 在左侧从下向上遍历
            for (var i = low; i >= up; i--) {
                res.push(matrix[i][left]);
            }
            // 左边界右移
            left++;
        }
    }
    return res;
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder2(matrix));