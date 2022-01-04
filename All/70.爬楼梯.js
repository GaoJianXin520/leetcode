/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
*/

let  climbStairs1 = function(n) {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    if (n > 2) {
        return fn(n - 1) + fn(n - 2);
    }
}

var climbStairs2 = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let result = 0;
    let pre = 2;
    let prePre = 1;
    for (let i = 3; i <= n; ++i) {
        result = pre + prePre;
        prePre = pre;
        pre = result;
    }
    return result;
};

var climbStairs3 = function(n) {
    const memo = [];
    memo[1] = 1;
    memo[2] = 2;
    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 2] + memo[i - 1];//所以到第n阶台阶可以从第n-2或n-1上来
    }
    return memo[n];
};

//状态压缩
var climbStairs4 = (n) => {
    let prev = 1;
    let cur = 1;
    for (let i = 2; i < n + 1; i++) {
        [prev, cur] = [cur, prev + cur]
        // const temp = cur;   // 暂存上一次的cur
        // cur = prev + cur;   // 当前的cur = 上上次cur + 上一次cur
        // prev = temp;        // prev 更新为 上一次的cur
    }
    return cur;
}

let res = fn(10);
console.log(res);