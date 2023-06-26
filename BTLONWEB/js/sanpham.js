let isLogin = JSON.parse(localStorage.getItem("isLogin"));

const btnLogin = document.querySelector('.btn-login');
const btnLogout = document.querySelector('.btn-logout');
const btnRegister = document.querySelector('.btn-register');
const icCart  = document.querySelector('.ic-cart');

if(isLogin) {
    btnLogin.classList.add("hidden");
    btnRegister.classList.add("hidden");
} else {
    icCart.classList.add("hidden");
    btnLogout.classList.add("hidden");
}

function handleLogout() {
    localStorage.setItem("isLogin", false);
}

let listProduct = [
    {
        id: 0,
        img: "/img_sinhnhat/sinhnhat_dieutoiyeu.jpg",
        title: "Bánh Sinh Nhật - Điều Tôi Yêu[Tặng Người Yêu]",
        price: "300.000đ",
        
    },

    {
        id: 1,
        img: "/img_sinhnhat/sinhnhat-nucuoixinh.jpg",
        title: "Bánh Kem Sinh Nhật - Nụ Cười Xinh[Sản Phẩm Mới]",
        price: "770.000đ",
        
    },

    {
        id: 2,
        img: "/img_sinhnhat/sinhnhat-loveyou3000jpg.jpg",
        title: "Bánh Kem Sinh Nhật - Love You 3000[Tặng Người Yêu]",
        price: "695.000đ",
        
    },

    {
        id: 3,
        img: "/img_sinhnhat/sinhnhat-canhayeucon.jpg",
        title: "Bánh Kem Sinh Nhật - Cả Nhà yêu Con[2 Tầng]",
        price: "2.000.000đ",
        
    },

    {
        id: 4,
        img: "/img_sinhnhat/chumeodoremon.jpg",
        title: "Bánh Kem Sinh Nhật - Chú Mèo Doremon[Đặc Sắc]",
        price: "750.000đ",
        
    },

    {
        id: 5,
        img: "/img_sinhnhat/bay-dat-sinh-nhat.jpg",
        title: "Bánh Kem Sinh Nhật - Bày Đặt Sinh Nhật[Đặc Sắc]",
        price: "650.000đ",
        
    },

    {
        id: 6,
        img: "/img_sinhnhat/tinh-yeu-bat-diet.jpg",
        title: "Bánh Kem Sinh Nhật - Tình Yêu Bất Diệt[Tặng Người Yêu]",
        price: "695.000đ",
        
    },

    {
        id: 7,
        img: "/img_sinhnhat/sinhnhat-chaomungconyeu.jpg",
        title: "Bánh Kem Sinh Nhật - Chào Mừng Con Yêu[2 Tầng]",
        price: "2.000.000đ",
        
    },

    {
        id: 8,
        img: "/img_sinhnhat/tinh-yeu-cua-toi.jpg",
        title: "Bánh Kem Sinh Nhật - Tình Yêu Của Tôi[Tặng Người Yêu]",
        price: "690.000đ",
        
    },

    {
        id: 9,
        img: "/img_sinhnhat/ky-niem-tinh-yeu.jpg",
        title: "Bánh Kem Sinh Nhật - Kỷ Niệm Tình Yêu[Tặng Người Yêu]",
        price: "800.000đ",
        
    },

    {
        id: 10,
        img: "/img_sinhnhat/danh-tron-cho em.jpg",
        title: "Bánh Kem Sinh Nhật - Dành Trọn Cho Em[Tặng Người Yêu]",
        price: "690.000đ",
        
    },

    {
        id: 11,
        img: "/img_sinhnhat/loi-yeu-thuong.jpg",
        title: "Bánh Kem Sinh Nhật - Lời Yêu Thương[Tặng Người Yêu]",
        price: "600.000đ",
        
    },
]
//cart Product
listProduct.forEach((value) => {
    let htmlProduct = `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                <a class="img-zoom" href="##">
                    <img class="w-100 h-auto"
                         data-bs-toggle="modal"
                         data-bs-target="#staticBackdrop"
                         onclick="viewDetail(${value.id})"
                        src="${value.img}"
                        alt="">
                </a>
                <a class="text-decoration-none"
                href="">
                    <h5 class="mt-3 text-dark fw-bolder"
                        style="font-family: 'Dancing Script', cursive;">${value.title}
                    </h5>
                </a>
                <h5 class="text-danger fw-bold my-3">${value.price}</h5>
                <button class="btn navbar-btn" onclick="addToCart(${value.id})">THÊM VÀO GIỎ HÀNG</button>
    `
    document.querySelector(".list-product").innerHTML += htmlProduct 
})

//detailProduct
function viewDetail(id) {
    listProduct.forEach((value) =>{
        if(value.id == id) {
            document.querySelector(".view-detail-product").innerHTML = "";
            let htmlProductView = `
                                <div class="product-container">
                                <div class="row">

                                    <div class="col-sm-6 col-md-6 mb-3">
                                        <img class="w-100"
                                            src="${value.img}"
                                            alt="cucgiay">
                                    </div>

                                    <div class="col-sm-12 col-md-6">
                                        <h4>${value.title}</h4>
                                        <b style="color: #b87b7b;" >${value.price}</b> <br>
                                        <span>Từ khóa:Bánh Sinh Nhật</span> <br> <br>
                                    </div>

                                    <div>
                                        <span>MÔ TẢ</span>
                                        <hr>
                                        <span>
                                            <h5>${value.title}</h5>
                                            <ul>
                                                <li>Bánh kem sinh nhật.</li>
                                                <li>Trang trí phong cách Hàn Quốc sang trọng, hiện đại.
                                                </li>
                                                <li>Hương vị ngọt ngào.</li>
                                                <li>Bánh kem đẹp, đơn giản, sang trọng, độc và lạ.</li>
                                            </ul>
                                        </span> <br> <br>
                                    </div>
                            </div>
                        </div>
            `
            document.querySelector(".view-detail-product").innerHTML += htmlProductView;
        }
    })
}

//render Product cart
let listCart = JSON.parse(localStorage.getItem("listCart"));

if (listCart) {
  listCart.forEach((value) => {
    let htmlProductInCart = `
                        <div class="box-product-cart">
                            <div class="img-product">
                                <img src="${value.img}"
                                     alt="">
                            </div>
                            <span class="title-product">
                                ${value.title}
                            </span>
                            <span class="price-product">
                                ${value.price}
                            </span>
                            <i class="bi bi-trash3-fill ic-del-cart"
                               onclick="handleDeleteProductInCart(${value.id})"></i>
                        </div>`
    document.querySelector('.cart-body').innerHTML = document.querySelector('.cart-body').innerHTML + htmlProductInCart
  })
}

function addToCart(index) {
    // biến tạm
    let productChoice;
  
    let checkIsset = false;
    listProduct.forEach((value) => {
      if (value.id == index) {
        productChoice = value;
      }
    })
  
    if (listCart) {
      listCart.forEach((value) => {
        if (value.id == index) {
          checkIsset = true
        }
      })
      if (!checkIsset) {
        listCart.push(productChoice)
      }
    } else {
      listCart = [productChoice]
    }
  
    localStorage.setItem("listCart", JSON.stringify(listCart));
  
    //load lại dữ liệu cho cart
    document.querySelector('.cart-body').innerHTML = "";
    listCart.forEach((value) => {
      let htmlProductInCart = `
                        <div class="box-product-cart">
                              <div class="img-product">
                                  <img src="${value.img}"
                                       alt="">
                              </div>
                              <span class="title-product">
                                  ${value.title}
                              </span>
                              <span class="price-product">
                                  ${value.price}
                              </span>
                              <i class="bi bi-trash3-fill ic-del-cart"
                                 onclick="handleDeleteProductInCart(${value.id})"></i>
                          </div>`
      document.querySelector('.cart-body').innerHTML = document.querySelector('.cart-body').innerHTML + htmlProductInCart;
    })
  }
  
  function handleDeleteProductInCart(id) {
    listCart.forEach((value, index) => {
      if (value.id == id) {
        listCart.splice(index, 1)
      }
    });
    localStorage.setItem("listCart", JSON.stringify(listCart));
  
    //load lại dữ liệu cho cart
    document.querySelector('.cart-body').innerHTML = "";
    listCart.forEach((value) => {
      let htmlProductInCart = `
                          <div class="box-product-cart">
                              <div class="img-product">
                                  <img src="${value.img}"
                                       alt="">
                              </div>
                              <span class="title-product">
                                  ${value.title}
                              </span>
                              <span class="price-product">
                                  ${value.price}
                              </span>
                              <i class="bi bi-trash3-fill ic-del-cart"
                                 onclick="handleDeleteProductInCart(${value.id})"></i>
                          </div>`
      document.querySelector('.cart-body').innerHTML = document.querySelector('.cart-body').innerHTML + htmlProductInCart;
    })
  }
  