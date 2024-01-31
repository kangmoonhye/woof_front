const backend = "http://localhost:8080"

const getOrdersRead = async (idx) => {
        // http://localhost:8080/orders/read?idx=숫자
    let response = await axios.get(`${backend}/orders/read?idx=${idx}`);
    // return response.data.result;
};
