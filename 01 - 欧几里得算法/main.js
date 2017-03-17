/**
 *
 * @param {Number} a 表示一个数字
 * @param {Number} b 表示一个数字
 * @param return 最大公约数
 *
* */

// 这里不考虑 a < b 的情况
// 查看了很多解法，使用递归的解法是最好的，但是代码理解需要时间

function gcm(a, b) {
  if(Number.isNaN(a) || Number.isNaN(b)) return;

  return b ? gcm(b, a % b) : a;
}

console.log(gcm(119, 544));  // 17
console.log(gcm(554646, 6616556));  // 2