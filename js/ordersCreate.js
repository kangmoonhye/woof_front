const backend = "http://localhost:8080"

const getOrdersCreate = async () => {
    // http://localhost:8080/orders/create
    let response = await axios.post(backend+"/orders/create");
    return response.data.result;
};