
class TaiKhoanNganHang {
  constructor() {
    this.so_du_tk = 0;
  }
  guiTien(soTien) {
    this.guiTien = this.so_du_tk + soTien;
  }
  rutTien(soTien) {
    this.rutTien = soTien;
  }
  kiemTraSoDu() {
    return (this.so_du_tk = this.guiTien - this.rutTien);
  }

}
// Ví dụ sử dụng
const taiKhoan = new TaiKhoanNganHang();
taiKhoan.guiTien(1000);
taiKhoan.rutTien(200);
console.log(taiKhoan.kiemTraSoDu()); // Kết quả: 800
