// user.username và user.password ở phần đăng kí và đăng nhập phải giống nhau
const usernameDN = document.querySelector(".username-login");
const passwordDN = document.querySelector(".password-login");
const btnDN = document.querySelector(".btnDN");

btnDN.addEventListener("click",(e)=>{
    e.preventDefault();  
    if(usernameDN.value === ""|| passwordDN.value===""){
        Swal.fire({
            icon: 'error',
            title: 'Lỗi...',
            text: 'Thông tin không được để trống!',
          })
    }
    else{
        const user = JSON.parse(localStorage.getItem("listAccout"));
        if(
            user.username === usernameDN.value && 
            user.password === passwordDN.value
            // username1 phải cùng với username1 trên đăng kí
        ){
            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                // Chờ hiệu ứng kết thúc, sau đó chuyển hướng trang
                window.location.href = "../trangchu.html";
                localStorage.setItem("isLogin", true);
              });
            
            

        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Lỗi...',
                text: 'Tài khoản hoặc mật khẩu không hợp lệ!',
              })
            usernameDN.value = ""; // Xóa dữ liệu trong ô usernameDN
            passwordDN.value = ""; // Xóa dữ liệu trong ô passwordDN
        }
    }
});
