/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(nums, start, end) {
  if (start >= end) return;

  const pivot = nums[start];
  let i = start+1;
  let j = end;
  while (i <= j) {
    if (nums[i] > pivot && nums[j] < pivot) swap(nums, i++, j--);

    if (nums[i] <= pivot) i++;

    if (nums[j] > pivot) j--;
  }
  swap(nums, start, j);
  quickSort(nums, start, j - 1);
  quickSort(nums, j + 1, end);
}

function swap(nums, a, b) {
  let tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
}

const arr = [5, 2, 3, 1];
console.log(sortArray(arr));
