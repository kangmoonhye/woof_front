const backend = "http://localhost:8080";

// 상품 생성 요청을 서버에 전송하는 함수
const getProductCeoCreate = async (storeName, productName, phoneNumber, price, contents, file) => {
    // FormData 객체 생성
    const formData = new FormData();

    // JSON 데이터 추가
    const jsonData = {
        storeName: storeName,
        productName: productName,
        phoneNumber: phoneNumber,
        price: price,
        contents: contents
    };
    formData.append('postProductReq', new Blob([JSON.stringify(jsonData)], {type: 'application/json'}));

    // 파일 추가 (만약 파일이 선택되었다면)
    if (file) {
        formData.append('uploadFiles', file);
    }

    // axios로 POST 요청
    let response = await axios.post(`${backend}/productCeo/createCeo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    // 서버로부터의 응답을 반환
    return response.data.result;
};