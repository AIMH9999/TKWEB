class TaiKhoanNganHang {
  constructor() {
    this.so_du_tk = 0;
  }

  guiTien(soTien) {
    this.so_du_tk += soTien; // Thay đổi += để cộng số tiền gửi vào số dư hiện có
  }

  rutTien(soTien) {
    this.so_du_tk -= soTien; // Thay đổi -= để trừ số tiền rút khỏi số dư hiện có
  }

  kiemTraSoDu() {
    return this.so_du_tk; // Không cần phải tính toán lại số dư từ số tiền gửi và số tiền rút
  }
}

// Ví dụ sử dụng
const taiKhoan = new TaiKhoanNganHang();
taiKhoan.guiTien(1000);
taiKhoan.rutTien(200);
console.log(taiKhoan.kiemTraSoDu()); // Kết quả: 800
