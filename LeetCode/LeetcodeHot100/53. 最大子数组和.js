var maxSubArray = function (nums) {
  const n = nums.length;
  const dp = new Array(n);

  dp[0] = nums[0];
  let res=dp[0];
  for (let i = 1; i < nums.length; i++) {
      dp[i]=Math.max(dp[i-1]+nums[i],nums[i]);
      
      res=dp[i]>res?dp[i]:res;
  }
  // let res = -Infinity;
  // for (let i = 0; i < n; i++) {
  //     res = Math.max(res, dp[i]);
  // }
  // let res=dp.reduce((pre,cur)=>pre>cur?pre:cur)
  return res;
};