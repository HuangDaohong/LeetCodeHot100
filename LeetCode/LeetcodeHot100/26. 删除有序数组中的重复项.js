let removeDuplicates = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};

var removeDuplicates2 = function (nums) {
	let [slow, fast] = [0, 0];
	while (fast < nums.length) {
		if (nums[fast] !== nums[slow]) {
			slow++;
			nums[slow] = nums[fast];
		}
		fast++;
	}
	return slow + 1;
};

removeDuplicates([1, 1, 2, 2, 2, 3]);
console.log(removeDuplicates([]));