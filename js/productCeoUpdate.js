window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idx = urlParams.get('idx');
    console.log('idx from URL:', idx);  // idx 값을 출력합니다
    if (idx) {
      loadProductInfo(idx);  // idx를 사용해 서버에서 상품 정보를 불러오는 함수
      }       

      function loadProductInfo(idx) {
        fetch(`http://localhost:8080/productCeo/${idx}`)
        .then(response => response.json())
        .then(data => {
      if (data.code === 1000) {
        const product = data.result;
        document.getElementById('idx').value = product.idx;
        document.getElementById('storeName').value = product.storeName;
        document.getElementById('productName').value = product.productName;
        document.getElementById('contents').value = product.contents;
        document.getElementById('phoneNumber').value = product.phoneNumber;
        document.getElementById('price').value = product.price;
                    }
                });
        }  

    document.getElementById('send').addEventListener('click', function() {
        // 입력 필드에서 값을 가져옵니다.
        const idx = Number(document.getElementById('idx').value);
        const storeName = document.getElementById('storeName').value;
        const productName = document.getElementById('productName').value;
        const contents = document.getElementById('contents').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const price = document.getElementById('price').value;

        // 서버로 요청을 보냅니다.
        fetch(`http://localhost:8080/productCeo/updateCeo`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idx: idx,
                storeName: storeName,
                productName: productName,
                contents: contents,
                phoneNumber: phoneNumber,
                price: price
            }),
        })  
        .then((response) => response.text())
        .then((data) => {
            if (data === "수정") {
                alert('상품이 성공적으로 수정되었습니다.');
                window.location.href = `/html/productCeoDetail.html?idx=${idx}`;
            } else {
                alert('상품 수정에 실패했습니다.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
};