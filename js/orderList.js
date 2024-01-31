const backend = "http://localhost:8080"

const getOrdersList = async () => {
    // http://localhost:8080/orders/list
    let response = await axios.get (backend+"/orders/list");
    return response.data.result;
};
