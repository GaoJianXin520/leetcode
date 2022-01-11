/*
合并两个有序链表
Category	Difficulty	Likes	Dislikes
algorithms	Easy (66.68%)	2136	-
Tags
Companies
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
Discussion | Solution

Code Now
*/

/** 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
*/
var mergeTwoLists = function(list1, list2) {

};

var mergeTwoLists = function(l1, l2) {
    //递归终止 分隔到不能分割 也就是两个链表有一个的nxet不存在了 那就没法分割问题了 只能返回
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {//当前节点谁小，就让这个较小的节点的next和另一个链表继续递归合并
        l1.next = mergeTwoLists(l1.next, l2);//分隔成合并l1.next, l2的子问题
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
  