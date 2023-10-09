// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

// 双指针

const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b);
    // 初始化一个最小值
    let min = Infinity;
    const len = nums.length;
    for (let i = 0; i < len-2; i++) {
        // 定义左右指针
        let [left, right] = [i + 1, len - 1];
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            // 如果当前和更接近，更新最小值
            if (Math.abs(sum - target) < Math.abs(min - target)) {
                min = sum;
            }
            // 根据sum和target的关系，移动指针
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return min;
};
