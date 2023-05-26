
function timGiaTriLonNhat(a) {
  let max = a[0];
  for (let i = 1; i < 10; i++) {
    if (max < a[i]){
      max = a[i];
    }
      
  }
  return max;
}
// Ví dụ sử dụng
console.log(timGiaTriLonNhat([5, 8, 3, 2, 9])); // Kết quả: 9

