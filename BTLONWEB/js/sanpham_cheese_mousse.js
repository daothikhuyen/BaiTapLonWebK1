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
        id: 24,
        img: "/img_cheese_mousse/cheesecake-chanh-day.png",
        title: "Bánh CheeseCake Chanh Dây[Trang Trí Bắt Mắt]",
        price: "470.000đ",
    },

    {
        id: 25,
        img: "/img_cheese_mousse/cheesecake-dau-tay.png",
        title: "Bánh CheeseCake Dâu Tây[Trang Trí Bắt Mắt]",
        price: "500.000đ",
    },

    {
        id: 26,
        img: "/img_cheese_mousse/mix-6-lop-rau-cau.png",
        title: "Mix 6 Lớp - Bánh Cheese & Mousse Việt Quất & Rau Câu",
        price: "450.000đ",
    },

    {
        id: 27,
        img: "/img_cheese_mousse/mix-6-lop-choco.png",
        title: "Mix 6 Lớp -  Cheese & Mousse Phúc Tử Bồn & Choco",
        price: "600.000đ",
    },

    {
        id: 28,
        img: "/img_cheese_mousse/mousse-bap-duyen-dang.jpg",
        title: "Bánh Sinh Nhật - Bánh Mousse Bắp - Mẫu Duyên Dáng",
        price:  "450.000đ",
    },

    {
        id: 29,
        img: "/img_cheese_mousse/mousse-gao-lut.png",
        title: "Bánh Mousse Gạo Lứt Nguyên Ổ Ăn Không Ngán",
        price: "400.000đ",
    },

    {
        id: 30,
        img: "/img_cheese_mousse/mousse-bap-long-lay.jpg",
        title: "Bánh Sinh Nhật - Bánh Mousse Bắp - Mẫu Lộng Lẫy",
        price: "450.000đ",
    },

    {
        id: 31,
        img: "/img_cheese_mousse/mousse-dua-nuong.webp",
        title: "Bánh Mousse Dừa Nướng Tặng Đồng Nghiệp",
        price: "1.000.000đ",
    },

    {
        id: 32,
        img: "/img_cheese_mousse/cupcake-mini-brownie.jpg",
        title: "Combo Cupcake Và Bánh Mini Brownie 10cm",
        price: "250.000đ",
    },

    {
        id: 33,
        img: "/img_cheese_mousse/cupcake-trang-tri-bang-trai-cay-tuoi.jpg",
        title: "Bánh Cupcake Trang Trí Bằng Trái Cây Tươi",
        price: "340.000đ",
    },

    {
        id: 34,
        img: "/img_cheese_mousse/cupcake-hinh-hoa-nghe-thuat.jpg",
        title: "Bánh Cupcake Sinh Nhật Tạo Hình Hoa Nghệ Thuật",
        price: "300.000đ",
    },
    
    {
        id: 35,
        img: "/img_cheese_mousse/cupcake-banh-mini-mousse-chanh-day.jpg",
        title: "Combo Cupcake Và Bánh Mini Mousse Chanh Dây",
        price: "250.000đ",
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
                                                <span>Từ khóa:Bánh kem Cheese & Mousse</span> <br> <br>
                                            </div>

                                            <div>
                                                <span>MÔ TẢ</span>
                                                <hr>
                                                <span>
                                                    <h5>${value.title}</h5>
                                                    <ul>
                                                        <li>Bánh kem Cheese & Mousse.</li>
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
  