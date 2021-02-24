/**
 *  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
    你可以按任意顺序返回答案。

    示例 1：
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

    示例 2：
    输入：nums = [3,2,4], target = 6
    输出：[1,2]

    示例 3：
    输入：nums = [3,3], target = 6
    输出：[0,1]

    提示：
    2 <= nums.length <= 103
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    只会存在一个有效答案

    class Solution {
        public int[] twoSum(int[] nums, int target) {
            int n = nums.length;
            for (int i = 0; i < n; ++i) {
                for (int j = i + 1; j < n; ++j) {
                    if (nums[i] + nums[j] == target) {
                        return new int[]{i, j};
                    }
                }
            }
            return new int[0];
        }
    }

    class Solution {
        public int[] twoSum(int[] nums, int target) {
            Map<Integer, Integer> hashtable = new HashMap<Integer, Integer>();
            for (int i = 0; i < nums.length; ++i) {
                if (hashtable.containsKey(target - nums[i])) {
                    return new int[]{hashtable.get(target - nums[i]), i};
                }
                hashtable.put(nums[i], i);
            }
            return new int[0];
        }
    }

 */


/**
 * 
 * @param {Array} arr 整数数组
 * @param {Number} target 整数目标值
 */
function twoSum(arr, target) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            } 
        }
    }
    throw Error(`该数组中没有两个元素的和为${target}`);
}

let res1 = twoSum([1, 2, 3, 4, 5], 6);
console.log(res1);


/**
 * 
 * @param {Array} arr 整数数组
 * @param {Number} target 整数目标值
 */
function twoSum2(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(target - arr[i])) {
            return [map.get(target - arr[i]), i];
        }
        map.set(arr[i], i);
    }
    throw Error(`该数组中没有两个元素的和为${target}`);
}

let res2 = twoSum2([1, 2, 3, 4, 5], 6);
console.log(res2);

//ps:上面可能会出现整数数组出现多个数值和为目标值的情况，可以用数组的方式把所有出现的结果存起来
