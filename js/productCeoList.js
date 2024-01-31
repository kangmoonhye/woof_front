const backend = "http://localhost:8080"

const getProductList = async () => {
  // http://localhost:8080/orders/listCeo
  let response = await axios.get(backend+"/orders/listCeo");
  return response.data.result;
};