export const arrNumSum = (nums, target) =>{
     let index = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i +1; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        index.push(i, j);
      }
    }
  }
  return index;
    

}


/*
Given an numsay of integers  and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input:  = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because [0] + [1] == 9, we return [0, 1].

Input:  = [3,3], target = 6
Output: [0,1]

*/