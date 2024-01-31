function loadProductInfo(idx) {
    fetch(`http://localhost:8080/productCeo/${idx}`)
        .then(response => response.json())
        .then(data => {
            if (data.code === 1000) {
                const product = data.result;
                const filenames = product.filename.split(',');
                let imagesHtml = '';
                for (let filename of filenames) {
                    imagesHtml += `<img src="http://localhost:8080/images/${filename}"/>`;
                }
                document.getElementById('product-info').innerHTML = `
                    ${imagesHtml}
                    <h2>${product.storeName}</h2>
                    <p>${product.productName}</p>
                    <p>${product.phoneNumber}</p>
                    <p>${product.price}</p>
                    <p>${product.contents}</p>
                `;
            }
        });
}

function deleteProductInfo(idx) {
    $.ajax({
url: `http://localhost:8080/productCeo/deleteCeo?idx=${idx}`,
type: 'DELETE',
success: function() {
alert('상품이 성공적으로 삭제되었습니다.');
window.location.href = `/html/productCeoList.html`;
},
error: function() {
alert('상품 삭제에 실패했습니다.');
}
});
}

    
            // 페이지가 로드되면 제품 정보를 불러옵니다.
            window.onload = function() {
                const updateButton = document.getElementById('update-button');
            updateButton.addEventListener('click', function() {
                window.location.href = `/html/productCeoUpdate.html?idx=${idx}`;
    });
                const urlParams = new URLSearchParams(window.location.search);
                const idx = urlParams.get('idx');
                if (idx) {
                    loadProductInfo(idx);
                }
                const deleteButton = document.getElementById('delete-button');
            deleteButton.addEventListener('click', function() {
                if (confirm('정말로 이 상품을 삭제하시겠습니까?')) {
                    deleteProductInfo(idx);
                }

            });

        };