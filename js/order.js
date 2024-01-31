<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

const sendData = async () => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let time = document.getElementById("time").value;
    let orderDetails = document.getElementById("orderDetails").value;
    let place = document.getElementsByClassName("place").value;
    let productManagerIdx = document.getElementById("productManagerIdx").value;
    let ordersIdx = document.getElementById("ordersIdx").value;
    let memberIdx = document.getElementById("memberIdx").value;

    // let password = document.getElementById("password").value;
    // let name = document.getElementById("name").value;

    let abcd = new FormData();
    let data = {
        name: name,
        phoneNumber: phoneNumber,
        time: time,
        orderDetails: orderDetails,
        place: place,
        productManagerIdx: productManagerIdx,
        ordersIdx: ordersIdx,
        memberIdx: memberIdx
    };

    let json = JSON.stringify(data);


    abcd.append(
        "orderDto",
        new Blob([json], {type: "application/json"})
    );

    let response = await axios.post("http://localhost:8080/orders/create",
        abcd, {
            "Content-Type": "application/json",
        }
    );
    // if (response.data.id !== null) {
    //     window.location.href = "/test.html"
    // }

    console.log(response, data);


};
