// Mô hình 3 khối

// Đầu vào: Cho người dùng chọn lại khách hàng, nhập mã khách hàng, nhập số kênh

// Xử lý:
function tinhTienCap() {
    let mySelect = document.getElementById("mySelect").value,
        maKhachHang = document.getElementById("maKhachHang").value * 1,
        soKenh = document.getElementById("soKenh").value * 1,
        soKetNoi = document.getElementById("soKetNoi").value * 1;
    tongTien = 0;
    checkNull(mySelect, maKhachHang, soKenh);

    document.getElementById("tinhTienCap").innerHTML = tienCap(mySelect, maKhachHang, soKenh, tongTien, soKetNoi);
    document.getElementById("tinhTienCap").className = "bg-success card-footer text-white"
}

function checkNull(a, b, c) {
    if (!a || !b || !c) {
        alert("Nhập đầy đủ thông tin");
        return;
    }
}

function tienCap(mySelect, maKhachHang, soKenh, tongTien, soKetNoi) {
    let current = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    switch (mySelect) {
        case "dan":
            tongTien = soKenh * 7.5 + 4.5 + 20.5;
            break;
        case "doanhNghiep":
            if (soKetNoi <= 10) {
                tongTien = soKenh * 50 + 15 + 75;
            } else {
                tongTien = soKenh * 50 + 15 + 75 + (soKetNoi - 10) * 5;
            }
        default:
            break;
    }
    return ("Mã khách hàng: " + maKhachHang + "; Tiền cáp: " + current.format(tongTien));
}

function myFunction() {
    var x = document.getElementById("mySelect").value;
    if (x === "doanhNghiep") {
        document.getElementById("ketNoi").style.display = "block";
    } else {
        document.getElementById("ketNoi").style.display = "none";
    }
}

// Đầu ra: Xuất ra mã khách hàng và tính tiền cáp của khách hàng đó