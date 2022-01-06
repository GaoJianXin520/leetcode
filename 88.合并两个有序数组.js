/*
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

 

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
示例 3：

输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
 

提示：

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge1 = function(nums1, m, nums2, n) {
    let temp = [];
    for (let i = 0, idx1 = 0, idx2 = 0; i < m + n; i++) {
        if (idx1 >= m) {
            temp[i] = nums2[idx2];
            idx2++;
        } else if (idx2 >= n) {
            temp[i] = nums1[idx1];
            idx1++;
        } else if (nums1[idx1] < nums2[idx2]) {
            temp[i] = nums1[idx1];
            idx1++;
        } else {
            temp[i] = nums2[idx2];
            idx2++;
        }
    }

    for (let i = 0; i < m + n; i++) {
        nums1[i] = temp[i];
    }
}

let merge2 = function(nums1, m, nums2, n) {
    let k = m + n;
    for (let index = k - 1, nums1Index = m - 1, nums2Index = n -1; index >= 0; index--) {
        if (nums1Index < 0) { //num1已经取完，完全取nums2的值即可
            nums1[index] = num2[num2sIndex--];
        } else if (nums2Index < 0) { //num2已经取完，完全取nums1的值即可
            break;
        } else if (nums1[nums1Index] > nums2[nums2Index]) { //nums1的元素值大于num2，取nums1值
            nums1[index] = nums1[nums1Index--];
        } else { //nums2的元素值大于num1，取nums2值
            nums1[index] = nums2[nums2Index--];
        }
    }
};

var merge3 = function(nums1, m, nums2, n) {
    while (n > 0) {
        if (m < 1 || nums2[n - 1] > nums1[m - 1]) {
            nums1[m + n - 1] = nums2[--n]
        } else {
            nums1[m + n - 1] = nums1[--m]
        }

        //nums1[m + n - 1] = m < 1 || nums2[n - 1] > nums1[m - 1] ? nums2[--n] : nums1[--m];
    }
};
