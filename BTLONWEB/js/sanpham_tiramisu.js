let isLogin = JSON.parse(localStorage.getItem("isLogin"));

const btnLogin = document.querySelector('.btn-login');
const btnLogout = document.querySelector('.btn-logout');
const btnRegister = document.querySelector('.btn-register');
const icCart  = document.querySelector('.ic-cart');

if(isLogin) {
    btnLogin.classList.add("hidden");
    btnRegister.classList.add("hidden");
} else {
    btnLogout.classList.add("hidden");
    icCart.classList.add("hidden");
}

function handleLogout() {
    localStorage.setItem("isLogin", false);
}

let listProduct = [
    {
        id: 12,
        img: "/img_tiramisu/mung-tan-gia.jpg",
        title: "Bánh Tiramisu - Mừng Tân Gia Trang Trí Đơn Giản",
        price: "300.000đ",
    },

    {
        id: 13,
        img: "/img_tiramisu/dau-tay-phu-socola.jpg",
        title: "Bánh Tiramisu - Dâu Tây Phủ Lớp Socola Cực Xinh",
        price: "250.000đ",
    },

    {
        id: 14,
        img: "/img_tiramisu/hinh-trai-tim-ngot-ngao.jpg",
        title: "Bánh Tiramisu - Hình Trái Tim Ngọt Ngào",
        price: "400.000đ",
    },

    {
        id: 15,
        img: "/img_tiramisu/dau-tay-phu-lop-cacao.jpg",
        title: "Bánh Tiramisu - Hình Tròn Dâu Tây Phủ Lớp Cacao",
        price: "350.000đ",
    },

    {
        id: 16,
        img: "/img_tiramisu/trang-tri-cuc-dep-tang-ba.jpg",
        title: "Bánh Tiramisu - Trang Trí Cực Đẹp Tặng Ba",
        price: "500.000đ",
    },

    {
        id: 17,
        img: "/img_tiramisu/hinh-tron-trang-tri-dau-tay-don-gian.jpg",
        title: "Bánh Tiramisu - Hình Tròn Trang Trí Dâu Tây Đơn Giản",
        price: "450.000đ",
    },

    {
        id: 18,
        img: "/img_tiramisu/gau-cuc-ki-de-thuong.jpg",
        title: "Bánh Tiramisu - Hình Gấu Cực Kì Dễ Thương",
        price: "390.000đ",
    },

    {
        id: 19,
        img: "/img_tiramisu/trang-tri-dau-tay-cacao-ngotngao.jpg",
        title: "Bánh Tiramisu - Trang Trí Dâu Tây Cacao Ngọt Ngào",
        price: "550.000đ",
    },

    {
        id: 20,
        img: "/img_tiramisu/trang-tri-trai-cay-vun-banh-don-gian.jpg",
        title: "Bánh Tiramisu - Trang Tri Trái Cây Vụn Bánh Đơn Giản",
        price: "350.000đ",
    },

    {
        id: 21,
        img: "/img_tiramisu/hinh-trai-tim-chuc-mung-tinh-yeu.jpg",
        title: "Bánh Tiramisu - Hình Trái Tim Chúc Mừng Tình Yêu",
        price: "600.000đ",
    },

    {
        id: 22,
        img: "/img_tiramisu/trang-tri-trai-cay-va-that-no-de-thuong.jpg",
        title: "Bánh Tiramisu - Trang Trí Trái Cây Và Thắt Nơ Dễ Thương",
        price: "700.000đ",
    },

    {
        id: 23,
        img: "/img_tiramisu/mix-5-vi-ngot-ngao-sinh-dong.jpg",
        title: "Bánh Tiramisu - Mix 5 Vị Ngọt Ngào Sinh Động",
        price: "550.000đ",
    },

]

//cart product
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
    document.querySelector(".list-product").innerHTML += htmlProduct;
})

//detail product
function viewDetail(id) {
    listProduct.forEach((value) => {
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
                                                <span>Từ khóa:Bánh kem Tiramisu</span> <br> <br>
                                            </div>

                                            <div>
                                                <span>MÔ TẢ</span>
                                                <hr>
                                                <span>
                                                    <h5>${value.title}</h5>
                                                    <ul>
                                                        <li>Bánh kem Tiramisu.</li>
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
  