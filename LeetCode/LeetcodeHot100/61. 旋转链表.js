var rotateRight = function (head, k) {

  if (!head || k === 0) {
      return head;
  }
  // 计算链表的长度
  let length = 0;
  let p = head;
  while (p) {
      p = p.next;
      length++;
  }
  // console.log(length)
  // 取模以确保 k 在有效范围内
  k = k % length;
  if (k === 0) {
      return head;
  }
  // 使用快慢指针找到新的头节点
  let [slow, fast] = [head, head];
  while (k--) {
      fast = fast.next;
  }

  while (fast.next) {
      fast = fast.next;
      slow = slow.next;
  }
  fast.next = head;
  head = slow.next
  slow.next = null;
  return head;
};

/*
k<5 的情况：实际移动的位数，就是 k 本身。
k>5 的情况：
k 是 5 的整数倍：链表不会发生位置变化。
k 不是 5 的整数倍：实际移动位数是 k%5的值。

流程如下：先形成闭环，然后从 k 处截断，返回新的链表即可。
1 计算链表的长度
2 链表最后一位值的 nextnextnext 指向原链表首位数字，形成闭环
3 创建一个变量，接收从 k 处截断后的链表，假设 k=2，我们就会从 3这里处截断，然后 3 的 next 指向 null
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

 */
var rotateRight2 = function(head, k) {
  if(!head || !head.next || !k) return head;
  let len = 1, cur = head;
  while(cur.next){
      cur = cur.next;
      len++;
  }
  let move = len - k % len;
  cur.next = head;
  while(move){
      cur = cur.next;
      move--;
  }
  let ans = cur.next;
  cur.next = null;
  return ans;
};

// 测试
class ListNode {
  constructor(val) {
      this.val = val
      this.next = null
  }
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

for (let p = rotateRight(head, 2); p; p = p.next) {
  console.log(p.val)// 4 5 1 2 3
}