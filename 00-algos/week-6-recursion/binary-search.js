/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(log n) logarithmic due to divide and conquer approach.
 * - Space: O(log n) logarithmic due to the call stack.
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @param {number} leftIdx The left index of the current slice of the array
 *    that is being searched.
 * @param {number} rightIdx The right index of the current slice of the array
 *    that is being searched.
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(
  sortedNums,
  searchNum,
  leftIdx = 0,
  rightIdx = sortedNums.length - 1
) {
  if (leftIdx > rightIdx) {
    return false;
  }

  const midIdx = Math.floor((rightIdx + leftIdx) / 2);

  if (sortedNums[midIdx] === searchNum) {
    return true;
  }

  if (searchNum < sortedNums[midIdx]) {
    return binarySearch(sortedNums, searchNum, 0, midIdx - 1);
  } else {
    return binarySearch(sortedNums, searchNum, midIdx + 1, rightIdx);
  }
}
