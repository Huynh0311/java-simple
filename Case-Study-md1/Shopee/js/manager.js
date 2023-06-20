let id1 = new sanPham("Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH", 199000, "https://down-vn.img.susercontent.com/file/e66cc386528d8c5119b59cd20ccacc22")
let id2 = new sanPham("Tai nghe bluetooth MINPRO M10 PRO, tai nghe không dây nghe nhạc chơi game công nghệ bluetooth 5.0", 119000, "https://down-vn.img.susercontent.com/file/sg-11134201-22110-eb1n4nx4f9jvef")
let id3 = new sanPham("Chuột game có dây Logitech G203 Lightsync - Tùy chỉnh RGB, 6 nút lập trình", 399000, "https://down-vn.img.susercontent.com/file/sg-11134201-22100-7rqolabplliv9e")
let id4 = new sanPham("Tai nghe Gaming Logitech G335 - hàng chính hãng", 1190000, "https://down-vn.img.susercontent.com/file/0e16d48fa2bbd7dcb4d775dd9c1702b8")
let id5 = new sanPham("Tai nghe True Wireless EPOS GTW270", 3358000, "https://down-vn.img.susercontent.com/file/sg-11134201-23010-vcb9rhs9czmva1")
let id6 = new sanPham("Apple Watch Series 7 Nhôm GPS Dây Thể Thao", 15990000, "https://down-vn.img.susercontent.com/file/sg-11134201-23020-fjfyk01o0cnve4")
let id7 = new sanPham("Tai nghe Xiaomi Mi Earphone Basic (Global Version) | Hàng chính hãng | Bảo hành 6 tháng", 99000, "https://down-vn.img.susercontent.com/file/sg-11134201-22100-c3nvzvk79iiv0a")

let sanPhams = [id1, id2, id3, id4, id5, id6, id7]
let indexEdit = -1;

function show(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `<div class="product-container">
                    <img class="product-img" src="${arr[i].img}">
                    <div class="textbody">
                    <div class="product-name">${arr[i].name}</div>
                    <div class="product-money">${arr[i].money.toLocaleString('vn-VI', {
            style: 'currency',
            currency: 'VND'
        })}</div>
                    <div class="btn-product">
                        <div class="btn-product-edit">
                            <button onclick="showEdit(${i})">Edit</button>
                            <button onclick="deleteNumber(${i})">Delete</button>
                        </div>
                        <div class="cart-btn">
                            <button onclick='addToCart(${JSON.stringify(arr[i])})'>Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                    </div>
                </div>`
    }

    let element = document.getElementById("display");
    element.innerHTML = str;

}

function add() {
    let name = document.getElementById("name").value;
    let money = parseFloat(document.getElementById("money").value);
    let img = document.getElementById("img").value;
    if (name === "" || money === "" || img === "") {
        alert("Bạn cần nhập đủ thông tin sản phẩm")
    } else {
        let newObj = new sanPham(name, money, img);
        if (indexEdit === -1) {
            if (!checkName()) {
                alert("Trùng tên rồi")
                return
            }
            let isConfirm = confirm('Bạn có muốn thêm không?')
            if (isConfirm) {
                sanPhams.push(newObj)
            }

        } else {
            let isConfirm = confirm('Bạn có muốn sửa không?')
            if (isConfirm) {
                sanPhams[indexEdit] = newObj;
                indexEdit = -1
            }
        }
        show(sanPhams);
    }
}

function deleteNumber(index) {
    let isConfirmDelete = confirm('Are you sure you want to delete')
    if (isConfirmDelete) {
    sanPhams.splice(index, 1);
    show(sanPhams);
    }
}

function showEdit(index) {
    indexEdit = index;
    document.getElementById("name").value = sanPhams[index].name;
    document.getElementById("money").value = sanPhams[index].money;
    document.getElementById("img").value = sanPhams[index].img;
}

function checkName() {
    let name = document.getElementById("name").value;
    for (let i = 0; i < sanPhams.length; i++) {
        if (sanPhams[i].name == name) {
            return false;
        }
    }
    return true;
}

// // button sort name
// function nameSort(){
//     sanPhams.sort((a, b) => a.name.localeCompare(b.name));
//     show(sanPhams)
// }
// // button sort money từ bé đến lớn
// function moneySort1(){
//     sanPhams.sort((a,b) => (a.money - b.money));
//     show(sanPhams)
// }
// // button sort money từ lớn đến bé
// function moneySort2(){
//     sanPhams.sort((a,b) => (b.money - a.money));
//     show(sanPhams)
// }

// input search
let searchInput = document.querySelector(".header__search-input")
searchInput.oninput = function () {
    let valueInputSearch = searchInput.value.toLowerCase();
    let arrNew = sanPhams.filter(item => item.name.toLowerCase().includes(valueInputSearch))
    show(arrNew);
}

// select sort
function sort(obj) {
    let arrSort = sanPhams.map(item => item)
    if (obj.value === 'sort') {
        show(sanPhams)
    } else if (obj.value === 'name') {
        arrSort.sort((a, b) => a.name.localeCompare(b.name));
        show(arrSort)
    } else if (obj.value === 'money1') {
        arrSort.sort((a, b) => (a.money - b.money))
        show(arrSort)
    } else if (obj.value === 'money2') {
        arrSort.sort((a, b) => (b.money - a.money))
        show(arrSort)
    }
}

// Tạo và hiển thị Cart
let arrCart = [];
function showCart(){
    let cartList = '';
    if (arrCart.length == 0){
        cartList += `<div class="header__cart-list--no-card-item">
                    <img src="assets/img/noCart.png" class="header__cart-list-no-card-img"/>
                    <span class="header__cart-list-no-card-msg">Chưa có sản phẩm</span>
                    `
    }else {
    cartList += '<div class="header__cart-list-item">';
        for (let i = 0; i < arrCart.length; i++) {
            cartList += `<div class="header__cart-list-body">
                        <img src="${arrCart[i].img}" alt="" class="header__cart-img-item">
                        <span class="header__cart-text-item">${arrCart[i].name}</span>
                        <button class="header__cart-list-btn-erase" onclick='deleteItemCart(${JSON.stringify(arrCart[i])})'>xóa</button>
                    </div>`
        }

    cartList += `</div>
                 <button class="btn-showAll">Xem giỏ hàng</button>
                 `
    }
    let element = document.querySelector(".header__cart-list");
    element.innerHTML = cartList;
}

// add vào giỏ hàng
function addToCart(item) {
    if (!checkCartList(item)) {
        alert("Bạn đã thêm sản phẩm này rồi");
        return;
    }
    arrCart.push(item)

showCart()
}

function checkCartList(item) {
    if (!arrCart.length) {
        return true;
    }
    for (let i = 0; i < arrCart.length; i++) {
            if (item.name === arrCart[i].name) {
                return false;
            }
    }
    return true;
}

function deleteItemCart(item) {
    arrCart.splice(item, 1);
    showCart(arrCart)
}
showCart()
show(sanPhams)
