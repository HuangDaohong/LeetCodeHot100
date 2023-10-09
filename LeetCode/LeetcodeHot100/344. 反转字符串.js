const reverseString = s => {
    let [left, right] = [0, s.length - 1];
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};