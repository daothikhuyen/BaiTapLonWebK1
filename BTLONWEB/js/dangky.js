
const username = document.querySelector(".name-register");
const password = document.querySelector(".password-register");
const passagain = document.querySelector(".passagain-register");
const btn = document.querySelector(".btnDK");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi...',
        text: 'Thông tin không được để trống!',
      });
    } else {
      if (password.value === passagain.value) {
        let listAccoutLogin = JSON.parse(localStorage.getItem("listAccout"));
        const user = {
          username: username.value,
          password: password.value,
        };
        localStorage.setItem("listAccout", JSON.stringify(user));
        Swal.fire({
          icon: 'success',
          title: 'Đăng kí thành công',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          // Chờ hiệu ứng kết thúc, sau đó chuyển hướng trang
          window.location.href = "../dangnhap.html";
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi...',
          text: 'Mật khẩu không trùng khớp!',
        });
        password.value = "";
        passagain.value = "";
      }
    }
  });
  
