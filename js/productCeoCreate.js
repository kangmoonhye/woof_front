const backend = "http://localhost:8080";

const getordersCreate = async (storeName, productName, contents, phoneNumber, price, file) => {
    try {
        // FormData 객체 생성
        const formData = new FormData();

        // JSON 데이터 추가
        const jsonData = {
            storeName: storeName,
            productName: productName,
            contents: contents,
            phoneNumber: phoneNumber,
            price: price
        };
        formData.append('jsonData', new Blob([JSON.stringify(jsonData)], { type: 'application/json' }));

        // 파일 추가 (만약 파일이 선택되었다면)
        if (file) {
            formData.append('uploadFile', file);
        }

        // axios로 POST 요청
        let response = await axios.post(`${backend}/orders/createCeo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // 서버로부터의 응답을 반환할 수 있음 (필요에 따라 사용)
        return response.data.result;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error; // 에러를 호출한 곳으로 다시 던지기
    }
};